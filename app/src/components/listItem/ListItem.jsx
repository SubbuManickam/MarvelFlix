import React, { useEffect, useState } from 'react'
import "./listItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListItem = ({index, item}) => {
    
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
      const getMovieDetails = async () => {
        try {
          const res = await axios.get("/movies/getMovie/" + item, {
            headers: {
              token: "Bearer "+ JSON.parse(localStorage.getItem("user")).token
            }
          });
          // console.log(res.data);
          setMovie(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getMovieDetails();
    }, [item])
    return (
    <Link to={{pathname:"/watch" }} state={movie}>
      <div className='listItem' style={{left: isHovered && index * 225 - 50 + index * 2.5}} 
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src={movie.img} alt="" />
      {isHovered && (
        <>
        {/* <ReactPlayer url="https://www.youtube.com/watch?v=8ugaeA-nMTc" playing={true} width="100%" height="100%" muted={true} controls={true}/> */}
        <video src={movie.video} autoPlay muted loop/>
        <div className="itemInfo">
          <div className="icons">
              <PlayArrowIcon className='icon'/>
              <AddIcon className='icon'/>
              <ThumbUpOutlinedIcon className='icon'/>
              <ThumbDownOutlinedIcon className='icon'/>
          </div>
          <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className='age'>{item.age}+</span>
              <span>{movie.year}</span>
          </div>
          <div className="desc">{movie.desc}</div>
          <div className="phase">{movie.phase}</div>
        </div>
        </>   
      )}
      </div>
    </Link>
  )
}

export default ListItem
