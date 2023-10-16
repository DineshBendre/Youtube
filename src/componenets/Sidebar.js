import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen= useSelector(store=>store.app.isMenuOpen)

    //Early return pattern
    if(!isMenuOpen) return null;
    
  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li className='font-bold  p-2 hover:bg-gray-300 rounded-lg'><Link to="/">Home</Link></li>
        <li className='font-bold p-2 hover:bg-gray-300 rounded-lg'>Shorts</li>
        <li className='font-bold p-2 hover:bg-gray-300 rounded-lg'>Subscriptions</li>
      </ul>
      <br></br>
      <ul>
        <li className='font-bold p-2 hover:bg-gray-300 rounded-lg'>Library</li>
        <li className='font-bold p-2 hover:bg-gray-300 rounded-lg'>History</li>
        <li className='font-bold p-2 hover:bg-gray-300 rounded-lg'>Watch Later</li>
        <li className='font-bold p-2 hover:bg-gray-300 rounded-lg'>Liked Videos</li>
      </ul>
      <br></br>
      <h1 className='font-bold pt-5 p-23 hover:bg-gray-300 rounded-lg'>Subscriptions</h1>
      <ul>
        <li className='font-bold p-3 hover:bg-gray-300 rounded-lg'>Mr Beast</li>
        <li className='font-bold p-2 hover:bg-gray-300 rounded-lg'>Akshay Saini</li>
        <li className='font-bold p-2 hover:bg-gray-300 rounded-lg'>Love Babbar</li>
      </ul>
      <br></br>
      <ul>
        <li className='font-bold p-2 hover:bg-gray-300 rounded-lg'>Trending</li>
        <li className='font-bold p-2 hover:bg-gray-300 rounded-lg'>Live</li>
        <li className='font-bold p-2 hover:bg-gray-300 rounded-lg'>Music</li>
      </ul>

    </div>
  )
}

export default Sidebar;