import React from 'react'
import { FeaturedRoomsCard } from '../components/FeaturedRoomsCard'
import doubledeluxe from "../assets/rooms/doubledeluxe.jpeg"
import familydeluxe from "../assets/rooms/familydeluxe.jpeg"
import presidentail from "../assets/rooms/presidentail.jpeg"

const FeaturedRooms = () => {
    let main_text = {
        fontSize: "33px",
        color: "black",
        fontWeight: "800",
        fontFamily: "Monospace",
        marginTop: "30px",
        letterSpacing: "3px",
    }
    return (
        <>
            <div className='container text-center' style={main_text}>
                Features Room
            </div>
            <div className="container" id='line_under_text'>
            </div>
            <div class="container d-flex flex-column justify-content-center" id="cards">
                <div class="row justify-content-center">
                    <div class="col-sm-8 col-md-4">
                        <FeaturedRoomsCard image={doubledeluxe} price="$ 400" text="per night" message="Double Deluxe" />
                    </div>
                    <div class="col-sm-8 col-md-4">
                        <FeaturedRoomsCard image={familydeluxe} price="$ 600" text="per night" message="Family Deluxe" />
                    </div>
                    <div class="col-sm-8 col-md-4">
                        <FeaturedRoomsCard image={presidentail} price="$ 800" text="per night" message="Presidential" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedRooms
