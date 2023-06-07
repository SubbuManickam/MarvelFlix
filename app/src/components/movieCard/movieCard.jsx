import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const MovieCard = ({index, item}) => {

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
    <div className='listItem' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img src={movie.img} alt="" />
        {isHovered && (
        <Card className='listCard'>
        <div className="itemInfo">
          <div className="icons">
          <Link to={{pathname:"/watch" }} state={movie}><PlayArrowIcon className='icon'/></Link>
              <AddIcon className='icon'/>
              <ThumbUpOutlinedIcon className='icon'/>
              <ThumbDownOutlinedIcon className='icon'/>
          </div>
          {/* <Card.Img variant="top" src={movie.img} /> */}
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.desc}</Card.Text>
          </Card.Body>
          </div>
        </Card>
        )}
    </div>
      );
}

export default MovieCard
