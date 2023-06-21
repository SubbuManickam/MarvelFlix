import React, { useEffect, useState } from 'react'
import "./featured.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Featured = ({type, setPhase}) => {

  const [featuredMovie, setFeaturedMovie] = useState({});
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getFeaturedMovie = async() => {
      try {
        const res = await axios.get(`/movies/featured?type=${type}` , {
          headers: {
            token: "Bearer "+ JSON.parse(localStorage.getItem("user")).token
          }
        });
        const movie = await axios.get("/movies/getMovie/" + res.data[0]._id, {
          headers: {
            token: "Bearer "+ JSON.parse(localStorage.getItem("user")).token
          }
        });
        setFeaturedMovie(res.data[0]);
        setMovie(movie.data);
      } catch (err) {
        console.log(err)
      }
    };
    getFeaturedMovie();
  }, [type]);

  return (
    <div className='featured'>
      {/* {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="phase" id="phase" onChange={(e) => setPhase(e.target.value)}>
            <option value="">Phase</option>
            <option value="phase1">Phase 1</option>
            <option value="phase2">Phase 2</option>
            <option value="phase3">Phase 3</option>
            <option value="phase4">Phase 4</option>
            <option value="phase5">Phase 5</option>
          </select>
        </div>
      )} */}
      <img src={featuredMovie.thumb} alt="" className='featuredImage'/>
      <div className="info">
        <img src={featuredMovie.logo} alt="" />
        <span className='desc'>{featuredMovie.desc}</span>
        <div className="buttons">
        <Link to={{pathname:"/watch" }} state={movie} style={{textDecoration: 'none'}}>
            <button className="play">
                <PlayArrowIcon/>
                <span>Play</span>
            </button>
        </Link>
            <button className="more">
                <InfoOutlinedIcon/>
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Featured;
