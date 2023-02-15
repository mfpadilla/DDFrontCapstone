import { Table } from 'antd';
import { Link } from "react-router-dom";
import React from "react";

const columns = [
    {
        title: 'Form ID',
        dataIndex: 'formid',
        key: 'formid',
        onSelect: 
            <Link to='/form'>1</Link>
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Section 2',
        dataIndex: 'section',
        key: 'section',
        onSelect: 
                <Link to='/reviewerform'>Start</Link>
    },
];
const data = [
    {
        formid: <Link to='/form'>1</Link>,
        name: 'Rodney Johnson',
        date: '2/5/2023',
        section: <Link to='/reviewerform'>Start</Link>
    },
    {
        formid: <Link to='/sform'>2</Link>,
        name: 'Kendal Pazo',
        date: '2/5/2023',
        section: <Link to='/reviewerform'>Start</Link>
    },
    {
        formid: <Link to='/tform'>3</Link>,
        name: 'Michael Kim',
        date: '2/5/2023',
        section: <Link to='/reviewerform'>Start</Link>
    },
];
class ReviewerSummary extends React.Component {
    render() {
        return (
<Table columns={columns} dataSource={data} />
        );
    }
}

export default ReviewerSummary;
