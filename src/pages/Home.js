import React, { useState, useEffect } from 'react'
import SearchBarCmp from '../components/SearchBar/SearchBarCmp'
import HotelDetailCmp from '../components/HotelDetail/HotelDetailCmp'
import axios from 'axios';

function Home() {
    const [rooms, setRooms] = useState();
    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState();
    const dataload = async () => {
        await axios.post(`room/getAvailableRooms`).then(res => {
            console.log(res.data);
            setRooms(res.data)
        }).catch(function (error) {
            console.error(error);
            // setError(error.response.data.message);
        });
    }
    const dataloadbyperiod = async () => {
        setRooms([])
        console.log(fromDate, toDate);
        await axios.post(`room/getAvailableRoomsByPeriod`, { fromDate: fromDate, toDate: toDate }).then(res => {
            console.log(res.data);
            setRooms(res.data)
        }).catch(function (error) {
            console.error(error);
            // setError(error.response.data.message);
        });
    }
    useEffect(() => {
        dataload();
    }, [])
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <SearchBarCmp fromDate={fromDate} toDate={toDate} setFromDate={setFromDate}
                    setToDate={setToDate} dataloadbyperiod={dataloadbyperiod} />
            </div>
            <div className="row">
                {rooms && rooms.map((room) => (
                    <HotelDetailCmp room={room} key={room.id} />
                ))}
            </div>
        </div>
    )
}

export default Home