import React, { useEffect, useState } from 'react'
import "./featured.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from 'axios';

const Featured = ({type}) => {

  const [featuredMovie, setFeaturedMovie] = useState({});

  useEffect(() => {
    const getFeaturedMovie = async() => {
      try {
        const res = await axios.get(`/movies/featured?type=${type}` , {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2E4ZGNhMmY3NGUzZTA1ZWQzOTE2MCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODU3NTMzNTksImV4cCI6MTY4NTkyNjE1OX0.KwZ5aveV2DqM3Dwc-58VgaqD3qI-IvJaMjJCLxMDSlE"
          }
        });
        setFeaturedMovie(res.data[0]);
      } catch (err) {
        console.log(err)
      }
    };
    getFeaturedMovie();
  }, [type]);

  return (
    <div className='featured'>
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="phase" id="phase">
            <option>Phase</option>
            <option value="phase1">Phase 1</option>
            <option value="phase2">Phase 2</option>
            <option value="phase3">Phase 3</option>
            <option value="phase4">Phase 4</option>
            <option value="phase5">Phase 5</option>
          </select>
        </div>
      )}
      <img src={featuredMovie.img} alt="" />
      <div className="info">
        <img src={featuredMovie.logo} alt="" />
        <span className='desc'>{featuredMovie.desc}</span>
        <div className="buttons">
            <button className="play">
                <PlayArrowIcon/>
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlinedIcon/>
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
