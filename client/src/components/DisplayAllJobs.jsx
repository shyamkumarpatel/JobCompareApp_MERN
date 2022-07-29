import React from 'react';
import DataTable from 'react-data-table-component';

const DisplayAllJobs = (props) => {
    const {jobs} = props;
    
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Company Name',
            selector: row => row.companyName,
            sortable: true,
        },
        {
            name: 'Location',
            selector: row => row.location,
            sortable: true,
        },
        {
            name: 'Actions',
            selector: row => row._id
        },
    ];
  return (
    <div>
        <DataTable
            title="Job Postings"
            columns={columns}
            data={jobs}
        />
    </div>
  )
}

export default DisplayAllJobs