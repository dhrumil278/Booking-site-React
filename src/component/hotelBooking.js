import { Link } from 'react-router-dom';
import './hotelBooking.css';

function HotelBooking() {
    return (
        <>
            <div className="main-hotelbooking">
                {/* <div className="home-hotel"></div> */}
                {/* <p>Hotel Booking</p> */}
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
                            {/* <input type="submit" id='search' name='search' value='Search' /> */}
                            <button className='search-btn'> <Link to="/hotelList" id="search">Search</Link></button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
export default HotelBooking;