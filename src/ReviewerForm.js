import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SaveButton from "./SaveButton";

function ReviewerForm() {
    const [ReviewerForm, setReviewerForm] = useState({
        elname: "",
        efname: "",
        emiddle: "",
        estatus: "",
        adtitle: "",
        bdtitle: "",
        cdtitle: "",
        aissuing: "",
        bissuing: "",
        cissuing: "",
        adnumber: "",
        bdnumber: "",
        cdnumber: "",
        aedate: "",
        bedate: "",
        cedate: "",
        startdate: "",
        additionalcomments: "", //Textbox
        asignature: "",
        lnrep: "",
        fnrep: "",
        orgname: "",
        orgadd: "",
        orgcity: "",
        orgstate: "",
        orgzip: "",
        relast: "",
        refirst: "",
        remiddle: "",
        rehiredate: "",
        redoctitle: "",
        redocnumber: "",
        reexpdate: "",
        secondsignature: "",
        seconddate: "",
        secondrepname: ""
    });

    const handleChange = (e) => {
        setReviewerForm({ ReviewerForm, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/ReviewerForm/add", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ReviewerForm),
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
        <div>
            <div className="mx-3 my-3">
                <div className="content">
                    <center>
                        <h1>Employment Eligibility Verification</h1>
                        <h2>Department of Homeland Security</h2>
                        <h3>U.S. Citizenship and Immigration Services</h3>
                    </center>
                    <div className="ml-3 mr-3">
                        <hr></hr>
                        <div className="mt-md-4">
                            <h4>
                                Section 2 Employer or Authorized Representative and Review and
                                Verification
                            </h4>
                            <br></br>
                            <h5>Employee Info from Section 1</h5>
                            <Form onSubmit={handleSubmit}>
                                <Row className="mx-3">
                                    <div className="col">
                                        <Form.Group controlId="formELName">
                                            <Form.Label>Last Name (Family Name)</Form.Label>
                                            <Form.Control type="text" name="elname" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formEFName">
                                            <Form.Label>First Name (Given Name)</Form.Label>
                                            <Form.Control type="text" name="efname" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formEMiddle">
                                            <Form.Label>Middle Initial</Form.Label>
                                            <Form.Control type="text" name="emiddle" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formEStatus">
                                            <Form.Label>Citizenship/Immigration Status</Form.Label>
                                            <Form.Control type="text" name="estatus" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                </Row>
                                <br></br>
                                <hr></hr>
                                <br></br>
                                <h5>List A</h5>
                                <p><b>Identity and Employment Authorization</b></p>

                                <Row className="mx-3">
                                    <div className="col">
                                        <Form.Group controlId="formADTitle">
                                            <Form.Label>Document Title</Form.Label>
                                            <Form.Control type="text" name="adtitle" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formAIssuing">
                                            <Form.Label>Issuing Authority</Form.Label>
                                            <Form.Control type="text" name="aissuing" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formADNumber">
                                            <Form.Label>Document Number</Form.Label>
                                            <Form.Control type="text" name="adnumber" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formAEDate">
                                            <Form.Label>
                                                Expiration Date (if any) (yyyy/mm/dd)
                                            </Form.Label>
                                            <Form.Control type="text" name="aedate" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                </Row>
                                <br></br>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div
                                        style={{ flex: 1, backgroundColor: "black", height: "3px" }}
                                    />
                                    <p style={{ margin: "0 10px" }}>
                                        <b>OR</b>
                                    </p>
                                    <div
                                        style={{ flex: 1, backgroundColor: "black", height: "3px" }}
                                    />
                                </div>
                                <br></br>
                                <h5>List B</h5>
                                <p><b>Identity</b></p>

                                <Row className="mx-3">
                                    <div className="col">
                                        <Form.Group controlId="formBDTitle">
                                            <Form.Label>Document Title</Form.Label>
                                            <Form.Control type="text" name="bdtitle" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formBIssuing">
                                            <Form.Label>Issuing Authority</Form.Label>
                                            <Form.Control type="text" name="bissuing" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formBDNumber">
                                            <Form.Label>Document Number</Form.Label>
                                            <Form.Control type="text" name="bdnumber" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formBEDate">
                                            <Form.Label>
                                                Expiration Date (if any) (yyyy/mm/dd)
                                            </Form.Label>
                                            <Form.Control type="text" name="bedate" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                </Row>
                                <br></br>
                                <br></br>
                                <center>
                                    <h6><b>AND</b></h6>
                                </center>
                                <h5>List C</h5>
                                <p><b>Employment Authorization</b></p>

                                <Row className="mx-3">
                                    <div className="col">
                                        <Form.Group controlId="formCDTitle">
                                            <Form.Label>Document Title</Form.Label>
                                            <Form.Control type="text" name="cdtitle" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formCIssuing">
                                            <Form.Label>Issuing Authority</Form.Label>
                                            <Form.Control type="text" name="cissuing" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formCDNumber">
                                            <Form.Label>Document Number</Form.Label>
                                            <Form.Control type="text" name="cdnumber" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formCEDate">
                                            <Form.Label>
                                                Expiration Date (if any) (yyyy/mm/dd)
                                            </Form.Label>
                                            <Form.Control type="text" name="cedate" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                </Row>
                                <br></br>
                                <hr></hr>
                                <br></br>
                                <div className="col">
                                    <Form.Group controlId="formadditionalcomments">
                                        <Form.Label>
                                            Additional Information
                                        </Form.Label>
                                        <Form.Control type="text" name="additionalcomments" onChange={handleChange}
                                        />
                                    </Form.Group>
                                </div>
                                <br></br>
                                <p>
                                    <b>
                                        Certification: I attest, under penalty of perjury, that (1) I
                                        have examined the document(s) presented by the above-named
                                        employee, (2) the above-listed document(s) appear to be
                                        genuine and to relate to the employee name, and (3) to the
                                        best of my knowledge the employee is authorized to work in the
                                        United States.
                                    </b>
                                </p>
                                <div className="col-5">
                                    <Form.Group controlId="formStartDate">
                                        <Form.Label>
                                            The employee's first day of employment (yyyy/mm/dd)
                                        </Form.Label>
                                        <br></br>
                                        <Form.Label>See instructions for exemptions</Form.Label>
                                        <Form.Control type="text" name="startdate" onChange={handleChange}
                                        />
                                    </Form.Group>
                                </div>
                                <br></br>
                                <Row className="mx-3">
                                    <div className="col">
                                        <Form.Group controlId="formASignature">
                                            <Form.Label>
                                                Signature of Employer or Authorized Representative
                                            </Form.Label>
                                            <Form.Control type="text" name="asignature" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formADate">
                                            <Form.Label>Today's Date (yyyy/mm/dd)</Form.Label>
                                            <Form.Control type="text" name="adate" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formATitle">
                                            <Form.Label>
                                                Titile of Employer or Authorized Representative
                                            </Form.Label>
                                            <Form.Control type="text" name="atitle" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                </Row>
                                <br></br>
                                <Row className="mx-3">
                                    <div className="col">
                                        <Form.Group controlId="formLNRep">
                                            <Form.Label>
                                                Last Name of Employer or Authorized Representative
                                            </Form.Label>
                                            <Form.Control type="text" name="lnrep" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formFNRep">
                                            <Form.Label>
                                                First Name of Employer or Authorized Representative
                                            </Form.Label>
                                            <Form.Control type="text" name="fnrep" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formOrgName">
                                            <Form.Label>
                                                Employer's Business or Organization Name
                                            </Form.Label>
                                            <Form.Control
                                                type="text" name="orgname" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                </Row>
                                <br></br>
                                <Row className="mx-3">
                                    <div className="col">
                                        <Form.Group controlId="formOrgAdd">
                                            <Form.Label>
                                                Employer's Business or Organization Address (Street Number
                                                & Name)
                                            </Form.Label>
                                            <Form.Control type="text" name="orgadd" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formOrgCity">
                                            <Form.Label>City or Town</Form.Label>
                                            <Form.Control type="text" name="orgcity" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formOrgState">
                                            <Form.Label>State</Form.Label>
                                            <Form.Control type="text" name="orgstate" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formOrgZip">
                                            <Form.Label>ZIP Code</Form.Label>
                                            <Form.Control type="text" name="orgzip" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                </Row>
                                <br></br>
                                <hr></hr>
                                <br></br>
                                <h4>Section 3 Reverification and Rehires</h4>
                                <h5>
                                    (To be completed and signed by employer or authorized
                                    representative)
                                </h5>
                                <br></br>
                                <Row className="mx-3">
                                    <div className="col">
                                        <p>
                                            <b>A.</b> New Name (if applicable)
                                        </p>
                                    </div>
                                    <div className="col-3">
                                        <p>
                                            <b>B.</b> Date of Rehire (if applicable)
                                        </p>
                                    </div>
                                </Row>
                                <Row className="mx-3">
                                    <div className="col">
                                        <Form.Group controlId="formReLast">
                                            <Form.Label>Last Name (Family Name)</Form.Label>
                                            <Form.Control type="text" name="relast" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formReFirst">
                                            <Form.Label>First Name (Given Name)</Form.Label>
                                            <Form.Control type="text" name="refirst" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formReMiddle">
                                            <Form.Label>Middle Initial</Form.Label>
                                            <Form.Control type="text" name="remiddle" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formRehireDate">
                                            <Form.Label>Date (yyyy/mm/dd)</Form.Label>
                                            <Form.Control type="text" name="rehiredate" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                </Row>
                                <br></br>
                                <hr></hr>
                                <p>
                                    <b>C.</b> If the employee's previous grant of employment
                                    authorization has expired, provide the information for the
                                    document or receipt that establishes continuing employment in
                                    the space provided below
                                </p>
                                <Row className="mx-3">
                                    <div className="col">
                                        <Form.Group controlId="formReDocTitle">
                                            <Form.Label>Document Title</Form.Label>
                                            <Form.Control type="text" name="redoctitle" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formReDocNumber">
                                            <Form.Label>Document Number</Form.Label>
                                            <Form.Control type="text" name="redocnumber" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formReExpDate">
                                            <Form.Label>
                                                Expiration Date (if any) (yyyy/mm/dd)
                                            </Form.Label>
                                            <Form.Control type="text" name="reexpdate" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                </Row>
                                <br></br>
                                <hr></hr>
                                <p>
                                    <b>
                                        I attest, under penalty of perjury, that to the best of my
                                        knowledge, this employee is authorized to work in the United
                                        States, and if the employee presented document(s), the
                                        document(s) I have examined appear to be genuine and to relate
                                        to the individual
                                    </b>
                                </p>
                                <Row className="mx-3">
                                    <div className="col">
                                        <Form.Group controlId="formSecondSignature">
                                            <Form.Label>Signature of Employer or Authorized Representative</Form.Label>
                                            <Form.Control type="text" name="secondsignature" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formSecondDate">
                                            <Form.Label>Today's Date (yyyy/mm/dd)</Form.Label>
                                            <Form.Control type="text" name="seconddate" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formSecondRepName">
                                            <Form.Label>
                                                Name of Employer or Authorized Representative
                                            </Form.Label>
                                            <Form.Control type="text" name="secondrepname" onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </div>
                                </Row>
                                <br></br>
                                <Row className="mx-3">
                                    <div className="col-1">
                                        <SaveButton />
                                    </div>
                                    <div className="col-1">
                                        <Link to='reviewerconfirmation'>
                                        <button className="button-style">Exit</button>
                                        </Link>
                                    </div>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewerForm;
