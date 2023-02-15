import React, { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SaveButton from "./SaveButton";

function UserForm() {
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
    const handleChange = (e) => {
        setUserForm({ ...UserForm, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/UserForm/add", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(UserForm),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Form submitted successfully");
                } else {
                    console.log("Error submitting form");
                }
            })
            .catch((error) => {
                console.log("Error submitting form: ", error);
            });
    };
    return (
        <Form onSubmit={handleSubmit}>
            <center>
                <h2><b>Registration Form</b></h2>
                <h4>This is the registration page for new hires, please review <i>every</i> field before pressing submit.</h4>
            </center>
            <br></br>
            <h3>Personal Information:</h3>
            <h6>This helps us identify who you are</h6>
            <Row className="mx-3">
                <div className="col-3">
                    <Form.Group controlId="formRole">
                        <Form.Label>Role</Form.Label>
                        <Form.Control type="text" name="role" onChange={handleChange}
                        />
                    </Form.Group>
                </div>
                <div className="col-3">
                    <Form.Group controlId="formUserName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" name="userName" onChange={handleChange}
                        />
                    </Form.Group>
                </div>
            </Row>
            <br></br>
            <Row className="mx-3">
                <div className="col">
                    <Form.Group controlId="formLast_NamE">
                        <Form.Label>Last Name (Family Name)</Form.Label>
                        <Form.Control type="text" name="last_NamE" onChange={handleChange}
                        />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group controlId="formFirst_NamE">
                        <Form.Label>First Name (Given Name)</Form.Label>
                        <Form.Control type="text" name="first_NamE" onChange={handleChange}
                        />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group controlId="formEmAil">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="emAil" onChange={handleChange}
                        />
                    </Form.Group>
                </div>
            </Row>
            <br></br>
            <Row className="mx-3">
                <div className="col">
                    <Form.Group controlId="formPassword">
                        <Form.Label>Create Password</Form.Label>
                        <Form.Control type="text" name="password" onChange={handleChange}
                        />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group controlId="formVerify_Password">
                        <Form.Label>Verify Password</Form.Label>
                        <Form.Control type="text" name="verify_password" onChange={handleChange}
                        />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group controlId="formBirth_Date">
                        <Form.Label>Birth Date (yyyy/mm/dd)</Form.Label>
                        <Form.Control type="text" name="birth_Date" onChange={handleChange} />
                    </Form.Group>
                </div>
            </Row>
            <div>
                <br></br>
                <h3>Employment Information:</h3>
                <h6>This information would have been provided to you by your HR or Accounting Department</h6>
            </div>
            <Row className="mx-3">
                <div className="col">
                    <Form.Group controlId="formClienT_ID">
                        <Form.Label>Client #</Form.Label>
                        <Form.Control type="text" name="clienT_ID" onChange={handleChange}
                        />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group controlId="formCompany_Code">
                        <Form.Label>Company Code</Form.Label>
                        <Form.Control type="text" name="company_CodE" onChange={handleChange}
                        />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group controlId="formEmployeeID">
                        <Form.Label>Employee ID/File #</Form.Label>
                        <Form.Control type="text" name="employeE_ID" onChange={handleChange}
                        />
                    </Form.Group>
                </div>
            </Row>
            <br></br>
            <br></br>
            <Row className="mx-3">
                <div className="col-1">
                    <SaveButton />
                </div>
                <div className="col-1">
                    <Link to='/login'>
                    <button className="button-style">Login</button>
                    </Link>
                </div>
            </Row>
        </Form>
    );
}
export default UserForm;