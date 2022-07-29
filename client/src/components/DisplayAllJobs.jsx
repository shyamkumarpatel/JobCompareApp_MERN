import React from 'react';
import DataTable from 'react-data-table-component';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayJobSummary from './DisplayJobSummary';
import NavigationBar from './NavigationBar';

const DisplayAllJobs = (props) => {
    const {jobs} = props;
    const ExpandedComponent = ({ data }) => <pre><DisplayJobSummary job={data}/></pre>;
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
            selector: row => <>
                                <Link to={`/jobs/${row._id}`}>View All Details</Link>{' '}
                                | <Link to={`/jobs/compare/${row._id}`}>Compare This Job</Link>{' '}
                                |  {row.applicationStatus ? <Link to={`/jobs/app/${row._id}`}>Update Application</Link> : <Link to={`/jobs/app/${row._id}`}>Start tracking Application</Link>}
                            </>
        },
    ];
  return (
    <>
    <NavigationBar/>
    <div className="m-3">
        <DataTable
            title="Job Postings"
            columns={columns}
            data={jobs}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
        />
    </div>
    </>
  )
}

export default DisplayAllJobs