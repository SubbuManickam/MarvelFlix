import React, { useRef, useState } from 'react'
import "./list.scss"
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../listItem/ListItem';

const List = ({list}) => {

    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef()

    const handleScroll = (side) => {
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(side === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if(side === "right" && slideNumber < 4) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
  return (
    <div className='list'>
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlinedIcon className='sliderArrow left' onClick={() => handleScroll("left")}/>
        <div className="container" ref={listRef}>
            {list.content.map((item, index) => (
              <ListItem index={index} item={item} key={index}/>
            ))}
        </div>
        <ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick={() => handleScroll("right")}/>
      </div>
    </div>
  )
}

export default List
