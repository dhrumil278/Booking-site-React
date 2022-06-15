import { useState, } from 'react';
import { useNavigate } from "react-router-dom";


const initialCarData = {
    location: '',
    checkIn: '',
    checkOut: '',
}
function CarBooking(){

    const [carData, setCarData] = useState(initialCarData);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCarData({ ...carData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(carData);
        navigate('/carList', {
            state: {
                place: carData.location,
                checkIn: carData.checkIn,
                checkOut: carData.checkOut,
            }
        });
    }
    return(
        <>
            <div className="main-carbooking">

            <form action="">
                    <div className="main-form">
                        <div className="label">Location</div>
                        <div className="label">Check in</div>
                        <div className="label">Check out</div>
                        <div className="label"></div>
                        <div className="form-input"><input type="text" name='location' placeholder='Where you want' onChange={handleChange} /></div>
                        <div className="form-input"><input type="text" id='check-in' name='checkIn' placeholder='Add Date' onChange={handleChange} /></div>
                        <div className="form-input"><input type="text" id='check-out' name='checkOut' placeholder='Add Date' onChange={handleChange} /></div>
                        <div className="form-input"><button className='search-btn' id="search" onClick={handleSubmit} >Search</button></div>
                    </div>
                </form>
            </div>
        </>
    );
}
export default CarBooking;