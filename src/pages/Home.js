import React, {useState} from 'react'
import SearchBarCmp from '../components/SearchBar/SearchBarCmp'
import HotelDetailCmp from '../components/HotelDetail/HotelDetailCmp'

function Home() {
    const roomData = [
        {
            id: 1,
            name: 'Deluxe',
            des: "The attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more:"
        },{
            id: 2,
            name: 'Superior',
            des: "The href ata link, use a button and change it with appropriate styles. Learn more:"
        },{
            id: 3,
            name: 'Superior Deluxe',
            des: "The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provi"
        },{
            id: 4,
            name: 'Executive Suite',
            des: "The href attribute requires a valid value to be accessible. Provide a valid, se a button and change it with appropriate styles. Learn more:"
        },{
            id: 5,
            name: 'Penthhouse',
            des: "The href attribute requires a valid value to be accessible. Provide a valid, a button and change it with appropriate styles. Learn more:"
        },
    ]
    const [rooms, setRooms] = useState(roomData);
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <SearchBarCmp />
            </div>
            <div className="row">
                {rooms.map((room) => (
                    <HotelDetailCmp room={room} key={room.id} />
                ))}
            </div>
        </div>
    )
}

export default Home