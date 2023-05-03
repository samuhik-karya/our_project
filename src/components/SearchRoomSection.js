import React, { useState } from 'react'
import Room from '../model/Room'
import '../assets/stylesheets/roomsearch.css'
import NoElement from './NoElement'

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

    let rooms = [
        new Room(singleEconomy, "Single Economy", "Single", 200, 1, 100, false, false),
        new Room(singleBasic, "Single Basic", "Single", 200, 1, 150, false, false),
        new Room(singleStandard, "Single Standard", "Single", 300, 1, 250, true, false),
        new Room(singleDeluxe, "Single Deluxe", "Single", 400, 1, 300, true, true),


        new Room(doubleEconomy, "Double Economy", "Double", 300, 2, 200, false, false),
        new Room(doubleBasic, "Double Basic", "Double", 300, 2, 250, false, false),
        new Room(doubleStandard, "Double Standard", "Double", 400, 2, 300, true, false),
        new Room(doubleDeluxe, "Double Deluxe", "Double", 500, 2, 400, true, true),

        new Room(familyEconomy, "Family Economy", "Family", 500, 3, 300, false, false),
        new Room(familyBasic, "Family Basic", "Family", 500, 5, 350, false, false),
        new Room(familyStandard, "Family Standard", "Family", 600, 5, 400, true, false),
        new Room(familyDeluxe, "Family Deluxe", "Family", 700, 6, 500, true, true),

        new Room(presidential, "Presidential", "Presidential", 1000, 10, 600, true, true),
    ]

    let main_text = {
        fontSize: "33px",
        color: "black",
        fontWeight: "800",
        fontFamily: "Monospace",
        marginTop: "30px",
        letterSpacing: "3px",
    }

    const [roomsSearchResult, setRoomSearchResult] = useState(rooms);
    const [roomType, setRoomType] = useState(null);
    const [totalPerson, setTotalPerson] = useState(1);
    const [roomPrice, setRoomPrice] = useState(600);
    const [roomSize, setRoomSize] = useState(0);
    const [breakfastAvailable, setBreakfastAvailable] = useState(null);
    const [petAvailable, setPetAvailable] = useState(null);

    var myPrice = roomPrice

    const searchRooms = (searchValue, searchType) => {
        if (searchType === "Type") {
            searchValue = (searchValue === "All") ? null : searchValue;
            setRoomType(searchValue);
            const finalRooms = rooms.filter((element) => {
                return (
                    (searchValue === null || searchValue === element.type) &&
                    totalPerson <= element.person &&
                    (breakfastAvailable === null || breakfastAvailable === element.breakfast) &&
                    (petAvailable === null || petAvailable === element.pet) &&
                    (roomPrice >= element.price) &&
                    roomSize <= element.size
                );
            });
            setRoomSearchResult(finalRooms);
        } else if (searchType === "Person") {
            setTotalPerson(searchValue);
            const finalRooms = rooms.filter((element) => {
                return (
                    (roomType === null || roomType === element.type) &&
                    searchValue <= element.person &&
                    (breakfastAvailable === null || breakfastAvailable === element.breakfast) &&
                    (petAvailable === null || petAvailable === element.pet) &&
                    (roomPrice >= element.price) &&
                    roomSize <= element.size
                );
            });
            setRoomSearchResult(finalRooms);
        } else if (searchType === "Breakfast") {
            searchValue = (searchValue) ? searchValue : null
            setBreakfastAvailable(searchValue);
            const finalRooms = rooms.filter((element) => {
                return (
                    (roomType === null || roomType === element.type) &&
                    totalPerson <= element.person &&
                    (searchValue === null || searchValue === element.breakfast) &&
                    (petAvailable === null || petAvailable === element.pet) &&
                    (roomPrice >= element.price) &&
                    roomSize <= element.size
                );
            });
            setRoomSearchResult(finalRooms);
        } else if (searchType === "Pet") {
            searchValue = (searchValue) ? searchValue : null
            setPetAvailable(searchValue)
            const finalRooms = rooms.filter((element) => {
                return (
                    (roomType === null || roomType === element.type) &&
                    totalPerson <= element.person &&
                    (breakfastAvailable === null || breakfastAvailable === element.breakfast) &&
                    (searchValue === null || searchValue === element.pet) &&
                    (roomPrice >= element.price) &&
                    roomSize <= element.size
                );
            })
            setRoomSearchResult(finalRooms);
        } else if (searchType === 'Price') {
            setRoomPrice(searchValue)
            const finalRooms = rooms.filter((element) => {
                return (
                    (roomType === null || roomType === element.type) &&
                    totalPerson <= element.person &&
                    (breakfastAvailable === null || breakfastAvailable === element.breakfast) &&
                    searchValue >= element.price &&
                    (petAvailable === null || petAvailable === element.pet) &&
                    roomSize <= element.size
                );
            })
            setRoomSearchResult(finalRooms);
        } else if (searchType === "Size") {
            setRoomSize(searchValue)

            const finalRooms = rooms.filter((element) => {
                return (
                    (roomType === null || roomType === element.type) &&
                    totalPerson <= element.person &&
                    (breakfastAvailable === null || breakfastAvailable === element.breakfast) &&
                    roomPrice >= element.price &&
                    (petAvailable === null || petAvailable === element.pet) &&
                    searchValue <= element.size
                );
            })
            setRoomSearchResult(finalRooms);
        }
    };

    return (
        <div className='container-flex'>
            <h1 className='text-center pt-5 pb-2' style={main_text}>Search Room</h1>
            <div className="container" id='line_under_text' />
            <div className="container options d-flex flex-row justify-content-around flex-wrap align-items-center p-5">
                <div className='select-option'>
                    <label className="py-3" htmlFor="roomtype">Rooms Type</label><br></br>
                    <select onChange={(e) => searchRooms(e.target.value, "Type")} className="custom-select custom-select-lg" id='select_room_type'>
                        <option value="All">All</option>
                        <option value="Single">Single</option>
                        <option value="Double">Double</option>
                        <option value="Family">Family</option>
                        <option value="Presidential">Presidential</option>
                    </select>
                </div>

                <div className='select-option2'>
                    <label className="py-3" htmlFor="guest">Guests</label><br></br>
                    <select onChange={(e) => searchRooms(e.target.value, "Person")} className="custom-select custom-select-lg" id='select_guest_number'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div className="form-group range_select">
                    <label className="py-3" htmlFor="ControlRange" id='range_id'>Room Price ${myPrice}</label><br />
                    <input type="range" className="form-control-range" max='600' min='0' value={myPrice} onChange={(e) => { searchRooms(e.target.value, "Price") }} id="controlrange" />
                </div>

                <div className="form-group text-start">
                    <label className="py-3" htmlFor="formControlRange">Room Size</label><br></br>
                    <input className="form-input" id='min_size' type="number" min="0" onChange={(e) => { searchRooms(e.target.value, "Size") }} defaultValue={"0"} max="1000" />
                    <input className="form-input" id='max_size' type="number" min="0" max="1000" defaultValue={"1000"} />
                </div>

                <div id='last_option'>
                    <div className="form-check pt-3">
                        <input onChange={(e) => { searchRooms(e.target.checked, "Breakfast") }} className="form-check-input" type="checkbox" value="BreakFast" id="BreakFast" />
                        <label className="form-check-label" >
                            BreakFast
                        </label>
                    </div>
                    <div className="form-check pb-2">
                        <input onChange={(e) => { searchRooms(e.target.checked, "Pet") }} className="form-check-input" type="checkbox" value="Pets" id="Pets" />
                        <label className="form-check-label">
                            Pets
                        </label>
                    </div>
                </div>
            </div>

            {(roomsSearchResult.length === 0) ?
                <div className="container p-5 text-center">
                    <NoElement />
                </div> :
                <div className="container d-flex p-5 flex-wrap" id="cards">
                    {roomsSearchResult.map((element) => {
                        return <FeaturedRoomsCard width="290px" message={element.name} price={element.price} image={element.image} />
                    })}
                </div>
            }
        </div>
    )
}
export default SearchRoomSection
