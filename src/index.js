import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HotelList from './component/hotelList';
import CarList from './component/carList';
import FlightList from './component/flightList';
import Payment from './component/payment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
        <Route exact path = "/" element={<App />} />
        <Route exact path = "/hotelList" element={ <HotelList /> }/>
        <Route exact path = "/flightList" element={ <FlightList /> }/>
        <Route exact path = "/carList" element={ <CarList /> }/>
        <Route exact path = "/payment" element={ <Payment /> }/>
     </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


