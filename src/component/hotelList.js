import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import Navbar from './navbar';
import './hotelList.css'
import './bookingPanel.css';


function HotelList() {

    const [isActive, setIsActive] = useState(false);
    const [adult, setAdult] = useState(0);
    const [child, setChild] = useState(0);
    const [infants, setInfants] = useState(0);

    return (
        <>
            <Navbar />
            <div className="mainHotelListPage">
                <div className="path">
                    <p>Home &gt; Hotel list</p>
                </div>
                <div className="formFild">
                    <div className="mainForm">
                        <div className="formItems">
                            <label htmlFor="">Location</label>
                            <input type="text" placeholder='Gujarat' />
                        </div>
                        <div className="formItems">
                            <label htmlFor="">Chack in</label>
                            <input type="text" placeholder='27 July' />
                        </div>
                        <div className="formItems">
                            <label htmlFor="">Check out</label>
                            <input type="text" placeholder='29 July' />
                        </div>
                        <div className="formItems submit">
                            <button className='submit-btn'>Submit</button>
                        </div>
                    </div>
                    <div className="passenger">
                        <div className="drop-down-butten" onClick={(e) => setIsActive(!isActive)} >
                            People
                            ({adult + child + infants})
                            {isActive ? <FontAwesomeIcon className="passenger-icon" icon={solid('angle-down')} /> : <FontAwesomeIcon className="passenger-icon" icon={solid('angle-up')} />}
                        </div>
                        {isActive && (
                            <div className="drop-down-content">
                                <div className="drop-down-item">
                                    <div className="drop-down-item-left">
                                        <p className="drop-down-item-type">Adult</p>
                                        <p className="drop-down-item-detail">ages 13 or above</p>
                                    </div>
                                    <div className="drop-down-itel-right">
                                        <div className="decrement" onClick={() => setAdult(adult == 0 ? adult = 0 : adult - 1)}><FontAwesomeIcon className="minus-icon" icon={solid('minus')} /></div>
                                        <div className="count">
                                            <span className="count-num">{adult}</span>
                                        </div>
                                        <div className="increment" onClick={() => setAdult(adult + 1)}><FontAwesomeIcon className="plus-icon" icon={solid('plus')} /></div>
                                    </div>
                                </div>
                                <hr />
                                <div className="drop-down-item">
                                    <div className="drop-down-item-left">
                                        <p className="drop-down-item-type">Child</p>
                                        <p className="drop-down-item-detail">ages between 2-12</p>
                                    </div>
                                    <div className="drop-down-itel-right">
                                        <div className="decrement" onClick={() => setChild(child == 0 ? child = 0 : child - 1)}><FontAwesomeIcon className="minus-icon" icon={solid('minus')} /></div>
                                        <div className="count">
                                            <span className="count-num">{child}</span>
                                        </div>
                                        <div className="increment" onClick={() => setChild(child + 1)} ><FontAwesomeIcon className="plus-icon" icon={solid('plus')} /></div>
                                    </div>
                                </div>
                                <hr />
                                <div className="drop-down-item">
                                    <div className="drop-down-item-left">
                                        <p className="drop-down-item-type">Infants</p>
                                        <p className="drop-down-item-detail">less than 2 year</p>
                                    </div>
                                    <div className="drop-down-itel-right">
                                        <div className="decrement" disabled="true" onClick={() => setInfants(infants == 0 ? infants = 0 : infants - 1)}><FontAwesomeIcon className="minus-icon" icon={solid('minus')} /></div>
                                        <div className="count">
                                            <span className="count-num">{infants}</span>
                                        </div>
                                        <div className="increment" onClick={() => setInfants(infants + 1)}><FontAwesomeIcon className="plus-icon" icon={solid('plus')} /></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default HotelList;