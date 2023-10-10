import React from 'react'
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';

const Head = () => {
const dispatch =useDispatch();

  const toggleMenuHandler= ()=>{
    dispatch(toggleMenu());
  };
  return (
    <div className='grid grid-flow-col p-2 m-1 shadow-lg'>
        <div className='flex col-span-1'>
          <img 
            onClick={()=> toggleMenuHandler()}
            className='h-14 cursor-pointer' 
            alt='menu'
            src='https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg'
          />
          <a href='/'>
          <img 
            className='h-14'
            alt='youtube-logo'
            src='https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg'
            />
            </a>
        </div>
        <div className='col-span-10'>
            <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text'/>
            <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>🔍</button>
        </div>
        <div className='col-span-1 px-10'>
           <img className='h-10' alt='user' src='https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png'></img> 
        </div>
    </div>
  )
};

export default Head;