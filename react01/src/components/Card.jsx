 import React from 'react'
 
 const Card = (props) => {
   return (
     <div className='card'> 
      <img src= {props.img} alt="" />
      <h1>{props.user}</h1>
      <p>{props.about}</p>
      <button>View more</button>
     </div>
   )
 }
 
 export default Card