import React from 'react'
import './BookingDetailCss.css'

export default function BookingDetailCmp() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="col-8 col-md-12 col-sm-8">
        <div className="card bookingdetail__card rounded">
          <div className="card-body">
            <div className="row d-flex align-items-center">
              <div className="col-sm-3 h6">
                Bedroom No
              </div>
              <div className="col-md-2 mb-2">
                <select className='bookingdetail__customselect'>
                  <option>Single</option>
                  <option>Double</option>
                  <option>Triple</option>
                </select>
              </div>
              <div className="col-md-1 mb-2 text-center">
                <button className="btn bookingdetail__count">01</button>
              </div>
              <div className="col-md-2 mb-2">
                <select className='bookingdetail__customselect'>
                  <option>Halfboard</option>
                  <option>Fullboard</option>
                  <option>Room Only</option>
                </select>
              </div>
              <div className="col-md-2 mb-2 d-flex justify-content-center">
                <div className="form-check">
                  <input className="form-check-input me-2" type="checkbox" value="1" id="flexCheckDefault" style={{ width: 18, height: 18 }} />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Children
                  </label>
                </div>
              </div>
              <div className="col-md-2 h6 text-center">
                $ 200
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
