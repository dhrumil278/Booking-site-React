import React from 'react';
import { useNavigate } from 'react-router';  
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



function Payment() {

    const navigate = useNavigate();
    
    const mastercardStyle = {
        background : `url(${Mastercard}) no-repeat center center/cover `,
        height: "50px",
    }
    const paypalStyle = {
        background : `url(${Paypal}) no-repeat center center/cover `,
        height: "50px",
    }
    const paytmStyle = {
        background : `url(${Paytm}) no-repeat center center/cover `,
        height: "50px",
    }
    const gpayStyle = {
        background : `url(${Gpay}) no-repeat center center/cover `,
        height: "50px",
    }
    const visaStyle = {
        background : `url(${Visa}) no-repeat center center/cover `,
        height: "50px",
    }
    const tajStyle = {
        background : `url(${Taj}) no-repeat center center/cover `,
        height: "270px",
        width:'70%',
        margin: 'auto',
        borderRadius: '13px',
        boxShadow : 'rgba(0, 0, 0, 0.16) 0px 1px 4px;',
    }

    const handleConfirm=()=>{
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
                                    <p className="infoInput">5 Persons</p>
                                </div>
                            </div>
                        </div>
                        <div className="paymentMethodDiv">
                            <div className="titlepayment">Creadit Cards</div>
                            <div className="mainPaymentMethod">
                                <div className="payments" style={mastercardStyle}></div>
                                <div className="payments" style={paypalStyle}></div>
                                <div className="payments" style={paytmStyle}></div>
                                <div className="payments" style={visaStyle}></div>
                                <div className="payments" style={gpayStyle}></div>
                            </div>
                        </div>
                    </div>
                    <div className="payment-leftPart">
                        <div className="bookingDiv">
                            <div className="bookingLocationDiv">
                                <div className="bookingName">Hotel Taj</div>
                                <p className="bookingLocation"><FontAwesomeIcon className="flag-icon" icon={solid('flag')} /> Mumbai, Gate way of India</p>
                            </div>
                            <div className="bookingImgDiv" style={tajStyle}></div>
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
                            <div className="confirm" onClick={handleConfirm}>
                                Confirm Booking
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Payment;