import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AuditorRecords = () => {
    const [AuditorData, setAuditorData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/Auditor/getAll", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setAuditorData(data);
            })
            .catch((error) => {
                console.log("Error retrieving data: ", error);
            });
    }, []);

    console.log(AuditorData);

    return (
        <div className="AuditRecords">
            <div className="sub-text">
                <center>
                    <h2><b>Auditor Records</b></h2>
                </center>
            </div>
            <br></br>
            <center>
            <table cellPadding="20" cellSpacing="10">
                <thead>
                    <tr>
                        <th>Auditor Name</th>
                        <th>Audit Name</th>
                        <th>Audit Date</th>
                        <th>Status</th>
                        <th>Auditor Notes</th>
                        <th>Flagged I9 Forms</th>
                    </tr>
                </thead>
                <tbody>
                    {AuditorData.map((data) => (
                        <tr key={data.AuditID}>
                            <td>{data.auditor}</td>
                            <td>{data.audit_name}</td>
                            <td>{data.audit_date_string}</td>
                            <td>{data.status}</td>
                            <td>{data.auditor_notes}</td>
                            <td>{data.flagged_I9_forms}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </center>
            <br />
        </div>
    );
};

export default AuditorRecords;
