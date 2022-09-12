import React, { useState } from 'react'
import BookingDetailCmp from '../../components/BookingDetail/BookingDetailCmp'
import './Reservation.css'
import TotalCmp from '../../components/Total/TotalCmp'
import { Link } from 'react-router-dom'

function Reservation() {

    const [RoomQty, setValue] = useState("1");

    const BookingDetail = [];

    for (var i = 0; i < RoomQty; i++) {
        BookingDetail.push(<BookingDetailCmp key={i} />);
    }

    return (
        <div className="col-12" style={{ flexDirection: 'column' }}>
            <div style={{ position: 'relative' }}>
                <div className="reservation__img"></div>
                <div className='reservation__transparentbg'>
                    <h2 style={{ fontWeight: 'bold' }}>Superior Room</h2>
                    <h6 style={{ fontWeight: '600' }}>100 Smart Street, LA, USA</h6>
                </div>
            </div>

            <div className='mt-5'>
                <h4>Add the number of rooms</h4>
                <h4>you want</h4>

                <div className='row mt-5'>
                    <div className="col-md-1 mb-2 text-center">
                        <button className="btn reservation__roomcount" value={RoomQty.toString()} onClick={(e) => { setValue(parseInt(e.target.value) + 1) }}><i className='fa-solid fa-plus'></i></button>
                    </div>
                    <div className="col-md-1 mb-2 text-center">
                        <h4>{RoomQty.toString()}</h4>
                    </div>
                    <div className="col-md-1 mb-2 text-center">
                        <button className="btn reservation__roomcount" value={RoomQty.toString()} onClick={(e) => { setValue(parseInt(e.target.value) - 1) }}><i className='fa-solid fa-minus'></i></button>
                    </div>
                </div>
            </div>

            <div>
                {BookingDetail}
            </div>

            <TotalCmp />

            <div className="col-12 col-md-12 mb-5 mt-2 p-1">
                <div className="row">

                    <div className="col-md-3 h2 font-weight-bold">
                        Special<br />Request For<br /> Your <br />Reservation
                    </div>

                    <div className="col-6 font-weight-bold">
                        <textarea type="text-area" className="form-control" style={{ width: '700px', height: '250px' }}>Please explain your request: arrival tie, flight details, food, preferences, membership number ....</textarea>
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