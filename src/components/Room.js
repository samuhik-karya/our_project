import React from 'react'
import RoomMain from '../assets/roomMain.jpeg'
import PageHeader from './PageHeader'
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


export default function Room() {
  return (
    <>
        <PageHeader title='Our Rooms' image={RoomMain} buttonTitle='Return Home'/>
        <div class="container d-flex p-5 flex-wrap"  id="cards">
        <FeaturedRoomsCard width="22%" message="Single Economy" price="$ 100" image={singleEconomy}/>
            <FeaturedRoomsCard width="22%" message="Single Basic" price="$ 150" image={singleBasic}/>
            <FeaturedRoomsCard width="22%" message="Single Standard" price="$ 250" image={singleStandard}/>
            <FeaturedRoomsCard width="22%" message="Single Deluxe" price="$ 300" image={singleDeluxe}/>
            <FeaturedRoomsCard width="22%" message="Double Economy" price="$ 200" image={doubleEconomy}/>
            <FeaturedRoomsCard width="22%" message="Double Basic" price="$ 250" image={doubleBasic}/>
            <FeaturedRoomsCard width="22%" message="Double Standard" price="$ 300" image={doubleStandard}/>
            <FeaturedRoomsCard width="22%" message="Double Deluxe" price="$ 400" image={doubleDeluxe}/>
            <FeaturedRoomsCard width="22%" message="Family Economy" price="$ 300" image={familyEconomy}/>
            <FeaturedRoomsCard width="22%" message="Family Basic" price="$ 350" image={familyBasic}/>
            <FeaturedRoomsCard width="22%" message="Family Standard" price="$ 400" image={familyStandard}/>
            <FeaturedRoomsCard width="22%" message="Family Deluxe" price="$ 500" image={familyDeluxe}/>
            <FeaturedRoomsCard width="22%" message="Presidential" price="$ 600" image={presidential}/>
            </div>
        <div className='container d-flex justify-content-around p-5'>
           
         
        </div>  
    </>
  )
}