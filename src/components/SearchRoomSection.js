import React from 'react'
import '../components/roomsearch.css'

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
        <>
            <div className='container text-center' style={main_text}>
                Search Room
            </div>
            <div className="container" id='line_under_text'>
            </div>
            <div className="container d-flex flex-row all_items">
                <div className='select-option'>
                    <label htmlFor="roomtype">Rooms Type</label><br></br>
                    <select className="custom-select custom-select-lg mb-5" id='select_room_type'>
                        <option value="All">All</option>
                        <option value="Single">Single</option>
                        <option value="Double">Double</option>
                        <option value="Family">Family</option>
                        <option value="Presidential">Presidential</option>
                    </select>
                </div>

                <div className='select-option2'>
                    <label htmlFor="geust">Guests</label><br></br>
                    <select className="custom-select custom-select-lg mb-5" id='select_guest_number'>
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
                    <label htmlFor="ControlRange" id='range_id'>Room Price  $200</label><br></br>
                    <input type="range"  className="form-control-range" id="controlrange" />
                </div>

                <div className="form-group text-start">
                    <label htmlFor="formControlRange">Room Size</label><br></br>
                    <input className="form-input" id='min_size' type="number" min="0" defaultValue={"0"} max="1000" />
                    <input className="form-input" id='max_size' type="number" min="0" max="1000" defaultValue={"1000"} />
                </div>

                <div className='conatiner ' id='last_option'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="BreakFast" id="BreakFast" />
                        <label className="form-check-label" >
                            BreakFast
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="Pets" id="Pets" />
                        <label className="form-check-label">
                            Pets
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchRoomSection
