import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import './CSS/payment.css';
import Mastercard from '../Static/Images/mastercad.jpg';
import Paypal from '../Static/Images/paypal.png';
import Paytm from '../Static/Images/paytm.jpg';
import Visa from '../Static/Images/visa.png';
import Gpay from '../Static/Images/gpay.png';
import Taj from '../Static/Images/taj.jpg'
import Navbar from './navbar';
import { useState } from 'react';


function Payment() {
    const navigate = useNavigate();
    const location = useLocation();

    const hindex = location.state.value;
    // console.log(location.state.car);

    // const carname = location.state.car[hindex].carname;
    // console.log(location.state.car[hindex].carname);
    // console.log(location.state.car[hindex].carprice);
    // console.log(location.state.car[hindex].carlocation);
    // console.log(location.state.car[hindex].car);
    // console.log(location.state.value);

    const [isActive, setIsActive] = useState(false);

    const mastercardStyle = {
        background: `url(${Mastercard}) no-repeat center center/cover `,
        height: "50px",
        border: isActive ? "2px solid blue" : !isActive,
    }
    const paypalStyle = {
        background: `url(${Paypal}) no-repeat center center/cover `,
        height: "50px",
        border: isActive ? "2px solid blue" : !isActive,
    }
    const paytmStyle = {
        background: `url(${Paytm}) no-repeat center center/cover `,
        height: "50px",
        border: isActive ? "2px solid blue" : !isActive,
    }
    const gpayStyle = {
        background: `url(${Gpay}) no-repeat center center/cover `,
        height: "50px",
        border: isActive ? "2px solid blue" : !isActive,

    }
    const visaStyle = {
        background: `url(${Visa}) no-repeat center center/cover `,
        height: "50px",
        border: isActive ? "2px solid blue" : !isActive,
    }
    const tajStyle = {
        background: `url(${Taj}) no-repeat center center/cover `,
        height: "270px",
        width: '70%',
        margin: 'auto',
        borderRadius: '13px',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px;',
    }

    const handleClick = () => {
        setIsActive(current => !current);
    }
    const handleConfirm = () => {
        navigate('/thankyou');
    };

    return (
        <>
            <Navbar />
            <div className="mainPayment">
                <div className="path">
                    <p>Home &gt; Hotel list &gt; payment</p>
                </div>
                <div className="paymentContent">
                    <div className="payment-rightPart">
                        <div className="confirmPaymentDiv">
                            <p className="confirmBooking">Confirm Your Booking</p>
                        </div>
                        <div className="usrInformation">
                            <p className="userinfo">Your Information</p>
                            <div className="infoForm">
                                <div className="infoItems">
                                    <p className="infoLabel">Travellers</p>
                                    <p className="infoInput">{/*location.state.adult + location.state.child + location.state.infants*/} People</p>
                                </div>
                            </div>
                        </div>
                        <div className="paymentMethodDiv">
                            <div className="titlepayment">Creadit Cards</div>
                            <div className="mainPaymentMethod">
                                <div className="payments" style={mastercardStyle} onClick={handleClick}></div>
                                <div className="payments" style={paypalStyle} onClick={handleClick}></div>
                                <div className="payments" style={paytmStyle} onClick={handleClick} ></div>
                                <div className="payments" style={visaStyle} onClick={handleClick}></div>
                                <div className="payments" style={gpayStyle} onClick={handleClick}></div>
                            </div>
                        </div>
                    </div>
                    <div className="payment-leftPart">
                        <div className="bookingDiv">
                            <div className="bookingLocationDiv">
                                <div className="bookingName">
                                    {
                                        location.state.hotel[hindex].hname ?
                                            location.state.hotel[hindex].hname :
                                                location.state.flight[hindex].company ?
                                                    location.state.flight[hindex].company :
                                                        location.state.car[hindex].carname 
                                    }
                                </div>
                                <p className="bookingLocation"><FontAwesomeIcon className="flag-icon" icon={solid('flag')} />
                                    {
                                        location.state.hotel[hindex].hlocation ?
                                            location.state.hotel[hindex].hlocation :
                                                location.state.car[hindex].carlocation ?
                                                    location.state.car[hindex].carlocation :
                                                        " "
                                    } 
                                </p>
                            </div>
                            <div className="bookingImgDiv" 
                                style={
                                    location.state.hotel[hindex].himage ?
                                        location.state.hotel[hindex].himage :
                                            location.state.car[hindex].carimage ?
                                                location.state.car[hindex].carimage :
                                                    " "
                                } >
                            </div>
                            <div className="confirmAmount">
                                <FontAwesomeIcon className="rupee-icon" icon={solid('indian-rupee-sign')} />
                                    {
                                        location.state.hotel[hindex].hprice ?
                                            location.state.hotel[hindex].hprice :
                                                location.state.flight[hindex].amount ?
                                                    location.state.flight[hindex].amount :
                                                        location.state.car[hindex].carprice
                                    }
                            </div>
                            <div className="bookingDetails">
                                <div className="bookingItems">
                                    <p className="bookingLabel">Check In</p>
                                    <p className="bookingInput">14 June</p>
                                </div>
                                <div className="bookingItems">
                                    <p className="bookingLabel">Check Out</p>
                                    <p className="bookingInput">16 June</p>
                                </div>
                            </div>
                            <div className="confirm" onClick={handleConfirm}>Confirm Booking</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Payment;