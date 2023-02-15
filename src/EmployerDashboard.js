import { NavLink } from "react-router-dom";
import React from "react";
import LogoutButton from './LogoutButton';

const EmployerDashboard = (props) => {
        return (
            <div>
                <img src={`${process.env.PUBLIC_URL}/logo.png`} className="upper-right-image" alt="adp logo" />
                <div className="dash-text">
                <h1><b>Welcome</b></h1>
                </div>
                <LogoutButton />
                <br></br>
                <ul className="header">
                    <li><NavLink to="/employerdashboard/employerhome">Home</NavLink></li>
                    <li><NavLink to="/employerdashboard/employeelist">Employees</NavLink></li>
                    <li><NavLink to="/employerdashboard/reporting">Reporting</NavLink></li>
                </ul>
                <div className="content">
                {props.children}
            </div>
            </div>
        );
    }

export default EmployerDashboard;