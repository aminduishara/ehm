import React, { useEffect, useState } from 'react'
import BookingDetailCmp from '../../components/BookingDetail/BookingDetailCmp'
import './Reservation.css'
import TotalCmp from '../../components/Total/TotalCmp'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment';

function Reservation({ bookingData, setBookingData }) {

    const [RoomQty, setValue] = useState(1);
    const [info, setInfo] = useState();
    const [roomInfo, setRoomInfo] = useState();
    const [rawdata, setRawdata] = useState();
    const [datediff, setDateDiff] = useState();
    const [total, setTotal] = useState(0);
    const fromDate = localStorage.getItem('fromDate');
    const toDate = localStorage.getItem('toDate');

    const BookingDetail = [];
    const params = useParams();

    const dataload = async () => {
        await axios.post(`room/getRateInfo`, { id: params.id, date: fromDate }).then(res => {
            const data = res.data.filter(item => item.roomtype === "1")
            setInfo(data[0])
            setRawdata(res.data)
        }).catch(function (error) {
            console.error(error);
            // setError(error.response.data.message);
        });

        await axios.post(`room/getRoomInfo`).then(res => {
            setRoomInfo(res.data);
        }).catch(function (error) {
            console.error(error);
            // setError(error.response.data.message);
        });
    }
    useEffect(() => {
        dataload();
        setDateDiff(dateConverter(toDate, fromDate));
    }, []);

    const dateConverter = (startDate, timeEnd) => {
        const newStartDate = new Date(startDate);
        const newEndDate = new Date(timeEnd);
        let result = moment(newStartDate).diff(newEndDate, 'days')
        return result
    }

    const decrement = () => {
        if (parseInt(RoomQty) - 1 > 0) {
            setValue(parseInt(RoomQty) - 1);
        }
    }

    const increment = () => {
        setValue(parseInt(RoomQty) + 1);
    }

    for (var i = 0; i < RoomQty; i++) {
        (rawdata && roomInfo) && BookingDetail.push(<BookingDetailCmp key={i} info={rawdata} datediff={datediff} roominfo={roomInfo} index={i} setTotal={setTotal} />);
    }

    return (
        <div className="col-12" style={{ flexDirection: 'column' }}>
            <div style={{ position: 'relative' }}>
                <div className="reservation__img"></div>
                <div className='reservation__transparentbg'>
                    <h2 style={{ fontWeight: 'bold' }}>{info && info.name}</h2>
                    <h6 style={{ fontWeight: '600' }}>From: {fromDate}<br /> To: {toDate}</h6>
                    <h6 style={{ fontWeight: '600' }}>{datediff && datediff} Days & {datediff && datediff - 1} Nights</h6>
                </div>
            </div>

            <div className='mt-5'>
                <h4>Add the number of rooms</h4>
                <h4>you want</h4>

                <div className='row mt-5'>
                    <div className="col-md-1 mb-2 text-center">
                        <button className="btn reservation__roomcount" value={RoomQty.toString()} onClick={(e) => { increment() }}><i className='fa-solid fa-plus'></i></button>
                    </div>
                    <div className="col-md-1 mb-2 text-center">
                        <h4>{RoomQty.toString()}</h4>
                    </div>
                    <div className="col-md-1 mb-2 text-center">
                        <button className="btn reservation__roomcount" value={RoomQty.toString()} onClick={(e) => { decrement() }}><i className='fa-solid fa-minus'></i></button>
                    </div>
                </div>
            </div>

            <div>
                {BookingDetail}
            </div>

            <TotalCmp total={total} setTotal={setTotal} />

            <div className="col-12 col-md-12 mb-5 mt-2 p-1">
                <div className="row">

                    <div className="col-md-3 h2 font-weight-bold">
                        Special<br />Request For<br /> Your <br />Reservation
                    </div>

                    <div className="col-md-6 font-weight-bold">
                        <textarea className="form-control" rows="8" placeholder="Please explain your request: arrival tie, flight details, food, preferences, membership number..."></textarea>
                    </div>

                    <div className="col-md-3 mt-2">
                        <Link className='btn btn-primary reservation__confirmbtn float-end' to="/userdetail">Confirm</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reservation