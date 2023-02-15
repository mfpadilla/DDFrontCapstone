import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoutButton from './LogoutButton';

    class EmployeeConfirmation extends Component {
        render() {
            return (
        <div className="mx-3 my-3">
            <center>
                <h1>Thank You</h1>
                <h4>Your form has been submitted successfully</h4>
                <hr></hr>
                <h5><b>Reminder:</b></h5>
                <h6>Please send all additional required documents to the reviewer at:
                    <br></br>
                    <b>reviewformshr@adp.com</b>
                </h6>
                <br></br>
                <a href={`${process.env.PUBLIC_URL}/listofdocuments.pdf`} target="_blank" rel="noopener noreferrer">List of Required Documents</a>
                <br></br>
                <br></br>
                <LogoutButton />
            </center>
        </div>
        );
    }
}

export default EmployeeConfirmation;