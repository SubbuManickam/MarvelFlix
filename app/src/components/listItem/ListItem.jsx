import React, { useState } from 'react'
import "./listItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

const ListItem = ({index}) => {
    
    const[isHovered, setIsHovered] = useState(false);

  return (
    <div className='listItem' style={{left: isHovered && index * 225 - 50 + index * 2.5}} 
    onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src="/ironman1.jpg" alt="" />
      <div className="itemInfo">
        <div className="icons">
            <PlayArrowIcon/>
            <AddIcon/>
            <ThumbUpOutlinedIcon/>
            <ThumbDownOutlinedIcon/>
        </div>
        <div className="itemInforTop">
            <span>2 hr 30 mins</span>
            <span className='age'>10+</span>
            <span>2008</span>
        </div>
        <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, dignissimos est quam pariatur cupiditate vitae, hic dolor tenetur odio assumenda recusandae quos iste? Alias ut debitis fugit temporibus itaque suscipit!
        </div>
        <div className="phase">
            Phase1
        </div>
      </div>
    </div>
  )
}

export default ListItem
