import React from 'react'
import "./featured.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = () => {
  return (
    <div className='featured'>
      <img src="/Subbu.Manickam.jpg" alt="" />
      <div className="info">
        <img src="/ironman.webp" alt="" />
        <span className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et earum animi assumenda! Culpa impedit obcaecati rerum sapiente non neque nihil architecto quam alias beatae. Nemo dignissimos quia nam vel dolorum?</span>
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
