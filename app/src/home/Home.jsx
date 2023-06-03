import React, { useEffect, useState } from 'react'
import "./home.scss"
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/featured/Featured'
import List from '../components/list/List'
import axios from "axios"

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [phase, setPhase] = useState(null);

  useEffect(() => {
    const getRandomLists = async() => {
      try {
        const res = await axios.get(`lists${type ? "?type=" + type : ""}${phase ? "&phase=" + phase : ""}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2E4ZGNhMmY3NGUzZTA1ZWQzOTE2MCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODU3NTMzNTksImV4cCI6MTY4NTkyNjE1OX0.KwZ5aveV2DqM3Dwc-58VgaqD3qI-IvJaMjJCLxMDSlE"
          }
        });
        console.log(res.data);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [phase, type]);
  return (
    <div className='home'>
      <Navbar/>
      <Featured type={type}/>
      {lists.map((list) => (
        <List list={list}/>
      ))}
    </div>
  )
}

export default Home