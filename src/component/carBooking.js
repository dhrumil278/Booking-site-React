import { Link } from 'react-router-dom';

function CarBooking(){
    return(
        <>
            <div className="main-carbooking">

            <form action="">
                    <div className="main-form">
                        <div className="label">Location</div>
                        <div className="label">Check in</div>
                        <div className="label">Check out</div>
                        <div className="label"></div>
                        <div className="form-input"><input type="text" name='location' placeholder='Where you want'  /></div>
                        <div className="form-input"><input type="text" id='check-in' name='checkIn' placeholder='Add Date'  /></div>
                        <div className="form-input"><input type="text" id='check-out' name='checkOut' placeholder='Add Date'  /></div>
                        <div className="form-input"><button className='search-btn' id="search" >Search</button></div>
                    </div>
                </form>
            </div>
        </>
    );
}
export default CarBooking;