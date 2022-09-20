import React, { useState, useEffect } from 'react'
import './BookingDetailCss.css'

export default function BookingDetailCmp({ info, datediff, roominfo, index }) {
  const [currentIndex, setCurrentIndex] = useState(index + 1);
  const [amount, setAmount] = useState();
  const [firstInfo, setFirstInfo] = useState();
  const [basis, setBasis] = useState(21);
  const [type, setType] = useState();
  useEffect(() => {
    let data = info.filter((info) => info.basis === '21' && info.roomtype === '1')[0];
    setFirstInfo(data);
    setAmount(data.amount * datediff);
  }, []);
  const numberWithCommas = (x) => {
    return parseFloat(x).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }
  const ratechange = () => {
    console.log(basis, type);
  }
  return (
    <div className="col-12 d-flex justify-content-center align-items-center">
      <div className="col-12 col-md-12 col-sm-12">
        <div className="card bookingdetail__card rounded">
          <div className="card-body">
            <div className="row d-flex align-items-center">
              <div className="col-sm-3 h6">
                Room {currentIndex && pad(currentIndex, 2)}
              </div>
              <div className="col-md-2 mb-2">
                <select className='bookingdetail__customselect' value={type} onChange={(e) => { setType(e.target.value); ratechange() }}>
                  {roominfo.type && roominfo.type.map((room) => (
                    <option value={room.id} key={room.id}>{room.name}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-1 mb-2 text-center">
                {/* <button className="btn bookingdetail__count">01</button> */}
              </div>
              <div className="col-md-2 mb-2">
                <select className='bookingdetail__customselect' value={basis} onChange={(e) => { setBasis(e.target.value); ratechange() }}>
                  {roominfo.basis && roominfo.basis.map((room) => (
                    <option value={room.id} key={room.id}>{room.name}</option>
                  ))}
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
              <div className="col-md-2 h5 text-end">
                {firstInfo && firstInfo.currency} {amount && numberWithCommas(amount)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
