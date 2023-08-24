import React from 'react'
import './homepage.scss'
import NavBar from '../compnents/navbar/NavBar'
import Featured from '../compnents/featured/Featured'
import List from '../compnents/list/List'


const Homepage = () => {
  return (
    <div className='homepage'>
      <NavBar />
      <Featured />
      <List />
      <List />
      <List />
     </div>
  )
}

export default Homepage