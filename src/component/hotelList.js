import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import Navbar from './navbar';
import './CSS/hotelList.css';
import './CSS/bookingPanel.css';
import HotelScroll from "./hotelScroll";
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
                    <div className="passanger">People [A({location.state.adult}),C({location.state.child}),I({location.state.infants})]</div>
                    <Form 
                        label1='Location'
                        label2='Check In'
                        label3='check Out'
                        input1 = {location.state.place}
                        input2 = {location.state.checkIn}
                        input3 = {location.state.checkOut}
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
                        <HotelScroll a={location.state.adult} c={location.state.child} i={location.state.infants}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HotelList;