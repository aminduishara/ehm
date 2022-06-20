import React from 'react'
import SearchBarCmp from '../components/SearchBar/SearchBarCmp'
import HotelList from '../components/HotelList/HotelList'

function Home() {
    return (
        <div>
            <SearchBarCmp/>
            <HotelList/>
        </div>

    )
}

export default Home