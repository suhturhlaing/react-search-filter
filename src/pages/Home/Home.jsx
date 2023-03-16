import React, { useEffect, useState } from 'react'
// import { Container } from 'react-bootstrap'
import "../Home/Home.css";
import { Link } from "react-router-dom"
import List from "../../components/List/List.jsx"


const Home = () => {
  const loadData = (filter = '') => {
    const savedItem = localStorage.getItem("storeData");
    let parsedItem = JSON.parse(savedItem);
    if (parsedItem !== "" && filter !== "") {
      parsedItem = parsedItem.filter(x => {
        return x.name.includes(filter);
      })
    }
    setData(parsedItem)
  }
  const [data, setData] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const searchEvent = (e) => {
    setSearchWord(e.target.value)
    loadData(e.target.value);
  }
  //console.log("data", data);

  return (
    <>
      <div className='home'>
        <div className='title'>
          <h2>Fruits</h2>
        </div>

        <div className='top'>
          <button className='button'>
            <Link to="/create" className='link'>
              Create
            </Link>
          </button>

          <input type="text"
            placeholder='Search here'
            className='search'
            value={searchWord}
            onChange={searchEvent}
          />
        </div>

        <div className='bottom'>
          <h4>Name</h4>
          {
            data.map((item, index) => <List item={item} key={"list" + index} />)
          }
        </div>
      </div>
    </>
  )
}

export default Home
