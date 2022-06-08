import React, { useState } from 'react';
import { Carousel, } from 'react-bootstrap';
import Image1 from '../Static/Images/home-2.jpg';
import Image2 from '../Static/Images/flight-1.jpg';
import Image3 from '../Static/Images/car-1.jpg';
import './homePage.css'

function HomePage() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <div className="homepage">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Image1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src={Image2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src={Image3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                

            </div>
        </>
    );
}

export default HomePage;