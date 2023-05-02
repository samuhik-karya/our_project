import React from 'react'
import { FeaturedRoomsCard } from '../components/FeaturedRoomsCard'
import doubledeluxe from "../assets/rooms/doubledeluxe.jpeg"
import familydeluxe from "../assets/rooms/familydeluxe.jpeg"
import presidential from "../assets/rooms/presidential.jpeg"

const FeaturedRooms = () => {
    let main_text = {
        fontSize: "33px",
        color: "black",
        fontWeight: "800",
        fontFamily: "Monospace",
        padding: "14px",
        letterSpacing: "3px",
    }

    return (
        <>
            <div className='container text-center' style={main_text}>Features Room</div>
            <div className="container" id='line_under_text' />
            <div class="container d-flex justify-content-around p-5"  id="cards">
                <FeaturedRoomsCard image={doubledeluxe} width="30%" price="$ 400" text="per night" message="Double Deluxe" />
                <FeaturedRoomsCard image={familydeluxe} width="30%" price="$ 600" text="per night" message="Family Deluxe" />
                <FeaturedRoomsCard image={presidential} width="30%" price="$ 800" text="per night" message="Presidential" />
            </div>
        </>
    )
}

export default FeaturedRooms
