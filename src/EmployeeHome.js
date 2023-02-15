import React, { Component } from "react";
import { Link } from "react-router-dom";

class EmployeeHome extends Component {
    render() {
        return (
            <><div>
                <div className="dash-text">
            <h3><b>I-9 Forms</b></h3>
            </div>
            <h5>Please read the instructions before you begin</h5>
                <a href={`${process.env.PUBLIC_URL}/forminstructions.pdf`} target="_blank" rel="noopener noreferrer">Full Instructions</a>
            </div>
                <br></br>
                <div>
                    <Link to='/employeeform'>
                    <button className="button-stylehome">I-9 Form</button>
                    </Link>
                </div></>
        );
    }
}

export default EmployeeHome;
