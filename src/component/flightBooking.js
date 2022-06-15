import { Link } from 'react-router-dom';

function FlightBooking(){
    return(
        <>
            <div className="main-flightbooking">
            <form action="">
                    <div className="main-form">
                        <div className="label">Leaving From</div>
                        <div className="label">Going to</div>
                        <div className="label">Check in</div>
                        <div className="label"></div>
                        <div className="form-input"><input type="text" name='leavingFrom' placeholder='Where you want'  /></div>
                        <div className="form-input"><input type="text" id='check-in' name='goingTo' placeholder='Add Date'  /></div>
                        <div className="form-input"><input type="text" id='check-out' name='checkIn' placeholder='Add Date'  /></div>
                        <div className="form-input"><button className='search-btn' id="search">Search</button></div>
                    </div>
                </form>
            </div>
        </>
    );
}
export default FlightBooking;