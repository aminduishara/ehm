import React from 'react'
import BookingDetailCmp from '../../components/BookingDetail/BookingDetailCmp'
import './Reservation.css'
import TotalCmp from '../../components/Total/TotalCmp'

function Reservation() {
    return (
        <div>
            <div className='reservation__img'>
                <div className='reservation__transparentbg'>
                <h2>Superior Rooom</h2>
                <h6>100 Smart Street, LA, USA</h6>
                </div>
            </div>

            <div className='mt-5'>
                <h4>Add the number of rooms</h4>
                <h4>you want</h4>

                <div className='row mt-5'>

                            <div className="col-md-1 mb-2 text-center">
                                <button className="btn reservation__roomcount"><i className='fa-solid fa-plus'></i></button>
                            </div>
                            <div className="col-md-1 mb-2 text-center">
                                <button className="btn"><h4>01</h4></button>
                            </div>

                            <div className="col-md-1 mb-2 text-center">
                                <button className="btn reservation__roomcount"><i className='fa-solid fa-minus'></i></button>
                            </div>

                </div>               

            </div>



            <BookingDetailCmp/>
            <BookingDetailCmp/>
            <BookingDetailCmp/>
            <BookingDetailCmp/>

            
            <br></br><br></br><br></br>

            <TotalCmp/>
            <br></br><br></br><br></br>

            <div className="col-8 col-md-12 col-sm-8 mb-5">
                    <div className="row d-flex align-items-center">

                    <div className="col-sm-3 h2 font-weight-bold">
                        Special<br/>Request For<br/> Your <br/>Reservation
                    </div>

                    <div className="col-6 font-weight-bold">
                        <textarea type="text-area" className="form-control" style={{width:'700px', height:'250px'}}x>Please explain your request: arrival tie, flight details, food, preferences, membership number ....</textarea>
                    </div>

                    <div className="col-sm-3 text-end">
                        <button type="submit" className='btn btn-primary reservation__confirmbtn'>Confirm</button>
                    </div>
                    
                    </div>
            </div>
        </div>        
    )
}

export default Reservation