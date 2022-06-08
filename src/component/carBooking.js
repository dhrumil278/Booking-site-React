import { Link } from 'react-router-dom';
import './carBooking.css';

function CarBooking(){
    return(
        <>
            <div className="main-carbooking">
                {/* <div className="home-car"></div>
                <p>Car Booking</p> */}
                <form action="#">
                    <div className="main-form"> 
                        <div className="form-input">
                            <label htmlFor="">Location</label>
                            <input type="text" name='location' placeholder='Where you want' />
                        </div>
                        <div className="form-input">
                            <label htmlFor="">Check-in</label>
                            <input type="text" id='check-in' name='location' placeholder='Add Date' />
                        </div>
                        <div className="form-input">
                            <label htmlFor="">Check-out</label>
                            <input type="text" id='check-out' name='location' placeholder='Add Date' />
                        </div>
                        <div className="form-input">
                            <button className='search-btn'> <Link to="/carList" id="search">Search</Link></button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
export default CarBooking;