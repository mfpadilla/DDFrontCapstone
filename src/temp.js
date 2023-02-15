import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmployeeDashboard from "../EmployeeDashboard";
//import ReviewerDashboard from "./ReviewerDashboard";
//import AuditorDashboard from "./AuditorDashboard";
//import EmployerDashboard from "./EmployerDashboard";

function Login() {
    const [UserForm, setUserForm] = useState({
        UserFormID: "",
        last_NamE: "",
        first_NamE: "",
        emAil: "",
        password: "",
        verify_password: "",
        birth_Date: "",
        clienT_ID: "",
        company_CodE: "",
        employeE_ID: "",
        role: "",
        userName: "",
    });
    const history = useHistory();
    const [error, setError] = useState(null);
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/UserForm/login", {
                method: "POST",
                body: JSON.stringify(UserForm),
                headers: { "Content-Type": "application/json" },
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            console.log("response:", response);
            const { user } = await response.json();
            // Redirect user to their dashboard
            if (user.role === "Employee") {
                // Use history.push to navigate to the EmployeeDashboard
                history.push("/employee-dashboard");
                //  } else if (user.role === "Reviewer") {
                // Use history.push to navigate to the ReviewerDashboard
                //history.push("/ReviewerDashboard");
                //} else if (user.role === "Auditor") {
                // Use history.push to navigate to the AuditorDashboard
                //  history.push("/AuditorDashboard");
                //  } else if (user.role === "Employer") {
                // Use history.push to navigate to the EmployerDashboard
                //   history.push("/EmployerDashboard");
            }
        } catch (error) {
            setError(error.message);
            console.error(error);
        }
    };
    const handleChange = (e) => {
        setUserForm({ ...UserForm, [e.target.name]: e.target.value });
        console.log("UserForm:", UserForm);
    };
    return (
        <div className="auth-form-container">      
        <div className="content">        
        <div className="mr-10">          
        <center><h2>Login</h2></center>          
        <Router>            
            <Switch>              
                <Route path="/employee-dashboard" component={EmployeeDashboard} />              
                <Form onSubmit={handleSubmit}>                
                <Form.Group controlId="formRole">                  
                <Form.Label>Role:</Form.Label>                  
                <Form.Control type="text" name="role" onChange={handleChange}
        />                
        </Form.Group>                
        <br />                
        <Form.Group controlId="formUserName">                  
        <Form.Label>Username:</Form.Label>                  
        <Form.Control type="text" name="userName" onChange={handleChange}
        />                
        </Form.Group>                
        <Form.Group controlId="formEmAil">                  
        <Form.Label>Email:</Form.Label>                  
        <Form.Control type="text" name="emAil" onChange={handleChange}
        />                
        </Form.Group>                
        <Form.Group controlId="formPassword">                  
        <Form.Label>Password:</Form.Label>                  
        <Form.Control type="text" name="password" onChange={handleChange}
        />                
        </Form.Group>                
        <br />                
        <button type="submit">Login</button>                
        {error && <>{error}</>}
        </Form>            
        </Switch>          
        </Router>        
        </div>      
        </div>   
        </div>);
}
export default UserForm;