import { useState, } from 'react';
import { useNavigate } from "react-router-dom";

const initialFlightData = {
    from: '',
    to: '',
    checkIn: '',
}

function FlightBooking(){

    const [flightData, setFlightData] = useState(initialFlightData);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFlightData({ ...flightData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(flightData);
        navigate('/flightList', {
            state: {
                from: flightData.from,
                to: flightData.to,
                checkIn: flightData.checkIn,
            }
        });
    }

    return(
        <>
            <div className="main-flightbooking">
            <form action="">
                    <div className="main-form">
                        <div className="label">Leaving From</div>
                        <div className="label">Going to</div>
                        <div className="label">Check in</div>
                        <div className="label"></div>
                        <div className="form-input"><input type="text" name='from' placeholder='Where you from' onChange={handleChange} /></div>
                        <div className="form-input"><input type="text" id='goingTo' name='to' placeholder='where you want' onChange={handleChange} /></div>
                        <div className="form-input"><input type="text" id='check-in' name='checkIn' placeholder='Add Date' onChange={handleChange} /></div>
                        <div className="form-input"><button className='search-btn' id="search" onClick={handleSubmit}>Search</button></div>
                    </div>
                </form>
            </div>
        </>
    );
}
export default FlightBooking;