import { Steps } from "antd";
import React, { Component } from "react";


class EmployeeStatus extends Component {
    render() {
        return (
            <Steps
                size="small"
                current={1}
                items={[
                    {
                        title: 'Not Started',
                    },
                    {
                        title: 'In Progress',
                    },
                    {
                        title: 'Submitted',
                    },
                ]}
            />
        );
    }
}

export default EmployeeStatus;
