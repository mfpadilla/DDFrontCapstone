import { NavLink } from "react-router-dom";
import React from "react";
import LogoutButton from './LogoutButton';


const ReviewerDashboard = (props) => {

        return (
            <div>
                <img src={`${process.env.PUBLIC_URL}/logo.png`} className="upper-right-image" alt="adp logo" />
                <h1><b>Welcome</b></h1>
                <LogoutButton />
                <br></br>
                <ul className="header">
                    <li><NavLink to="/reviewerdashboard/reviewerhome">Home</NavLink></li>
                    <li><NavLink to="/reviewerdashboard/reviewersummary">Summary</NavLink></li>
                    <li><NavLink to="/reviewerdashboard/reviewerinfo">Information</NavLink></li>
                </ul>
                <div className="content">
                {props.children}
            </div>
            </div>
        );
    }


export default ReviewerDashboard;