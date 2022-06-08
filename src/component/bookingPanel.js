import React, { useState } from "react";
import CarBooking from "./carBooking";
import FlightBooking from "./flightBooking";
import HotelBooking from "./hotelBooking";
import './bookingPanel.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function BookingPanel() {

    const [activeTab, setActiveTab] = useState('tab1');
    const [isActive, setIsActive] = useState(false);
    const [adult, setAdult] = useState(0);
    const [child, setChild] = useState(0);
    const [infants, setInfants] = useState(0);

    const handleTab1 = () => {
        setActiveTab('tab1');
    }
    const handleTab2 = () => {
        setActiveTab('tab2');
    }
    const handleTab3 = () => {
        setActiveTab('tab3');
    }


    return (
        <>
            <div className="main-booking-panel">
                <div className="tabs">
                    <div className="sub-tab">
                        <ul className="nav">
                            <li className={activeTab === 'tab1' ? "active" : " "} onClick={handleTab1}> <FontAwesomeIcon icon={solid('hotel')} className='booking-icon' /> Hotel</li>
                            <li className={activeTab === 'tab2' ? "active" : " "} onClick={handleTab2}><FontAwesomeIcon icon={solid('plane')} className='booking-icon' /> Flight</li>
                            <li className={activeTab === 'tab3' ? "active" : " "} onClick={handleTab3}><FontAwesomeIcon icon={solid('car')} className='booking-icon' /> Car Rantel</li>
                        </ul>
                        <div className="passenger">
                            <div className="drop-down-butten" onClick={(e) => setIsActive(!isActive)}>
                                People 
                                { isActive ? <FontAwesomeIcon className="passenger-icon" icon={solid('angle-down')} /> : <FontAwesomeIcon className="passenger-icon" icon={solid('angle-up')} /> }
                            </div>
                            {isActive && (
                                <div className="drop-down-content">
                                    <div className="drop-down-item">
                                        <div className="drop-down-item-left">
                                            <p className="drop-down-item-type">Adult</p>
                                            <p className="drop-down-item-detail">ages 13 or above</p>
                                        </div>
                                        <div className="drop-down-itel-right">
                                            <div className="decrement" onClick={ () => setAdult( adult - 1) }><FontAwesomeIcon className="minus-icon" icon={solid('minus')} /></div>
                                            <div className="count">
                                                <span className="count-num">{ adult }</span>
                                            </div>
                                            <div className="increment" onClick={ () => setAdult( adult + 1) }><FontAwesomeIcon className="plus-icon" icon={solid('plus')} /></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="drop-down-item">
                                        <div className="drop-down-item-left">
                                            <p className="drop-down-item-type">Child</p>
                                            <p className="drop-down-item-detail">ages between 2-12</p>
                                        </div>
                                        <div className="drop-down-itel-right">
                                            <div className="decrement" onClick={ () => setChild( child - 1) }><FontAwesomeIcon className="minus-icon" icon={solid('minus')} /></div>
                                            <div className="count">
                                                <span className="count-num">{ child }</span>
                                            </div>
                                            <div className="increment"onClick={ () => setChild( child + 1) } ><FontAwesomeIcon className="plus-icon" icon={solid('plus')} /></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="drop-down-item">
                                        <div className="drop-down-item-left">
                                            <p className="drop-down-item-type">Infants</p>
                                            <p className="drop-down-item-detail">less than 2 year</p>
                                        </div>
                                        <div className="drop-down-itel-right">
                                            <div className="decrement" onClick={ () => setInfants( infants - 1) }><FontAwesomeIcon className="minus-icon" icon={solid('minus')} /></div>
                                            <div className="count">
                                            <span className="count-num">{ infants }</span>
                                            </div>
                                            <div className="increment" onClick={ () => setInfants( infants + 1) }><FontAwesomeIcon className="plus-icon" icon={solid('plus')} /></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="outlet">
                        {activeTab === 'tab1' ? <HotelBooking /> : activeTab === 'tab2' ? <FlightBooking /> : <CarBooking />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookingPanel;