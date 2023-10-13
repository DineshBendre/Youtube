import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

  const [searchQuery,setSearchQuery]=useState("");
  const [suggestions, setSuggestions]=useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);
  const searchCache=useSelector(store=>store.search);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }
      else{
        getSearchSuggestions()
      }
      getSearchSuggestions()},200);

    return()=>{
      clearTimeout(timer);
    };

  },[searchQuery]);


  const getSearchSuggestions= async()=>{
    const data= await fetch(YOUTUBE_SEARCH_API+ searchQuery);
    const json= await data.json();
    setSuggestions(json[1]);

    dispatch(cacheResults({
      [searchQuery]:json[1],
    }));
  };

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
          <div>
            <input 
              className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full' 
              type='text'
              value={searchQuery}
              onChange={(e)=>setSearchQuery(e.target.value)}
              onFocus={()=>setShowSuggestions(true)}
              onBlur={()=>setShowSuggestions(false)}
              />
            <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>🔍</button>
            </div>
            { showSuggestions && <div className='fixed bg-white py-2 px-2 w-[33rem] shadow-lg rounded-lg border border-gray-200'>
              <ul>
                {suggestions.map(s=> <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-300'>🔍 {s} </li>)}

              </ul>
            </div>}
        </div>
        <div className='col-span-1 px-10'>
           <img className='h-10' alt='user' src='https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png'></img> 
        </div>
    </div>
  )
};

export default Head;