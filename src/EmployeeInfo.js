import React, { Component } from "react";

class EmployeeInfo extends Component {
  render() {
    return (
      <div>
        <div className="sub-text">
          <h2><b>What's Next?</b></h2>
      </div>
      <br></br>
      <b>
        <ol>
          <li>Employee completes Section 1 of the I-9</li>
          <li>Employee e-mails additional documents</li>
          <li>Reviewer completes Section 2/3</li>
          <li>Forms are successfully submitted</li>
        </ol>
        </b>
        <br></br>
        <h5>For more information, please visit:</h5>
        <p> <a href="https://www.uscis.gov/i-9">The Official Website of the United States government</a>.
        </p>
      </div>
    );
  }
}

export default EmployeeInfo;
