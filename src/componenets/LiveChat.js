import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {

    const[LiveMessage,setLiveMessage]=useState("");

    const dispatch=useDispatch();

    const chatMessages=useSelector(store=> store.chat.messages);
useEffect(()=>{
    const i= setInterval(()=>{
        //API polling
        dispatch(addMessage({
            name: generateRandomName(),
            message: makeRandomMessage(20)+ " 🤘 "
        }))
    },1500);

    return()=>clearInterval(i);
},[])

  return (
    <>
    <div className='w-full h-[400px] ml-2 p-2 border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse'>
    <div>
        {chatMessages.map((c,i)=>(<ChatMessage key={i} name={c.name} message={c.message}/>))
        }
        </div>
        </div>
        <form className='w-full p-2 ml-2 border border-black' onSubmit={(e)=>{
            e.preventDefault();
            console.log("ON form Submit",LiveMessage);
            dispatch(addMessage({
                name: "Dinesh",
                message: LiveMessage,
            }))
            setLiveMessage("");
        }}>
            <input className=' px-2 w-96 border border-black' type='text' value={LiveMessage} onChange={(e)=>{
                setLiveMessage(e.target.value);
            }}/>
            <button className='px-2 mx-2 bg-green-100'>Send</button>
        </form>
    </>
  );
};

export default LiveChat;