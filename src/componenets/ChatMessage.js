import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2' >
        <img className='h-7' alt='user' src='https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png'></img>
    <span className='font-bold px-2'>{name}</span>
    <span>{message}</span>
    </div>
  )
}

export default ChatMessage