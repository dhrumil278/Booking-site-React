import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import './CSS/hotelScroll.css';
import HotelTaj from '../Static/Images/taj.jpg';
import HotelPink from '../Static/Images/OIP.jpg';
import HotelRajDarbar from '../Static/Images/OIP1.jpg';
import HotelBagiyan from '../Static/Images/OIP2.jpg';
import HotelSumeru from '../Static/Images/OIP4.jpg';

function HotelScroll(props) {

    const navigate = useNavigate();

    const hotels = [
        {
            hname: "Hotel Taj",
            hlocation: 'Mumbai, gate way of India',
            hprice: '24,000',
            himage: {
                background: `url(${HotelTaj}) no-repeat center center/cover `,
            }
        },
        {
            hname: "Hotel PinkCity",
            hlocation: 'Mumbai, Pink city',
            hprice: '50,000',
            himage: {
                background: `url(${HotelPink}) no-repeat center center/cover `,
            }
        },
        {
            hname: "Hotel Raj Darbar",
            hlocation: 'Mumbai, darbar Chowk',
            hprice: '34,000',
            himage: {
                background: `url(${HotelRajDarbar}) no-repeat center center/cover `,
            }
        },
        {
            hname: "Hotel Bagiyan",
            hlocation: 'Mumbai, Father Bagiyan',
            hprice: '15,000',
            himage: {
                background: `url(${HotelBagiyan}) no-repeat center center/cover `,
            }
        },
        {
            hname: "Hotel Sumeru",
            hlocation: 'Mumbai, Sumeru Parvat',
            hprice: '32,000',
            himage: {
                background: `url(${HotelSumeru}) no-repeat center center/cover `,
            }
        },
    ]

    const handleSubmit = (index) => {
        navigate('/payment',{
            state:{
                hotel:hotels,
                value: index,
                adult: props.a,
                child: props.c,
                infants: props.i,
            }}
        )
        // console.log('this is the value',index);
    }


    return (
        <>
            {
                hotels.map((h,index) => {
                    {const value = index
                        console.log('this the index..', index);
                    }
                    return(
                    <div className="maiHotelScroll">
                        <div className="hotelImagDiv"
                            key={index} style={h.himage}
                        ></div>
                        <div className="hotelDetails">
                            <p className="hotelName" key={index}>{h.hname}</p>
                            <div className="locationAndRating">
                                <p className="rating"><FontAwesomeIcon className="star-icon" icon={solid('star')} />4.5 </p>
                                <p className="hotelLocation" key={index}><FontAwesomeIcon className="flag-icon" icon={solid('flag')} /> {h.hlocation}</p>
                            </div>
                            <div className="facilty-and-price">
                                <div className="facilities">
                                    <div className="facility-icon"><FontAwesomeIcon className="wifi-icon" icon={solid('wifi')} /></div>
                                    <div className="facility-name">wifi</div>
                                    <div className="facility-icon"><FontAwesomeIcon className="wifi-icon" icon={solid('parking')} /></div>
                                    <div className="facility-name">free Parking</div>
                                    <div className="facility-icon"><FontAwesomeIcon className="wifi-icon" icon={solid('tag')} /></div>
                                    <div className="facility-name">Special Offer</div>
                                    <div className="facility-icon"><FontAwesomeIcon className="wifi-icon" icon={solid('shield')} /></div>
                                    <div className="facility-name">Taking Safety measures</div>
                                    <div className="facility-icon"><FontAwesomeIcon className="wifi-icon" icon={solid('gift')} /></div>
                                    <div className="facility-name">Welcome Gift</div>
                                </div>
                                <div className="price">
                                    <div className="amount" key={index}><FontAwesomeIcon className="rupee-icon" icon={solid('indian-rupee-sign')} />{h.hprice}</div>
                                    <div key={index}  className="bookNow" onClick={()=> handleSubmit(index)}>Book Now</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )})
            }
        </>
    )
}
export default HotelScroll;