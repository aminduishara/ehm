import React from 'react'
import './UserDetails.css'

export default function UserDetails() {
    return (
        <div>
            <center><h1 className='userdetail_topic'>Guest Information</h1></center>
            <form className="container" style={{ marginBottom: '2rem' }}>
                <div className="row">
                    <div className="col-12 col-md-2">
                        <div className="form-outline mt-2">
                            <label className="form-label" htmlFor="form6Example1">Title</label>
                            <select className="form-select">
                                <option>Mr.</option>
                                <option>Mrs.</option>
                                <option>Miss</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-outline mt-2">
                            <label className="form-label" htmlFor="form6Example1">First name</label>
                            <input type="text" id="form6Example1" className="form-control" />
                        </div>
                        <div className="form-outline mt-2">
                            <label className="form-label" htmlFor="form6Example1">Country</label>
                            <select className="form-select">
                                <option>Sri Lanka</option>
                                <option>Australia</option>
                                <option>USA</option>
                            </select>
                        </div>
                        <div className="form-outline mt-2">
                            <label className="form-label" htmlFor="form6Example2">NIC</label>
                            <input type="text" id="form6Example2" className="form-control" />
                        </div>
                        <div className="form-outline mt-2">
                            <label className="form-label" htmlFor="form6Example2">Passport</label>
                            <input type="text" id="form6Example2" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-5 mt-2">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example2">Last name</label>
                            <input type="text" id="form6Example2" className="form-control" />
                        </div>

                        <div className="form-outline mt-2">
                            <label className="form-label" htmlFor="form6Example1">Nationality</label>
                            <select className="form-select">
                                <option>Sri Lankan</option>
                                <option>Foreign</option>
                            </select>
                        </div>
                        <div className="form-outline mt-2">
                            <label className="form-label" htmlFor="form6Example2">Email</label>
                            <input type="email" id="form6Example2" className="form-control" />
                        </div>
                        <div className="row mt-2">
                            <div className="col-sm-6">
                                <label className="form-label" htmlFor="form6Example2">Mobile No</label>
                                <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" id="form6Example2" className="form-control" placeholder="+94 777-1234-56" />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label" htmlFor="form6Example2">Telephone No</label>
                                <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" id="form6Example2" className="form-control" placeholder="+94 112-1234-56" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-12 col-md-2 mt-2">
                        <label className="form-label" htmlFor="form6Example1">Gender</label>
                        <select className="form-select">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className="col-md-5 mt-2">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example4">Date of Birth</label>
                            <input type="date" id="form6Example4" className="form-control" />
                        </div>
                    </div>

                    <div className="col-md-5 mt-2">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example4">Address</label>
                            <input type="text" id="form6Example4" className="form-control" />
                        </div>
                    </div>
                    <div className="text-end">
                        <button type="submit" className='btn btn-primary userdetail__savebtn'>Save</button>
                    </div>
                </div>

            </form>
        </div>
    )
}
