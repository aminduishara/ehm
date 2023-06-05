import React from 'react'
import { useNavigate } from 'react-router-dom';
import './HotelDetailCss.css'

const imageURL = 'https://demo.meetanu.com/upload/category/';
export default function HotelDetailCmp({ room, fromDate, toDate }) {
  const navigate = useNavigate();
  const opendetails = (id) => {
    if (fromDate && toDate) {
      navigate('/roomdetail/' + id);
      localStorage.setItem('fromDate', fromDate);
      localStorage.setItem('toDate', toDate);
    } else {
      alert('Please select check in and check out date first')
    }
  }
  return (
    <div className="col-md-4">
      <div className="card mt-3 shadow bg-white rounded">
        <img className="card-img-top hoteldetail__card" src={imageURL + room.image} alt="Room Image" style={{ height: '250px', width:'100%' }}/>
        <div className="card-body hoteldetail__cardbody">
          <h6 className="card-title" style={{ textAlign: "left" }}>{room.name}</h6>
          <p className="card-text">{room.description}</p>          
          <h6 className="d-flex justify-content-center btn btn-danger"> {room.basis_name} - {room.currency} {room.amount}</h6>
        </div>
        <div className="card-footer text-center" style={{ background: 'none' }}>
          {/* <Link to={"/roomdetail/" + room.id} className="btn btn-dark">Book from {room.currency}{room.amount}</Link> */}
          <button className="btn btn-dark" onClick={() => { opendetails(room.id) }}>Book Now</button>
        </div>
      </div>
    </div>
  )
}
