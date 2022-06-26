import React from 'react'
import BookingDetailCmp from '../../components/BookingDetail/BookingDetailCmp'
import BeachImg from './beach.jpg'
import './Reservation.css'
import TotalCmp from '../../components/Total/TotalCmp'

function Reservation() {
    return (
        <div>
            <div className='reservation__img'>
                Hello EveryOne
            </div>
            <BookingDetailCmp/>
            <TotalCmp/>
            <br></br><br></br><br></br>

            <div className="col-8 col-md-12 col-sm-8">
                    <div className="row d-flex align-items-center">

                    <div className="col-sm-3 h2 font-weight-bold">
                        Special<br/>Request For<br/> Your <br/>Reservation
                    </div>
                    <div className="col-sm-3 font-weight-bold">
                        <textarea type="text-area" className="form-control" style={{width:'500px', height:'250px'}}x>Please explain your request: arrival tie, flight details, food, preferences, membership number ....</textarea>
                    </div>
                    <div className="col-12 text-end">
                        <button type="submit" className='btn btn-primary reservation__confirmbtn'>Confirm</button>
                    </div>
                    
                    </div>
            </div>

        </div>        
    )
}

export default Reservation