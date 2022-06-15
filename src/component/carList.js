import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import Navbar from './navbar';
import './CSS/hotelList.css'
import './CSS/carList.css'
// import './CSS/bookingPanel.css';
import CarScroll from "./carScroll";
import Form from './Form';


function CarList() {

    const [checked, setChacked] = useState(false);

    const handleChange = () =>{
        setChacked(checked);
    }

    const chechBoxItem = [
    {
        label:"4 Seater",
        value: {checked},
        onClick: {handleChange},
    },
    {
        label:"7 Seater",
        value: {checked},
        onClick: {handleChange},
    },
    {
        label:"SUV",
        value: {checked},
        onClick: {handleChange},
    },
    {
        label:"Sidan",
        value: {checked},
        onClick: {handleChange},
    },
    ];

    return (
        <>
            <Navbar />
            <div className="mainHotelListPage">
                <div className="path">
                    <p>Home &gt; Car List</p>
                </div>
                <div className="formFild">
                    <Form />
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
                        <CarScroll />
                        <CarScroll />
                        <CarScroll />
                        <CarScroll />
                        <CarScroll />
                        <CarScroll />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CarList;