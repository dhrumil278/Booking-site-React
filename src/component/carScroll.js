import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import I20 from'../Static/Images/hundai20.jpg'
import Nano from '../Static/Images/tatanano.jpg'
import Amaze from '../Static/Images/hondaamaze.jpg'
import Tavera from '../Static/Images/tavera.jpg'
import Thar from '../Static/Images/carlist-3.jpg';
import './CSS/hotelScroll.css';
import {  useNavigate } from "react-router-dom";


function CarScroll(props) {

    const navigate = useNavigate();

    const cars = [
        {
            carname: 'Mahedra Thar',
            carlocation: 'Bombay Garage',
            carprice: '3000/day',
            carimage: {
                background: `url(${Thar}) no-repeat center center/cover `,
            }
        },
        {
            carname: 'Tata Nano',
            carlocation: 'Bhaijan Garage',
            carprice: '1500/day',
            carimage: {
                background: `url(${Nano}) no-repeat center center/cover `,
            }
        },
        {
            carname: 'Honda Amaze',
            carlocation: 'shrushti Garage',
            carprice: '2000/day',
            carimage: {
                background: `url(${Amaze}) no-repeat center center/cover `,
            }
        },
        {
            carname: 'Hundai i20',
            carlocation: 'Miraa Garage',
            carprice: '2500/day',
            carimage: {
                background: `url(${I20}) no-repeat center center/cover `,
            }
        },
        {
            carname: 'Tavera',
            carlocation: 'Paji ka Garage',
            carprice: '2300/day',
            carimage: {
                background: `url(${Tavera}) no-repeat center center/cover `,
            }
        },
    ]

    const hotelImageStyle = {

        // flexBasis: "40%",
        // height: "400px",
    }

    const handleSubmit = (index) =>{
        {console.log('hear is a clicked index',index)}
        navigate('/payment',{
            state:{
                car:cars,
                value:index,
                adult:props.a,
                child:props.c,
                infants:props.i,
            }
        })
    }

    return (
        <>
            {
                cars.map((c, index) => (
                    
                    <div className="maiHotelScroll">
                        {console.log('this is a car index',index)}
                        <div key={index} className="hotelImagDiv"style={c.carimage}></div>
                        <div className="hotelDetails">
                            <p key={index} className="hotelName">{c.carname}</p>
                            <div className="locationAndRating">
                                <p className="rating"><FontAwesomeIcon className="star-icon" icon={solid('star')} />4.5 </p>
                                <p key={index} className="hotelLocation"><FontAwesomeIcon className="flag-icon" icon={solid('flag')} />{c.carlocation}</p>
                            </div>
                            <div className="facilty-and-price">
                                <div className="facilities">
                                    <div className="facility-icon"><FontAwesomeIcon className="wifi-icon" icon={solid('cloud')} /></div>
                                    <div className="facility-name">Automatic Climate Control</div>
                                    <div className="facility-icon"><FontAwesomeIcon className="wifi-icon" icon={solid('sun')} /></div>
                                    <div className="facility-name">Panoramic Sunroof</div>
                                    <div className="facility-icon"><FontAwesomeIcon className="wifi-icon" icon={solid('music')} /></div>
                                    <div className="facility-name">Music System</div>
                                    <div className="facility-icon"><FontAwesomeIcon className="wifi-icon" icon={solid('key')} /></div>
                                    <div className="facility-name">Keyless Entry and Push Button Start/Stop</div>
                                    <div className="facility-icon"><FontAwesomeIcon className="wifi-icon" icon={solid('gear')} /></div>
                                    <div className="facility-name">Automatic</div>
                                </div>
                                <div className="price">
                                    <div key={index} className="amount"><FontAwesomeIcon className="rupee-icon" icon={solid('indian-rupee-sign')} />{c.carprice}</div>
                                    <div className="bookNow" onClick={()=>handleSubmit(index)}>Book Now</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }


        </>
    )
}
export default CarScroll;