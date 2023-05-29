import React, { useRef, useState } from 'react'
import "./list.scss"
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../listItem/ListItem';

const List = () => {

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
      <span className="listTitle">Continue to Watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlinedIcon className='sliderArrow left' onClick={() => handleScroll("left")}/>
        <div className="container" ref={listRef}>
            <ListItem index={0}/>
            <ListItem index={1}/>
            <ListItem index={2}/>
            <ListItem index={3}/>
            <ListItem index={4}/>
            <ListItem index={5}/>
            <ListItem index={6}/>
            <ListItem index={7}/>
            <ListItem index={8}/>
            <ListItem index={9}/>
        </div>
        <ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick={() => handleScroll("right")}/>
      </div>
    </div>
  )
}

export default List
