import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import _ from "lodash";

const EmployeeList = () => {
  const [EmployeeListData, setEmployeeListData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/EmployeeList/getAll", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setEmployeeListData(data);
        console.log("Employee List generated successfully");
      })
      .catch((error) => {
        console.log("Error Generating employee list: ", error);
      });
  }, []);

  const firstThreeColumns = EmployeeListData.map((employee) => [
    employee.i9_forms_total,
    employee.i9_forms_completed,
    employee.i9_forms_incomplete,
  ]);

  const lastTwoColumns = _.map(EmployeeListData, (employee) => [
    employee.blacklisted_Employees,
    employee.employee_ID,
  ]);

  const result = [firstThreeColumns[0]].concat(lastTwoColumns);

  return (
    <>
      <div className="sub-text">
        <center>
          <h2><b>Employee List</b></h2>
        </center>
      </div>
      <br></br>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>I9 Forms Total</th>
            <th>I9 Forms Completed</th>
            <th>I9 Forms Incomplete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{EmployeeListData[0]?.i9_forms_total}</td>
            <td>{EmployeeListData[0]?.i9_forms_completed}</td>
            <td>{EmployeeListData[0]?.i9_forms_incomplete}</td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Blacklisted Employees</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {EmployeeListData.map((employee, index) => (
            <tr key={index}>
              <td>{employee.blacklisted_Employees}</td>
              <td>{employee.employee_ID}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default EmployeeList;