import './flightBooking.css';
import { Link } from 'react-router-dom';

function FlightBooking(){
    return(
        <>
            <div className="main-flightbooking">
                {/* <div className="home-flight"></div>
                <p>Flight Booking</p> */}
                <form action="#">
                    <div className="main-form"> 
                        <div className="form-input">
                            <label htmlFor="">Leaving From</label>
                            <input type="text" name='location' placeholder='Where you from' />
                        </div>
                        <div className="form-input">
                            <label htmlFor="">Going to</label>
                            <input type="text" id='check-in' name='location' placeholder='Where you want' />
                        </div>
                        <div className="form-input">
                            <label htmlFor="">Check-in</label>
                            <input type="text" id='check-out' name='location' placeholder='Add Date' />
                        </div>
                        <div className="form-input">
                            <button className='search-btn'> <Link to="/flightList" id="search">Search</Link></button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
export default FlightBooking;