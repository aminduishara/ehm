import React from 'react'
import './SearchBarCss.css'
export default function SearchBarCmp() {
  return (

            <div className="card searchbar__card">
              <div className="card-body">
              <form action='#' method='post' className='searchbar__form'>
                <div className='row justify-content-between align-items-end'>
                <div className='col-md-2 col-lg-3'>
                <label htmlFor='checkIn'>Check In</label>
                <input type='date' className='form-control' style={{backgroundColor:"#0E79FF", borderColor:"#0E79FF", fontSize:"small"}} id='checkIn' name='checkin-date' />
                </div>
                <div className='col-md-2 col-lg-1 searchbar__verticalcenter'>
                  <div style={{borderLeft: "6px solid white", height: "40px", marginTop:"-24px"}}></div>
                </div>
                <div className='col-md-2 col-lg-3'>
                <label htmlFor='checkOut'>Check Out</label>
                <input type='date' className='form-control' style={{backgroundColor:"#0E79FF", borderColor:"#0E79FF", fontSize:"small"}} id='checkOut' name='checkout-date' />
                </div>
                <div className='col-md-2 col-lg-1 searchbar__verticalcenter'>
                  <div style={{borderLeft: "6px solid white", height: "40px", marginTop:"-24px"}}></div>
                </div>
                <div className='col-12 col-md-3 text-end searchbar__icon'>
                <button type='submit' className="btn searchbar__btn"><i className="fa fa-search fa-lg"></i></button>
                </div>
                </div>
            </form>
              </div>
            </div>
  )
}

