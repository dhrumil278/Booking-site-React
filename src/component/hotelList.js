import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import Navbar from './navbar';
import './CSS/hotelList.css'
import './CSS/bookingPanel.css';
import HotelScroll from "./hotelScrol";
import Form from './Form';


function HotelList() {

    const [checked, setChacked] = useState(false);
    const location = useLocation();
    console.log(location.state.place);


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
                    <Form 
                        location = {location.state.place}
                        checkIn = {location.state.checkIn}
                        checkOut = {location.state.checkOut}
                    />
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
                                            <input type="checkbox" checked={check.checked} onClick={check.onClick} />
                                            {check.label}
                                        </label>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="below-right-part">
                        <HotelScroll />
                        <HotelScroll />
                        <HotelScroll />
                        <HotelScroll />
                        <HotelScroll />
                        <HotelScroll />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HotelList;