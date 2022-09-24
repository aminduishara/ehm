import React from 'react'
import './UserInfo.css';

function UserInfo() {
    return (
        <div>
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
                        <input type="text" id="AdFirstname" className="form-control" />
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="form-outline mt-2">
                        <label className="form-label" htmlFor="form6Example1">Email</label>
                        <input type="email" id="AdEmailname" className="form-control" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo