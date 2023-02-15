import { NavLink } from "react-router-dom";
import React from "react";
import LogoutButton from './LogoutButton';

const EmployeeDashboard = (props) => {

    return (
        <div>
            <img src={`${process.env.PUBLIC_URL}/logo.png`} className="upper-right-image" alt="adp logo" />
            <h1><b>Welcome</b></h1>
            <LogoutButton />
            <br></br>
            <ul className="header">
                <li><NavLink to="/employeedashboard/employeehome">Home</NavLink></li>
                <li><NavLink to="/employeedashboard/status">Status</NavLink></li>
                <li><NavLink to="/employeedashboard/information">Information</NavLink></li>
            </ul>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}


export default EmployeeDashboard;