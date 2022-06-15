import { useState, } from 'react';
import { useNavigate } from "react-router-dom";
import './CSS/hotelBooking.css';



const initialFormData = {
    location: '',
    checkIn: '',
    checkOut: '',
}

function HotelBooking() {

    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        navigate('/hotelList', {
            state: {
                place: formData.location,
                checkIn: formData.checkIn,
                checkOut: formData.checkOut,
            }
        });
    }
    return (
        <>
            <div className="main-hotelbooking">
                <form action="">
                    <div className="main-form">
                        <div className="label">Location</div>
                        <div className="label">Check in</div>
                        <div className="label">Check out</div>
                        <div className="label"></div>
                        <div className="form-input"><input type="text" name='location' placeholder='Where you want' onChange={handleChange} /></div>
                        <div className="form-input"><input type="text" id='check-in' name='checkIn' placeholder='Add Date' onChange={handleChange} /></div>
                        <div className="form-input"><input type="text" id='check-out' name='checkOut' placeholder='Add Date' onChange={handleChange} /></div>
                        <div className="form-input"><button className='search-btn' id="search" onClick={handleSubmit}>Search</button></div>
                    </div>
                </form>
            </div>
        </>
    );
}
export default HotelBooking;