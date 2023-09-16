import React from 'react'

const Shimmer = () => {
  return (
      <div className="flex flex-wrap">
        {Array(15).fill("").map((e, index)=> ( <div className="bg-gray-200 p-2 m-3 h-48 w-72 rounded-xl">  
        </div>))}
       
      </div> 
  )
}

export default Shimmer;





// const Shimmer = () => {
//     return <div className="restaurant-list">
//         {Array(10).fill("").map((e, index) => (<div key={index}className="shimmer-card"></div>))}
//     </div>
// };

// export default Shimmer;