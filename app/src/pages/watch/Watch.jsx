import React from 'react'
import "./watch.scss"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlinedIcon/>
            Home
        </div>
        <video className="video" autoPlay progress controls src=""></video>
    </div>
  )
}

export default Watch
