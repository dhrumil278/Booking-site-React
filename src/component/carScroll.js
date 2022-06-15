import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import './CSS/hotelScroll.css';
import Background from '../Static/Images/carlist-3.jpg';


function CarScroll(){

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
                    <p className="hotelName">Mahendra Thar</p>
                    <div className="locationAndRating">
                        <p className="rating"><FontAwesomeIcon className="star-icon" icon={solid('star')} />4.5 </p>
                        <p className="hotelLocation"><FontAwesomeIcon className="flag-icon" icon={solid('flag')} /> Mumbai, Gate way of India</p>
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
                            <div className="amount"><FontAwesomeIcon className="rupee-icon" icon={solid('indian-rupee-sign')} />2000/day</div>
                            <div className="bookNow">Book Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CarScroll ;