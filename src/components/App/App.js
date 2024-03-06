import React, {StrictMode} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.css";

import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import Otp from "../Otp/Otp";
import Game from "../Tic/Tic";


function setToken(userToken) {
    const token = JSON.stringify(userToken);
    console.log(`userToken: ${token}`);
    sessionStorage.setItem('token', token);
}

// function getToken() {
//     const tokenString = sessionStorage.getItem('token');
//     console.log(`tokenString: ${tokenString}`);
//     const userToken = JSON.parse(tokenString);
//     console.log(`userToken: ${userToken.token}`);
//     return userToken?.token
// }

export default function App() {
    // const token = getToken();

    // if(!token) {
    //     return <Login setToken={setToken} />
    // }

    return (
        <div className="wrapper">
            <StrictMode>
                <h1>Application</h1>
                <BrowserRouter>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />}></Route>
                        <Route path="/login" element={<Login setToken={setToken} />}></Route>
                        <Route path="/otp" element={<Otp />}></Route>
                        <Route path="/tictactoe" element={<Game />}></Route>
                    </Routes>
                </BrowserRouter>
            </StrictMode>
        </div>
    );
}