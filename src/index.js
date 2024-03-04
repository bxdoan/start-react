import React, {StrictMode, useState} from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.css";

import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";


function setToken(userToken) {
    const token = JSON.stringify(userToken);
    console.log(`userToken: ${token}`);
    sessionStorage.setItem('token', token);
}

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    console.log(`tokenString: ${tokenString}`);
    const userToken = JSON.parse(tokenString);
    console.log(`userToken: ${userToken.token}`);
    return userToken?.token
}

function App() {
    const token = getToken();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div className="wrapper">
            <StrictMode>
                <h1>Application</h1>
                <BrowserRouter>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />}>
                        </Route>
                        <Route path="/login" element={<Login setToken={setToken} />}>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </StrictMode>
        </div>
    );
}

const root = createRoot(document.getElementById("root"));
root.render(App());