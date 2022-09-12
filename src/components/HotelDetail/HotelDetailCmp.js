import React from 'react'
import { Link } from 'react-router-dom';
import HotelImg from './Hotel.jpg'
import './HotelDetailCss.css'

export default function HotelDetailCmp({ room }) {
  return (
    <div className="col-md-4">
      <div className="card mt-3 shadow bg-white rounded">
        <img className="card-img-top hoteldetail__card" src={HotelImg} alt="Card image cap" />
        <div className="card-body hoteldetail__cardbody">
          <h5 className="card-title" style={{ textAlign: "center" }}>{room.name}</h5>
          <p className="card-text">{room.des}</p>
        </div>
        <div className="card-footer text-center" style={{ background: 'none' }}>
          <Link to="/roomdetail" className="btn btn-dark">Book from $200</Link>
        </div>
      </div>
    </div>
  )
}
