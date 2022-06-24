import React from 'react'
import './BookingDetailCss.css'

export default function BookingDetailCmp() {
  return (
    <div>

      <div className="card bookingdetail__card">
        <div className="card-body">
          <div className="row d-flex align-items-center">
            <div className="col-sm-3 h6">
              Bedroom No
            </div>
            <div className="col-md-2">
              <select className='bookingdetail__customselect'>
                <option>Single</option>
                <option>Double</option>
                <option>Triple</option>
              </select>
            </div>
            <div className="col-md-1 text-center">
            <button className="btn bookingdetail__count">01</button>
            </div>
            <div className="col-md-2">
            <select className='bookingdetail__customselect'>
                <option>Halfboard</option>
                <option>Fullboard</option>
                <option>Room Only</option>
              </select>
            </div>
            <div className="col-md-2">
            <div class="form-check">
                <input class="form-check-input me-2" type="checkbox" value="1" id="flexCheckDefault" style={{width: 18, height: 18}} />
              <label class="form-check-label" for="flexCheckDefault">
                Children
              </label>
            </div>
            </div>
            <div className="col-md-2 h6">
              $ 200
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
