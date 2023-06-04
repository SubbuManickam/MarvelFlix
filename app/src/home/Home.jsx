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
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          }
        });
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
      <Featured type={type} setPhase={setPhase}/>
      {lists.map((list) => (
        <List list={list}/>
      ))}
    </div>
  )
}

export default Home;