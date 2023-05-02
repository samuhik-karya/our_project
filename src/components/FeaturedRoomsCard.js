import React from 'react'


export const FeaturedRoomsCard = (props) => {
  return (
    <>
      <div>
        <div className='card' id='card'>
            <img src={props.image} alt="Hello" id='image'/>
            <div className='text_about_room'>
                {props.message}
            </div> 
            <div className='text_about_price'>
                {props.price} <br></br>
                <h6 className='text'>per night</h6>
            </div>  
            <button className='border-0 py-1 px-2 roombotton fw-semibold'
             style={{backgroundColor: "#af9a7d", fontSize: "20px", letterSpacing: "3px"}}>
                Feature</button>
        </div>
      </div>
    </>
  )
}

export default FeaturedRoomsCard
