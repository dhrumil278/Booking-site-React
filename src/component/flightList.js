import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "./navbar";
import Form from './Form';
import HotelScroll from "./hotelScroll";
import FlightScroll from './flightScroll';


function FlightList() {

    const [checked, setChacked] = useState(false);
    const location = useLocation();
    console.log(location.state.checkIn);

    const handleChange = () =>{
        setChacked(checked);
    }

    const chechBoxItem = [
    {
        label:"Refundable Fares",
        value: {checked},
        onClick: {handleChange},
    },
    {
        label:"Non Stop",
        value: {checked},
        onClick: {handleChange},
    },
    {
        label:"IndiGo",
        value: {checked},
        onClick: {handleChange},
    },
    {
        label:"Morning Departures",
        value: {checked},
        onClick: {handleChange},
    },
    {
        label:"Late Departures",
        value: {checked},
        onClick: {handleChange},
    },
    {
        label:"Go First",
        value: {checked},
        onClick: {handleChange},
    },
    {
        label:"Vistara",
        value: {checked},
        onClick: {handleChange},
    },
    {
        label:"AirIndia",
        value: {checked},
        onClick: {handleChange},
    },
    ];

    return (
        <>
            <Navbar />
            <div className="mainHotelListPage">
                <div className="path">
                    <p>Home &gt; Flight List</p>
                </div>
                <div className="formFild">
                <div className="passanger">People [A({location.state.adult}),C({location.state.child}),I({location.state.infants})]</div>
                    <Form
                        label1='From'
                        label2='To'
                        label3='Check In'
                        input1 = {location.state.from}
                        input2 = {location.state.to}
                        input3 = {location.state.checkIn}
                    />
                </div>
                <div className="main-below-content">
                    <div className="below-left-part">
                        <div className="search-property">
                            <p className="search-title">Search Flight</p>
                            <form action="">
                                <input type="text" placeholder="search propert" />
                            </form>
                        </div>
                        <div className="popular-filters">
                            <p className="filter-title">Popular Filters</p>
                            <div className="filter-chech-box">
                                {
                                    chechBoxItem.map((check) => (
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
                        <FlightScroll 
                            a = {location.state.adult}
                            c = {location.state.child}
                            i = {location.state.infants}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FlightList;