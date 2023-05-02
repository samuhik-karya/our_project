import React from 'react'
import "../assets/stylesheets/roomCard.css"

export const FeaturedRoomsCard = (props) => {
  return (
    <div className='card m-2' style={{width: props.width}}>
      <img src={props.image} alt="Hello" />
      <div className='text_about_room'>
        {props.message}
      </div>
      <div className='text_about_price'>
        {props.price} <br />
        <h6 className='text'>per night</h6>
      </div>
      <button className='border-0 px-3 roombotton fw-semibold'
        style={{ backgroundColor: "#af9a7d", fontSize: "98%", letterSpacing: "2px" }}>
        Feature</button>
    </div>
  )
}

export default FeaturedRoomsCard
