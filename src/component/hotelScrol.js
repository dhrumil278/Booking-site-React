import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import './hotelScroll.css';
import Background from '../Static/Images/car-1.jpg';


function HotelScroll(){

    const hotelImageStyle = {
        background : `url(${Background}) no-repeat center center/cover `,
        width: "100%",
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
                </div>
            </div>
        </>
    )
}
export default HotelScroll ;