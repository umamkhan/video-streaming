import React from 'react'

const ChatMessage = ({name , message}) => {
  return (
    <div className='flex items-center shadow-sm'>
         <img className="h-5" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdhisNFW7fKyQWwIxhye0ErMf_OC3F2cXwfAhoC0&s" />
         <span className='font-bold p-2'>{name}</span>
         <span>{message}</span>
    </div>
  )
}

export default ChatMessage