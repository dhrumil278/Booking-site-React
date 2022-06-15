import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import './CSS/flightScroll.css';

function FlightScroll() {

    const flights = [
        {
            company: 'Air India',
            from: 'Ahmedabad',
            to: 'New Delhi',
            duretion:'02:00',
            pickup: '05:00',
            drop: '07:00',
            amount: '5248/-',

        },
        {
            company: 'Spice Jet',
            from: 'Ahmedabad',
            to: 'New Delhi',
            duretion:'03:00',
            pickup: '02:00',
            drop: '05:00',
            amount: '5154/-',

        },
        {
            company: 'IndiGo',
            from: 'Ahmedabad',
            to: 'New Delhi',
            duretion:'02:30',
            pickup: '14:00',
            drop: '16:30',
            amount: '6100/-',

        },
        {
            company: 'Vistara',
            from: 'Ahmedabad',
            to: 'New Delhi',
            duretion:'03:00',
            pickup: '22:00',
            drop: '01:00',
            amount: '4890/-',

        },
    ];


    return (
        <>
            {
                flights.map((flight) => (
                    <div className="mainFlightScroll">
                        <div className="flightTitle">{flight.company}</div>
                        <div className="mainTravelDiv">
                            <div className="From">
                                <div className="cityName">{flight.from}</div>
                                <div className="pickupTime">{flight.pickup}</div>
                            </div>
                            <div className="flightDuretion">
                                <div className="timeDuration">{flight.duretion}</div>
                                <div className="duretion">Duretion</div>
                            </div>
                            <div className="To">
                                <div className="cityName">{flight.to}</div>
                                <div className="pickupTime">{flight.drop}</div>
                            </div>
                            <div className="flightPrice"><FontAwesomeIcon className="rupee-icon" icon={solid('indian-rupee-sign')} />{flight.amount}</div>
                            <div className="bookNowFlight">Book Now</div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default FlightScroll;