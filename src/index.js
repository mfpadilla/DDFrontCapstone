import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import Registration from "./Registration";
import Login from "./Login";
import EmployeeDashboard from "./EmployeeDashboard";
import EmployeeForm from "./EmployeeForm";
import EmployeeConfirmation from "./EmployeeConfirmation";
import ReviewerDashboard from "./ReviewerDashboard";
import EmployerDashboard from "./EmployerDashboard";
import AuditorDashboard from "./AuditorDashboard";

import EmployeeHome from "./EmployeeHome";
import EmployeeStatus from "./EmployeeStatus"
import EmployeeInfo from "./EmployeeInfo"

import ReviewerHome from "./ReviewerHome";
import ReviewerSummary from "./ReviewerSummary";
import ReviewerInfo from "./ReviewerInfo";

import Form from "./Form";
import SForm from "./SForm";
import TForm from "./TForm";
import ReviewerForm from "./ReviewerForm";
import ReviewerConfirmation from "./ReviewerConfirmation"

import EmployerHome from "./EmployerHome";
import EmployeeList from "./EmployeeList";
import Reporting from "./Reporting";

import AuditorHome from "./AuditorHome";
import AEmployeeList from "./AEmployeeList"
import AReporting from "./AReporting"
import AuditorRecords from "./AuditorRecords"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route path="/registration" component={Registration} />
    <Route path="/login" component={Login} />

    <Route path="/employeedashboard">
      <EmployeeDashboard>
        <Route path="/employeedashboard/employeehome" component={EmployeeHome} />
        <Route path="/employeedashboard/status" component={EmployeeStatus} />
        <Route path="/employeedashboard/information" component={EmployeeInfo} />
      </EmployeeDashboard>
    </Route>
    <Route path="/employeeform" component={EmployeeForm} />
    <Route path="/employeeconfirmation" component={EmployeeConfirmation} />

    <Route path="/reviewerdashboard">
      <ReviewerDashboard>
        <Route path="/reviewerdashboard/reviewerhome" component={ReviewerHome} />
        <Route path="/reviewerdashboard/reviewersummary" component={ReviewerSummary} />
        <Route path="/reviewerdashboard/reviewerinfo" component={ReviewerInfo} />
      </ReviewerDashboard>
    </Route>
    <Route path="/form" component={Form} />
    <Route path="/sform" component={SForm} />
    <Route path="/tform" component={TForm} />
    <Route path="/reviewerform" component={ReviewerForm} />
    <Route path="/reviewerconfirmation" component={ReviewerConfirmation} />

    <Route path="/employerdashboard">
      <EmployerDashboard>
        <Route path="/employerdashboard/employerhome" component={EmployerHome} />
        <Route path="/employerdashboard/employeelist" component={EmployeeList} />
        <Route path="/employerdashboard/reporting" component={Reporting} />
      </EmployerDashboard>
    </Route>

    <Route path="/auditordashboard">
      <AuditorDashboard>
        <Route path="/auditordashboard/auditorhome" component={AuditorHome} />
        <Route path="/auditordashboard/aemployeelist" component={AEmployeeList} />
        <Route path="/auditordashboard/areporting" component={AReporting} />
        <Route path="/auditordashboard/auditorrecords" component={AuditorRecords} />
      </AuditorDashboard>
    </Route>
  </BrowserRouter>

);
reportWebVitals();



