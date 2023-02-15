import React, { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import loginillustrationcrop from './loginillustrationcrop.png';

export const Login = () => {
    const [emAil, setEmAil] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [role, setRole] = useState("");
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Info:", role, userName, emAil, password);
        fetch("http://localhost:8080/UserForm/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ role: role, userName: userName, emAil: emAil, password: password }),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("logged in successfully");
                    switch (role) {
                        case "Employee":
                            console.log("Redirecting to /employeedashboard/employeehome");
                            history.push("/employeedashboard/employeehome");
                            break;
                        case "Employer":
                            console.log("Redirecting to /employerdashboard/employerhome");
                            history.push("/employerdashboard/employerhome");
                            break;
                        case "Reviewer":
                            console.log("Redirecting to /reviewerdashboard/reviewerhome");
                            history.push("/reviewerdashboard/reviewerhome");
                            break;
                        case "Auditor":
                            console.log("Redirecting to /auditordashboard/auditorhome");
                            history.push("/auditordashboard/auditorhome");
                            break;
                        default:
                            break;
                    }
                } else {
                    console.log("Error logging in");
                }
            })
            .catch((error) => {
                console.log("Error logging in: ", error);
            });
    };

    return (
        <div style={{
            backgroundImage: `url(${loginillustrationcrop})`,
            width: 200,
            height: 200
        }}>
        <div className="auth-form-container">
            <div className="content">
                <div className="form-section">
                    <center>
                        <h2>Login</h2>
                    </center>
                    <br></br>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="role">Role</label>
                            <input
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                type="text"
                                placeholder="Employee, Employer, Reviewer, Auditor"
                                id="role"
                                name="role"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="user">User Name</label>
                            <input
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                type="text"
                                placeholder="User name"
                                id="userName"
                                name="userName"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                value={emAil}
                                onChange={(e) => setEmAil(e.target.value)}
                                type="text"
                                placeholder="Email address"
                                id="emAil"
                                name="emAil"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="********"
                                id="password"
                                name="password"
                                className="form-control"
                            />
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;

