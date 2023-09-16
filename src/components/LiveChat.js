import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';



const LiveChat = () => {

    const [LiveMessage, setLiveMesage] = useState();
    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages);



    useEffect(() => {
      const i =  setInterval(()=> {
       
        dispatch(addMessage({
            name: generateRandomName(),
            message: makeRandomMessage(20)
        }))
        }, 2000);

        return () => clearInterval(i);


    }, []);
  return (
    <>
    <div className='w-full h-[500px] p-2 ml-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
    {chatMessages.map((c, index)=><ChatMessage key={index} name={c.name} message={c.message}/>)}</div>

    </div>
    <form className='w-full p-2 ml-2 border border-black' onSubmit={(e)=>{
   e.preventDefault();
   dispatch(addMessage({
    name: "Akshay saini",
    message: LiveMessage,
   }));
   setLiveMesage("");
    }}>
    <input className=" w-86" type="text" value={LiveMessage} onChange={(e)=> {
        setLiveMesage(e.target.value)
    }} />
    <button className='px-2 mx-2 bg-green-200'>Submit</button>
    </form>
    </>
  )
}

export default LiveChat