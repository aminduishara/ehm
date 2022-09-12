import './RoomDetails.css';

import img1 from '../../Assets/imgs/img1.jpg'
import img2 from '../../Assets/imgs/img2.jpg'
import img3 from '../../Assets/imgs/img3.jpg'
import img4 from '../../Assets/imgs/img4.jpg'
import img5 from '../../Assets/imgs/img5.jpg'
import img6 from '../../Assets/imgs/bed_icon.png'
import img7 from '../../Assets/imgs/bathtub_icon.png'
import img8 from '../../Assets/imgs/car_icon.png'
import img9 from '../../Assets/imgs/pawprint_icon.png'
import img10 from '../../Assets/imgs/kitchen.png'
import img11 from '../../Assets/imgs/television.png'
import img12 from '../../Assets/imgs/air-conditioner.png'
import img13 from '../../Assets/imgs/wifi.png'
import img14 from '../../Assets/imgs/laundry.png'
import img15 from '../../Assets/imgs/balcony.png'
import img16 from '../../Assets/imgs/insurance.png'
import { Link } from 'react-router-dom';


const RoomDetails = () => {
    return (
        <div className="mb-4">
            <div className="col-md-12 row">
                <div className="col-md-6 row">
                    <img src={img1} className="col-md-12 img__cl1" />
                </div>
                <div className="col-md-6 row pe-0">
                    <img src={img2} className="col-md-6 img__cl2" />
                    <img src={img3} className="col-md-6 img__cl2" />
                    <img src={img4} className="col-md-6 img__cl2" />
                    <img src={img5} className="col-md-6 img__cl2" />
                </div>
            </div>

            <div className="col-md-12 text-left">
                <p className="p__title">Superior Room</p>
            </div>

            <div className="col-md-12 row">
                <div className="col-md-9 row">
                    <div className="col-md-2 div__cl1">
                        <img src={img6} className="img__cl3" />
                        <p className="p_cl1">3 Bedrooms</p>
                    </div>
                    <div className="col-md-2 div__cl1">
                        <img src={img7} className="img__cl3" />
                        <p className="p_cl1">2 Bathrooms</p>
                    </div>
                    <div className="col-md-2 div__cl1">
                        <img src={img8} className="img__cl3" />
                        <p className="p_cl1">2 Cars / 2 Bikes</p>
                    </div>
                    <div className="col-md-2 div__cl1">
                        <img src={img9} className="img__cl3" />
                        <p className="p_cl1">0 Pets Allowed</p>
                    </div>
                </div>
                <div className="col-md-3 div__cl2 row">
                    <Link className="col-md-12 btn__Reserve text-center" to="/reservation" style={{ textDecoration: 'none' }}>Reserve Now</Link>
                    <div className="col-md-12 row">
                        <p className="col-md-6 p_cl1">Property Inquiry</p>
                        <p className="col-md-6 p_cl1">Contact Host</p>
                    </div>
                </div>

                <div className="col-md-9 row">
                    <div className="com-md-12 pt-4">
                        <p className="p_note_head">Apartment Description</p>
                        <p className="p_note_details">
                            Apartment hotels usually include a full kitchen and one or more bedrooms.
                            The difference between these hotels and apartments is that there is no monthly commitment.
                            If a guest wants to check out, they do not need to give notice to the hotel,
                            like you would with an apartment rental.
                            <br></br><br></br>
                            Apartment hotels usually include a full kitchen and one or more bedrooms.
                            The difference between these hotels and apartments is that there is no monthly commitment.
                            If a guest wants to check out, they do not need to give notice to the hotel,
                            like you would with an apartment rental.
                        </p>
                    </div>

                    <div className="com-md-12 pt-4">
                        <p className="p_note_head">Offered Amenities</p>
                        <div className="col-md-12 row">
                            <div className="col-md-6 row">
                                <img src={img10} className="col-md-3 img__cl4" />
                                <p className="col-md-9 p_lbl">Kitchen</p>
                            </div>
                            <div className="col-md-6 row">
                                <img src={img11} className="col-md-3 img__cl4" />
                                <p className="col-md-9 p_lbl">Television with Netflix</p>
                            </div>
                            <div className="col-md-6 row">
                                <img src={img12} className="col-md-3 img__cl4" />
                                <p className="col-md-9 p_lbl">Air Conditioner</p>
                            </div>
                            <div className="col-md-6 row">
                                <img src={img13} className="col-md-3 img__cl4" />
                                <p className="col-md-9 p_lbl">Free Wireless Internet</p>
                            </div>
                            <div className="col-md-6 row">
                                <img src={img14} className="col-md-3 img__cl4" />
                                <p className="col-md-9 p_lbl">Washer</p>
                            </div>
                            <div className="col-md-6 row">
                                <img src={img15} className="col-md-3 img__cl4" />
                                <p className="col-md-9 p_lbl">Balcony or Patio</p>
                            </div>
                        </div>

                    </div>

                    <div className="com-md-12 pt-4">
                        <p className="p_note_head">Safety and Hygiene</p>
                        <div className="col-md-12 row">
                            <div className="col-md-6 row">
                                <img src={img16} className="col-md-3 img__cl4" />
                                <p className="col-md-9 p_lbl">Daily Cleaning</p>
                            </div>
                            <div className="col-md-6 row">
                                <img src={img16} className="col-md-3 img__cl4" />
                                <p className="col-md-9 p_lbl">Fire Extinguisher</p>
                            </div>
                            <div className="col-md-6 row">
                                <img src={img16} className="col-md-3 img__cl4" />
                                <p className="col-md-9 p_lbl">Smoke Detectors</p>
                            </div>
                            <div className="col-md-6 row">
                                <img src={img16} className="col-md-3 img__cl4" />
                                <p className="col-md-9 p_lbl">disinfections and sterilizations</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default RoomDetails