import { NavLink } from "react-router-dom";
import React from "react";
import LogoutButton from './LogoutButton';

const AuditorDashboard = (props) => {
        return (
            <div>
                <img src={`${process.env.PUBLIC_URL}/logo.png`} className="upper-right-image" alt="adp logo" />
                <h1><b>Welcome</b></h1>
                <LogoutButton />
                <br></br>
                <ul className="header">
                    <li><NavLink to="/auditordashboard/auditorhome">Home</NavLink></li>
                    <li><NavLink to="/auditordashboard/aemployeelist">Employees</NavLink></li>
                    <li><NavLink to="/auditordashboard/areporting">Reporting</NavLink></li>
                    <li><NavLink to="/auditordashboard/auditorrecords">Records</NavLink></li>
                </ul>
                <div className="content">
                {props.children}
            </div>
            </div>
        );
    }

export default AuditorDashboard;