import React, { useEffect } from "react";
// import * from 'react-scripts'

import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from "./Header";
import Booking from "./Booking";
import ConfirmBooking from "./ConfirmBooking";
const Main = () => {

    const seedRandom = (seed) => {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function() {
            return (s = s * a % m) / m;
        }
    }

    const fetchAPI = (date) => {
        let result = [];
        let random = seedRandom(date.getDate());
        for (let i = 17; i < 23; i++) {
           if(random() < 0.5) {
               result.push(i + ':00');	
           }

           if(random() > 0.5) {
            result.push(i + ':30');
           }    
           
        }
        return result;
    }
    const submitAPI = (FormData) => {
        return true;
    }

    const initialState = {availableTimes : fetchAPI(new Date())};   

    const [state, dispatch] = React.useReducer(updateTimes, initialState);
        

    function updateTimes(state, date) {
       return {availableTimes : fetchAPI(new Date())};
    }
    const navigate = useNavigate();

    function SubmitForm(formData) {
        if(submitAPI(formData)) {
            navigate('/confirm');
        }
    }   
    return (
        <main className='main'>

            <Routes>
            <Route path="/" element={<Header />} />
                <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} SubmitForm ={SubmitForm} />} />
                <Route path="/confirm" element={<ConfirmBooking />} />
            </Routes>

        </main>
    );
};

export default Main;