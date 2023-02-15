import React, { useState, useEffect } from "react";
import { Form, Row } from "react-bootstrap";

function EmployeeForm() {
    const [EmployeeForm, setEmployeeForm] = useState({});

    useEffect(() => {
        fetch("http://localhost:8080/EmployeeForm/getbyid/3" , {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setEmployeeForm(data);
            })
            .catch(error => {
                console.log("Error retrieving data: ", error);
            });
    }, []);

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
                            <p><b>START HERE: Read instructions carefully before completing this form. The instructions must be available,
                                either in paper or electronically, during completion of this form. Employers are liable for errors in the
                                completion of this form.</b></p>
                            <br></br>
                            <p><b>ANTI-DISCRIMINATION NOTICE:</b> It is illegal to discriminate against work-authorized individuals.
                                Employers <b>CANNOT</b> specify which document(s) an employee may present to establish employment
                                authorization and identity. The refusal to hire or continue to employ an individual because the
                                documentation presented has a future expiration date may also constitute illegal discrimination</p>
                            <br></br>
                            <h4>Section 1</h4>
                            <br></br>
                            <Form>
                                <Row className="mx-3">
                                    <div className="col">
                                        <Form.Group controlId="formFORMID">
                                            <Form.Label>Form ID</Form.Label>
                                            <Form.Control
                                                type="text" name="FORMID" value={EmployeeForm.FORMID} disabled
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formLast_Name">
                                            <Form.Label>Last Name (Family Name)</Form.Label>
                                            <Form.Control
                                                type="text" name="last_Name" value={EmployeeForm.last_Name} disabled
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formFirst_name">
                                            <Form.Label>First Name (Given Name)</Form.Label>
                                            <Form.Control
                                                type="text" name="first_name" value={EmployeeForm.first_name} disabled
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formMiddle_Initial">
                                            <Form.Label>Middle Initial</Form.Label>
                                            <Form.Control type="text" name="middle_Initial" value={EmployeeForm.middle_Initial} disabled
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formOther_Last_Name">
                                            <Form.Label>Other Last Names Used (if any)</Form.Label>
                                            <Form.Control type="text" name="Other_Last_Name" value={EmployeeForm.Other_Last_Name} disabled
                                            />
                                        </Form.Group>
                                    </div>
                                </Row>
                                <br></br>
                                <Row className="mx-3">
                                    <div className="col">
                                        <Form.Group controlId="formAddress">
                                            <Form.Label>Address (Street Number and Name)</Form.Label>
                                            <Form.Control type="text" name="address" value={EmployeeForm.address} disabled
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formApt_number">
                                            <Form.Label>Apt. Number</Form.Label>
                                            <Form.Control type="text" name="apt_number" value={EmployeeForm.apt_number} disabled
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formCity">
                                            <Form.Label>City or Town</Form.Label>
                                            <Form.Control type="text" name="city" value={EmployeeForm.city} disabled
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formState">
                                            <Form.Label>State</Form.Label>
                                            <Form.Control type="text" name="state" value={EmployeeForm.state} disabled
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formZipCode">
                                            <Form.Label>ZIP Code</Form.Label>
                                            <Form.Control type="text" name="zipCode" value={EmployeeForm.zipCode} disabled
                                            />
                                        </Form.Group>
                                    </div>
                                </Row>
                                <br></br>
                                <Row className="mx-3">
                                    <div className="col">
                                        <Form.Group controlId="formDob">
                                            <Form.Label>Date of Birth (yyyy/mm/dd)</Form.Label>
                                            <Form.Control type="text" name="dob" value={EmployeeForm.dob} disabled
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formSsn">
                                            <Form.Label>U.S. Social Security Number</Form.Label>
                                            <Form.Control type="text" name="ssn" value={EmployeeForm.ssn} disabled
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formEmail_address">
                                            <Form.Label>Employee's E-mail Address</Form.Label>
                                            <Form.Control type="text" name="email_address" value={EmployeeForm.email_address} disabled
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group controlId="formTelephone_number">
                                            <Form.Label>Employee's Telephone Number</Form.Label>
                                            <Form.Control type="text" name="telephone_number" value={EmployeeForm.telephone_number} disabled
                                            />
                                        </Form.Group>
                                    </div>
                                </Row>
                                <br></br>
                                <p><b>I am aware that federal law provides for imprisonment and/or fines for false statements or use of false
                                    documents in connection with the completion of this form.</b></p>
                                <Form.Group controlId="formOptions">
                                    <br></br>
                                    <Form.Label>
                                        <b>I attest, under penalty of perjury, that I am (check one of the
                                            following boxes): </b>
                                    </Form.Label>
                                    <Form.Check
                                        type="checkbox"
                                        label="1. A citizen of the United States"
                                        name="citizen"
                                        checked={EmployeeForm.citizen}
                                        disabled
                                    />
                                    <hr></hr>
                                    <Form.Check
                                        type="checkbox"
                                        label="2. A noncitizen national of the United States (See Instructions)"
                                        name="noncitizen"
                                        checked={EmployeeForm.noncitizen}
                                        disabled
                                    />
                                    <hr></hr>
                                    <Form.Check
                                        type="checkbox"
                                        label="3. A lawful permanent resident"
                                        name="permanent_resident"
                                        checked={EmployeeForm.permanent_resident}
                                        disabled
                                    />
                                    <div className="col-5">
                                        <Form.Group controlId="formUscis_number">
                                            <Form.Label>Alien Registration Number/USCIS Number</Form.Label>
                                            <Form.Control type="text" name="uscis_number" value={EmployeeForm.uscis_number} disabled
                                            />
                                        </Form.Group>
                                    </div>
                                    <hr></hr>
                                    <Form.Check
                                        type="checkbox"
                                        label="4. An alien authorized to work until"
                                        name="authorized_alien"
                                        checked={EmployeeForm.authorized_alien}
                                        disabled
                                    />
                                    <div className="col-5">
                                        <Form.Group controlId="formAuthorized_expiration_date">
                                            <Form.Label>expiration date, if applicable, yyyy/mm/dd</Form.Label>
                                            <Form.Control type="text" name="authorized_expiration_date" value={EmployeeForm.authorized_expiration_date} disabled
                                            />
                                        </Form.Group>
                                    </div>
                                    <br></br>
                                    <p>
                                        Aliens authorized to work must provide only one of the following
                                        document numbers to complete Form I-9:
                                    </p>
                                    <Row className="mx-3">
                                        <div className="col">
                                            <Form.Group controlId="formAlien_registration_number">
                                                <Form.Label>1. Alien Registration Number</Form.Label>
                                                <Form.Control type="text" name="alien_registration_number" value={EmployeeForm.alien_registration_number} disabled
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-1">
                                            <p><b>OR</b></p>
                                        </div>
                                        <div className="col">
                                            <Form.Group controlId="formFormi94admission_number">
                                                <Form.Label>2. Form I-94 Admission Number</Form.Label>
                                                <Form.Control type="text" name="formi94admission_number" value={EmployeeForm.formi94admission_number} disabled
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-1">
                                            <p><b>OR</b></p>
                                        </div>
                                        <div className="col">
                                            <Form.Group controlId="formForeign_passport_number">
                                                <Form.Label>3. Foreign Passport Number</Form.Label>
                                                <Form.Control type="text" name="foreign_passport_number" value={EmployeeForm.foreign_passport_number} disabled
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col">
                                            <Form.Group controlId="formCountry_of_issuance">
                                                <Form.Label>Country of Issuance</Form.Label>
                                                <Form.Control type="text" name="country_of_issuance" value={EmployeeForm.country_of_issuance} disabled
                                                />
                                            </Form.Group>
                                        </div>
                                    </Row>
                                    <hr></hr>
                                    <Row className="mx-3">
                                        <div className="col-3">
                                            <Form.Group controlId="formSignature_of_employee">
                                                <Form.Label>Signature of Employee</Form.Label>

                                            </Form.Group>
                                        </div>
                                        <div className="col-3">
                                            <Form.Group controlId="formTodaysdate">
                                                <Form.Label>Today's Date (yyyy/mm/dd)</Form.Label>
                                                <Form.Control type="text" name="todaysdate" value={EmployeeForm.todaysdate} disabled
                                                />
                                            </Form.Group>
                                        </div>
                                    </Row>
                                    <br></br>
                                    <Form.Label>
                                        <h4>Preparer and/or Translator Certification (check one)</h4>
                                    </Form.Label>
                                    <Form.Check
                                        type="checkbox"
                                        label="I did not use a preparer or translator"
                                        name="no_preparer_translator"
                                        checked={EmployeeForm.no_preparer_translator}
                                        disabled
                                    />
                                    <div className="col">
                                        <Form.Check
                                            type="checkbox"
                                            label="A preparer(s) and/or translator(s) assisted the employee in completing Section 1"
                                            name="preparer_translator"
                                            checked={EmployeeForm.preparer_translator}
                                            disabled
                                        />
                                    </div>
                                    <br></br>
                                    <p><b>
                                        I attest, under the penalty of perjury, that I have assisted in the
                                        completion of Section 1 of this form and that to the best of my
                                        knowledge the information is true and correct.
                                    </b></p>

                                    <Row className="mx-3">
                                        <div className="col-3">
                                            <Form.Group controlId="formPreparer_translator_signature">
                                                <Form.Label>Signature of Preparer or Translator</Form.Label>
                                                <Form.Control type="text" name="preparer_translator_signature" value={EmployeeForm.preparer_translator_signature} disabled
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-3">
                                            <Form.Group controlId="formPreparer_translator_date">
                                                <Form.Label>Today's Date (yyyy/mm/dd)</Form.Label>
                                                <Form.Control type="text" name="preparer_translator_date" value={EmployeeForm.preparer_translator_date} disabled
                                                />
                                            </Form.Group>
                                        </div>
                                    </Row>
                                    <br></br>
                                    <Row className="mx-3">
                                        <div className="col-3">
                                            <Form.Group controlId="formPreparer_translator_last_name">
                                                <Form.Label>Last Name (Family Name)</Form.Label>
                                                <Form.Control type="text" name="preparer_translator_last_name" value={EmployeeForm.preparer_translator_last_name} disabled
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-3">
                                            <Form.Group controlId="formPreparer_translator_first_name">
                                                <Form.Label>First Name (Given Name)</Form.Label>
                                                <Form.Control type="text" name="preparer_translator_first_name" value={EmployeeForm.preparer_translator_first_name} disabled
                                                />
                                            </Form.Group>
                                        </div>
                                    </Row>
                                    <br></br>
                                    <Row className="mx-3">
                                        <div className="col">
                                            <Form.Group controlId="formPreparer_translator_address">
                                                <Form.Label>Address (Street Number and Name)</Form.Label>
                                                <Form.Control type="text" name="preparer_translator_address" value={EmployeeForm.preparer_translator_address} disabled
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col">
                                            <Form.Group controlId="formPreparer_translator_city">
                                                <Form.Label>City or Town</Form.Label>
                                                <Form.Control type="text" name="preparer_translator_city" value={EmployeeForm.preparer_translator_city} disabled
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col">
                                            <Form.Group controlId="formPreparer_translator_state">
                                                <Form.Label>State</Form.Label>
                                                <Form.Control type="text" name="preparer_translator_state" value={EmployeeForm.preparer_translator_state} disabled
                                                />

                                            </Form.Group>
                                        </div>
                                        <div className="col">
                                            <Form.Group controlId="formPreparer_translator_zipcode">
                                                <Form.Label>ZIP Code</Form.Label>
                                                <Form.Control type="text" name="preparer_translator_zipcode" value={EmployeeForm.preparer_translator_zipcode} disabled
                                                />
                                            </Form.Group>
                                        </div>
                                    </Row>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default EmployeeForm;