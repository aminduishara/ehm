import React from 'react'
import HotelImg from './Hotel.jpg'

export default function HotelDetailCmp() {
  return (
    <div>
        <div className="card hoteldetail__card m-5 shadow bg-white rounded" style={{width: "18rem"}}>
        <img className="card-img-top hoteldetail__card" src={HotelImg} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title" style={{textAlign:"center"}}>Superior Room</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <center><a href="#" className="btn btn-dark">Book from $200</a></center>
        </div>
        </div>
    </div>
  )
}
