import React, { Component } from "react";
import { Result } from 'antd';
import "bootstrap/dist/css/bootstrap.min.css";
import LogoutButton from './LogoutButton';


class ReviewerConfirmation extends Component {
    render() {
        return (
            <div>
                <Result
                    status="success"
                    title="Your form has been submitted"
                    subTitle="If any information is missing, please contact the employee via email to request the required documentation"
                />
                <center>
                <LogoutButton />
                </center>
            </div>
        );
    }
}
export default ReviewerConfirmation;