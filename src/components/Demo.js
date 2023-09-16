import  React from 'react';
import { useState } from 'react'

const Demo = () => {
    const [text, setText] = useState(0);
  return (
    <div className='m-4 p-2 w-96 border border-black'>
        <div>
            <input
            className='border border-black w-72 px-2'
            type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        
    </div>
  )
}

export default Demo