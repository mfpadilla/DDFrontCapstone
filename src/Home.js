import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    return (
        <header>
            <img src={`${process.env.PUBLIC_URL}/logo.png`} className="upper-right-image" alt="adp logo" />
            <h1>
                <center>Employment Eligibility Verification</center>
            </h1>
            <h3 className="home-text">I-9 Form: Capstone Project</h3>
            <br></br>
            <hr className="hr"></hr>
            <b><Link to="/login" className="login">
                Login
            </Link></b>
            <b><Link to="/registration" className="registration">
                Registration
            </Link></b>



            <h2 className="home-text"><center>Welcome</center></h2>
            <br></br>
            <h6 className="home-text"><b>CASE STUDY</b></h6>

            <div className="mission-statement">
                <b><p>Our mission is to revolutionize the way I-9 Forms are managed by delivering a centralized,
                    web-based solution.
                    <br></br>
                    <br></br>
                    We will empower users with real-time visibility into case status and eliminate the hassle of mailing,
                    emailing, shipping, or faxing completed forms. Our system will enforce legal standards with seamless integration of E-Verify.
                    <br></br>
                    <br></br>
                    We will provide centralized storage of I-9 data and allow customized views of information
                    for different personas.
                    <br></br>
                    <br></br>
                    <i>
                        All this, to streamline and simplify the I-9 process.</i></p></b>
            </div>


            <footer><div className="bottom-rectangle"></div></footer>
        </header>
    );
};

export default Home; 
