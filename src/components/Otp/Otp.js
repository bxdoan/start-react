import React, {useState} from "react";
import "./Otp.css";

export default function Otp() {
    const [otp_code, setOtp] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = e.target[0].value;
        console.log(`token: ${token}`);
        setOtp(token);
    }

    return(
        <div className="otp-wrapper">
            <h1>Enter 2FA code</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" />
                </label>
                <div>
                    <button className="b1" type="submit">Submit</button>
                </div>
                <p>OTP: {otp_code} </p>
            </form>
        </div>
    )
}
