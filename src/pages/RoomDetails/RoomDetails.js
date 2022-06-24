import './RoomDetails.css';
import img1 from '../../Assets/imgs/img1.jpg'
import img2 from '../../Assets/imgs/img2.jpg'
import img3 from '../../Assets/imgs/img3.jpg'
import img4 from '../../Assets/imgs/img4.jpg'
import img5 from '../../Assets/imgs/img5.jpg'

const RoomDetails = () => {
    return (
        <div>
            <div className="col-md-12 row">
                <div className="col-md-6 row">
                    <img src={img1} className="col-md-12 img__cl1" />
                </div>
                <div className="col-md-6 row">
                    <img src={img2} className="col-md-6 img__cl2" />
                    <img src={img3} className="col-md-6 img__cl2" />
                    <img src={img4} className="col-md-6 img__cl2" />
                    <img src={img5} className="col-md-6 img__cl2" />
                </div>
            </div>

            <div className="col-md-12 text-left">
                <p className="p__title">Superior Room</p>
            </div>

        </div>
    );
}
export default RoomDetails