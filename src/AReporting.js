import React, { useState, useEffect } from "react";
import { Form, Button, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Reporting = () => {
  const [ReportingData, setReportingData] = useState([]);
  const [formData, setFormData] = useState({
    reports: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/Reporting/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reports: formData.reports,
        // Add any other data that you need to send to the server
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data submitted successfully: ", data);
      })
      .catch((error) => {
        console.log("Error submitting data: ", error);
      });
  };
  useEffect(() => {
    fetch("http://localhost:8080/Reporting/getAll", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setReportingData(data);
      })
      .catch((error) => {
        console.log("Error retrieving data: ", error);
      });
  }, []);
  return (
    <div className="ReportBuilder">
      <div className="sub-text">
         <center>
      <h2><b>Report Log</b></h2>
      </center>
      </div>
      <center>
      <table cellPadding="20" cellSpacing="10">
        <thead>
          <tr>
            <th>Report State</th>
            <th>Region</th>
            <th>Report Date</th>
            <th>Employee ID</th>
            <th>Form ID</th>
            <th>Auditor ID</th>
            <th>Reports</th>
          </tr>
        </thead>
        <tbody>
          {ReportingData.map((data) => (
            <tr key={data.REPORTID}>
              <td>{data.business_state}</td>
              <td>{data.business_region}</td>
              <td>{data.reportDate}</td>
              <td>{data.employeeID}</td>
              <td>{data.form_ID}</td>
              <td>{data.auditor_AuditID}</td>
              <td>{data.reports}</td>
            </tr>))}
        </tbody>
      </table>
      </center>
      <br />
      <Row className="mx-3">
        <div className="col-3">
          <Form.Group controlId="formReports">
            <Form.Label>
              <b>Auditor's Notes</b>
            </Form.Label>
            <Form.Control
              type="text"
              name="reports"
              placeholder="Insert Auditor's Notes"
              onChange={handleChange}
            />
          </Form.Group>
          <br></br>
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </Row>
    </div>
  );
}
export default Reporting;
