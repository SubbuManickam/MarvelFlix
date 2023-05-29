import React from 'react'
import "./featured.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = ({type}) => {
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
