import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import Navbar from './navbar';
import './hotelList.css'
import './bookingPanel.css';
import HotelScroll from "./hotelScrol";


function HotelList() {

    const [checked, setChacked] = useState(false);

    const handleChange = () =>{
        setChacked(checked);
    }

    const chechBoxItem = [
    {
        label:"Hotels",
        value: {checked},
        onClick: {handleChange},
    },
    {
        label:"Breakfast and Dinner",
        value: {checked},
        onClick: {handleChange},
    },
    {
        label:"free Cancellation",
        value: {checked},
        onClick: {handleChange},
    },
    {
        label:"no prepayment",
        value: {checked},
        onClick: {handleChange},
    },
    ];

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
                </div>
                <div className="main-below-content">
                    <div className="below-left-part">
                        <div className="search-property">
                            <p className="search-title">Search location and Property</p>
                            <form action="">
                                <input type="text" placeholder="search propert" />
                            </form>
                        </div>
                        <div className="popular-filters">
                            <p className="filter-title">Popular Filters</p>
                            <div className="filter-chech-box">
                                {
                                    chechBoxItem.map((check)=>(
                                        <label>
                                            <input type="checkbox" checked={check.value} onClick={check.onClick} />
                                            {check.label}
                                        </label>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="below-right-part">
                        <HotelScroll />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HotelList;