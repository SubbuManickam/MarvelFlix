import React, { useEffect, useState } from 'react'
import "./listItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const ListItem = ({index, item}) => {
    
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
      const getMovieDetails = async () => {
        try {
          const res = await axios.get("/movies/getMovie/" + item, {
            headers: {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2E4ZGNhMmY3NGUzZTA1ZWQzOTE2MCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODU3NTMzNTksImV4cCI6MTY4NTkyNjE1OX0.KwZ5aveV2DqM3Dwc-58VgaqD3qI-IvJaMjJCLxMDSlE"
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
