import React from 'react'
import RoomMain from '../assets/roomMain.jpeg'
import PageHeader from './PageHeader'
import SearchRoomSection from './SearchRoomSection'


export default function Room() {
  return (
    <>
        <PageHeader title='Our Rooms' image={RoomMain} buttonTitle='Return Home'/>
        <SearchRoomSection />
    </>
  )
}