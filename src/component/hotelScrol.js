import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import './hotelScroll.css';
import Background from '../Static/Images/download.jpg';


function HotelScroll(){

    const hotelImageStyle = {
        background : `url(${Background}) no-repeat center center/cover `,
        flexBasis: "40%",
        height: "400px",
    }

    return(
        <>
            <div className="maiHotelScroll">
                <div className="hotelImagDiv"
                    style={hotelImageStyle}
                ></div>
                <div className="hotelDetails">
                    <p className="hotelName">Hotel Taj</p>
                    <div className="locationAndRating">
                        <p className="rating"><FontAwesomeIcon className="star-icon" icon={solid('star')} />4.5 </p>
                        <p className="hotelLocation"><FontAwesomeIcon className="flag-icon" icon={solid('flag')} /> Mumbai, Gate way of India</p>
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
                            <div className="amount"><FontAwesomeIcon className="rupee-icon" icon={solid('indian-rupee-sign')} />24000</div>
                            <div className="bookNow">Book Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HotelScroll ;