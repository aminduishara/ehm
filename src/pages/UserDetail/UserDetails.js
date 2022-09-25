import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './UserDetails.css'
import UserInfo from '../../components/UserInfo/UserInfo';
import axios from 'axios'

const initialValues = {
    title: 1,
    firstname: "",
    lastname: "",
    country: 1,
    nationality: 1,
    nic: "",
    email: "",
    passport: "",
    mobile: "",
    tel: "",
    gender: 1,
    dob: "",
    address: ""
};

export default function UserDetails({ bookingData, setBookingData }) {
    const navigate = useNavigate();
    const params = useParams();
    const [users, setUsers] = useState([]);
    const [values, setValues] = useState(initialValues);
    const fromDate = localStorage.getItem('fromDate');
    const toDate = localStorage.getItem('toDate');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSave = async () => {
        await axios.post(`room/saveReservation`, { id: params.id, fromdate: fromDate, todate: toDate, values: values, bookingData: bookingData }).then(res => {
            // setRawdata(res.data)
            console.log(res.data);
        }).catch(function (error) {
            console.error(error);
            // setError(error.response.data.message);
        });
    }

    useEffect(() => {
        if (bookingData.length <= 0) {
            navigate('/reservation/' + params.id)
        } else {
            if (bookingData.length > 1) {
                let d = [];
                for (let i = 0; i < bookingData.length - 1; i++) {
                    d.push(<UserInfo key={i} />);
                }
                setUsers(d);
            }
        }
    }, [])
    return (
        <>
            <center><h1 className='userdetail_topic'>Guest Information</h1></center>
            <form className="container" style={{ marginBottom: '2rem' }}>
                <div className="row">
                    <div className="col-12 col-md-2">
                        <div className="form-outline mt-2">
                            <label className="form-label" htmlFor="title">Title</label>
                            <select className="form-select" value={values.title} onChange={handleInputChange} name="title" id="title">
                                <option value="1">Mr.</option>
                                <option value="2">Mrs.</option>
                                <option value="3">Miss</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-outline mt-2">
                            <label className="form-label" htmlFor="firstname">First name</label>
                            <input type="text" className="form-control" value={values.firstname} onChange={handleInputChange} name="firstname" id="firstname" />
                        </div>
                        <div className="form-outline mt-2">
                            <label className="form-label" htmlFor="country">Country</label>
                            <select className="form-select" value={values.country} onChange={handleInputChange} name="country" id="country">
                                <option value="1">Sri Lanka</option>
                                <option value="2">Australia</option>
                                <option value="3">USA</option>
                            </select>
                        </div>
                        <div className="form-outline mt-2">
                            <label className="form-label" htmlFor="nic">NIC</label>
                            <input type="text" className="form-control" value={values.nic} onChange={handleInputChange} name="nic" id="nic" />
                        </div>
                        <div className="form-outline mt-2">
                            <label className="form-label" htmlFor="passport">Passport</label>
                            <input type="text" className="form-control" value={values.passport} onChange={handleInputChange} name="passport" id="passport" />
                        </div>
                    </div>
                    <div className="col-md-5 mt-2">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="lastname">Last name</label>
                            <input type="text" className="form-control" value={values.lastname} onChange={handleInputChange} name="lastname" id="lastname" />
                        </div>

                        <div className="form-outline mt-2">
                            <label className="form-label" htmlFor="nationality">Nationality</label>
                            <select className="form-select" value={values.nationality} onChange={handleInputChange} name="nationality" id="nationality">
                                <option value="1">Sri Lankan</option>
                                <option value="2">Foreign</option>
                            </select>
                        </div>
                        <div className="form-outline mt-2">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input type="email" className="form-control" value={values.
                                email} onChange={handleInputChange} name="email" id="email" />
                        </div>
                        <div className="row mt-2">
                            <div className="col-sm-6">
                                <label className="form-label" htmlFor="mobile">Mobile No</label>
                                <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={values.mobile} onChange={handleInputChange} name="mobile" id="mobile" className="form-control" placeholder="+94 7xx-xxxx-xxx" />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label" htmlFor="form6Example2">Telephone No</label>
                                <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={values.tel} onChange={handleInputChange} name="tel" id="tel" className="form-control" placeholder="+94 1xx-xxxx-xx" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-12 col-md-2 mt-2">
                        <label className="form-label" htmlFor="gender">Gender</label>
                        <select className="form-select" value={values.gender} onChange={handleInputChange} name="gender" id="gender">
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Other</option>
                        </select>
                    </div>

                    <div className="col-md-5 mt-2">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example4">Date of Birth</label>
                            <input type="date" value={values.dob} onChange={handleInputChange} name="dob" id="dob" className="form-control" />
                        </div>
                    </div>

                    <div className="col-md-5 mt-2">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="address">Address</label>
                            <input type="text" value={values.address} onChange={handleInputChange} name="address" id="address" className="form-control" />
                        </div>
                    </div>
                    {users && users.length > 0 && (
                        <h3 className="mt-5">Additional Guests Information</h3>
                    )}
                    {users && users.map(user => (
                        user
                    ))}
                    <div className="text-end">
                        <button type="button" className='btn btn-primary userdetail__savebtn' onClick={handleSave}>Save</button>
                    </div>
                </div>

            </form>
        </>
    )
}
