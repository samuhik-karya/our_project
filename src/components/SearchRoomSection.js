import React from 'react'
import '../assets/stylesheets/roomsearch.css'

import FeaturedRoomsCard from './FeaturedRoomsCard'
import singleEconomy from '../assets/rooms/singleeconomy.jpeg'
import singleBasic from '../assets/rooms/singlebasic.jpeg'
import singleStandard from '../assets/rooms/singlestandard.jpeg'
import singleDeluxe from '../assets/rooms/singledeluxe.jpeg'
import doubleEconomy from '../assets/rooms/doubleeconomy.jpeg'
import doubleBasic from '../assets/rooms/doublebasic.jpeg'
import doubleStandard from '../assets/rooms/doublestandard.jpeg'
import doubleDeluxe from '../assets/rooms/doubledeluxe.jpeg'
import familyEconomy from '../assets/rooms/familyeconomy.jpeg'
import familyBasic from '../assets/rooms/familybasic.jpeg'
import familyStandard from '../assets/rooms/familystandard.jpeg'
import familyDeluxe from '../assets/rooms/familydeluxe.jpeg'
import presidential from '../assets/rooms/presidential.jpeg'

const SearchRoomSection = () => {
    let main_text = {
        fontSize: "33px",
        color: "black",
        fontWeight: "800",
        fontFamily: "Monospace",
        marginTop: "30px",
        letterSpacing: "3px",
    }
    return (
        <div className='container-flex'>
            <h1 className='text-center pt-5 pb-2' style={main_text}>Search Room</h1>
            <div className="container" id='line_under_text' />
            <div className="container d-flex flex-row justify-content-around flex-wrap align-items-center p-5">
                <div className='select-option'>
                    <label className="py-3" htmlFor="roomtype">Rooms Type</label><br></br>
                    <select className="custom-select custom-select-lg" id='select_room_type'>
                        <option value="All">All</option>
                        <option value="Single">Single</option>
                        <option value="Double">Double</option>
                        <option value="Family">Family</option>
                        <option value="Presidential">Presidential</option>
                    </select>
                </div>

                <div className='select-option2'>
                    <label  className="py-3" htmlFor="guest">Guests</label><br></br>
                    <select className="custom-select custom-select-lg" id='select_guest_number'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div className="form-group range_select">
                    <label className="py-3" htmlFor="ControlRange" id='range_id'>Room Price  $200</label><br />
                    <input type="range" className="form-control-range" id="controlrange" />
                </div>

                <div className="form-group text-start">
                    <label className="py-3" htmlFor="formControlRange">Room Size</label><br></br>
                    <input className="form-input" id='min_size' type="number" min="0" defaultValue={"0"} max="1000" />
                    <input className="form-input" id='max_size' type="number" min="0" max="1000" defaultValue={"1000"} />
                </div>

                <div id='last_option'>
                    <div className="form-check pt-3">
                        <input className="form-check-input" type="checkbox" value="BreakFast" id="BreakFast" />
                        <label className="form-check-label" >
                            BreakFast
                        </label>
                    </div>
                    <div className="form-check pb-2">
                        <input className="form-check-input" type="checkbox" value="Pets" id="Pets" />
                        <label className="form-check-label">
                            Pets
                        </label>
                    </div>
                </div>
            </div>

            <div class="container d-flex p-5 flex-wrap" id="cards">
                <FeaturedRoomsCard width="290px" message="Single Economy" price="$ 100" image={singleEconomy} />
                <FeaturedRoomsCard width="290px" message="Single Basic" price="$ 150" image={singleBasic} />
                <FeaturedRoomsCard width="290px" message="Single Standard" price="$ 250" image={singleStandard} />
                <FeaturedRoomsCard width="290px" message="Single Deluxe" price="$ 300" image={singleDeluxe} />
                <FeaturedRoomsCard width="290px" message="Double Economy" price="$ 200" image={doubleEconomy} />
                <FeaturedRoomsCard width="290px" message="Double Basic" price="$ 250" image={doubleBasic} />
                <FeaturedRoomsCard width="290px" message="Double Standard" price="$ 300" image={doubleStandard} />
                <FeaturedRoomsCard width="290px" message="Double Deluxe" price="$ 400" image={doubleDeluxe} />
                <FeaturedRoomsCard width="290px" message="Family Economy" price="$ 300" image={familyEconomy} />
                <FeaturedRoomsCard width="290px" message="Family Basic" price="$ 350" image={familyBasic} />
                <FeaturedRoomsCard width="290px" message="Family Standard" price="$ 400" image={familyStandard} />
                <FeaturedRoomsCard width="290px" message="Family Deluxe" price="$ 500" image={familyDeluxe} />
                <FeaturedRoomsCard width="290px" message="Presidential" price="$ 600" image={presidential} />
            </div>
        </div>
    )
}
export default SearchRoomSection
