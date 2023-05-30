import React, { useState } from 'react'
import "./listItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

const ListItem = ({index}) => {
    
    const[isHovered, setIsHovered] = useState(false);
    const trailer = "https://www.youtube.com/watch?v=8ugaeA-nMTc"
  return (
    <div className='listItem' style={{left: isHovered && index * 225 - 50 + index * 2.5}} 
    onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src="/ironman1.jpg" alt="" />
      {isHovered && (
        <>
        <video src={trailer} autoPlay={true} loop/>
        <div className="itemInfo">
          <div className="icons">
              <PlayArrowIcon className='icon'/>
              <AddIcon className='icon'/>
              <ThumbUpOutlinedIcon className='icon'/>
              <ThumbDownOutlinedIcon className='icon'/>
          </div>
          <div className="itemInfoTop">
              <span>2 hr 30 mins</span>
              <span className='age'>10+</span>
              <span>2008</span>
          </div>
          <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, dignissimos est quam pariatur cupiditate vitae
          </div>
          <div className="phase">
              Phase1
          </div>
        </div>
        </>   
      )}
      </div>
  )
}

export default ListItem
