import './RoomDetails.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const imageURL = 'https://demo.meetanu.com/upload/category/';
const RoomDetails = () => {
    const params = useParams();
    const [info, setInfo] = useState();
    const dataload = async () => {
        await axios.post(`room/getRoomDetails`, { id: params.id }).then(res => {
            console.log(res.data);
            setInfo(res.data)
        }).catch(function (error) {
            console.error(error);
            // setError(error.response.data.message);
        });
    }
    useEffect(() => {
        dataload();
    }, []);
    return (
        info && (
            <div className="mb-4">
                <div className="col-md-12 row">
                    <div className="col-md-6 row">
                        <img src={imageURL + info.images[0].image} className="col-md-12 img__cl1" />
                    </div>
                    <div className="col-md-6 row pe-0">
                        <img src={imageURL + info.images[1].image} className="col-md-6 img__cl2" />
                        <img src={imageURL + info.images[2].image} className="col-md-6 img__cl2" />
                        <img src={imageURL + info.images[3].image} className="col-md-6 img__cl2" />
                        <img src={imageURL + info.images[4].image} className="col-md-6 img__cl2" />
                    </div>
                </div>

                <div className="col-md-12 text-left">
                    <p className="p__title">{info.info.roomname} </p>
                </div>

                <div className="col-md-12 row">
                    <div className="col-md-9 row">
                        {info.features.map(post => (
                            <div className="col-md-2 div__cl1">
                                <i className={post.icon + ' ' + "img__cl3 fa-xl"}></i>
                                <p className="p_cl1">{post.no} {post.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-3 div__cl2 row">
                        <Link className="col-md-12 btn__Reserve text-center" to={`/reservation/` + params.id} style={{ textDecoration: 'none' }}>Reserve Now</Link>
                    </div>

                    <div className="col-md-9 row">
                        <div className="com-md-12 pt-4">
                            <p className="p_note_head">Description</p>
                            <p className="p_note_details">
                                {info.info.description}
                            </p>
                        </div>

                        <div className="com-md-12 pt-4">
                            <p className="p_note_head">Offered Amenities</p>
                            <div className="col-md-12 row">
                                {info.amenities && info.amenities.map((post) => {
                                    return (
                                        <div className="col-md-6 row">
                                            <p className="col-md-9 p_lbl">{post.name}</p>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>

                        <div className="com-md-12 pt-4">
                            <p className="p_note_head">Safety and Hygiene</p>
                            <div className="col-md-12 row">
                                {info.safetyandhygiene && info.safetyandhygiene.map((post) => {
                                    return (
                                        <div className="col-md-6 row">
                                            <p className="col-md-9 p_lbl">{post.name}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    );
}
export default RoomDetails