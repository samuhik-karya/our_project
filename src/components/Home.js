import React from 'react'
import PageHeader from './PageHeader'
import homeMain from '../assets/homeMain.jpg'
import ServiceSection from './ServiceSection'
import FeaturedRooms from './FeaturedRooms'

export default function Home() {
    return (
        <>
            <PageHeader image={homeMain} title='Luxurious Rooms' message='Deluxe Rooms Starting At $299' buttonTitle='Our Rooms' />
            <ServiceSection />
            <FeaturedRooms />
        </>
    )
}
