import React from 'react'
import BookingDetailCmp from '../../components/BookingDetail/BookingDetailCmp'
import './Reservation.css'
import TotalCmp from '../../components/Total/TotalCmp'
import { Link } from 'react-router-dom'

function Reservation() {
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

                <div className="mt-5 d-flex align-items-center">
                    <div className="col-2 col-md-1 mb-2 text-start">
                        <button className="btn reservation__roomcount"><i className='fa-solid fa-plus'></i></button>
                    </div>
                    <div className="col-2 col-md-1 mb-2 text-center">
                        <h4>01</h4>
                    </div>
                    <div className="col-2 col-md-1 mb-2 text-end">
                        <button className="btn reservation__roomcount"><i className='fa-solid fa-minus'></i></button>
                    </div>
                </div>
            </div>
            <BookingDetailCmp />
            <BookingDetailCmp />
            <BookingDetailCmp />
            <BookingDetailCmp />

            <TotalCmp />

            <div className="col-12 col-md-12 mb-5 mt-2 p-1">
                <div className="row">

                    <div className="col-md-3 h2 font-weight-bold">
                        Special<br />Request For<br /> Your <br />Reservation
                    </div>

                    <div className="col-md-6 font-weight-bold">
                        <textarea className="form-control" style={{ width: '100%' }} rows="8" placeholder="Please explain your request: arrival time, flight details, food, preferences, membership number ...."></textarea>
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