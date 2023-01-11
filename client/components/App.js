import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import AuthForm from "./AuthForm";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { me } from '../store/store';
import { loadStripe } from '@stripe/stripe-js';

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(me())
    }, []);

    return (
        <>
            <div>
                <Navbar />
            </div>
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route to="/home" element={<Home />} />
                <Route path="/login" element={<AuthForm name="login" displayName="Login" />}/>
            </Routes>
        </>
    );
};

export default App;
