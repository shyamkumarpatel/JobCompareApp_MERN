import React from 'react';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import {Link} from 'react-router-dom';

import DisplayJobSummary from '../components/DisplayJobSummary';
import NavigationBar from '../components/NavigationBar';

const CompareSeclectionPage = () => {
    const {id} = useParams();
    const [jobs, setJobs] = useState([]);
    const [job, setJob] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/jobs/${id}`)
        .then(res => setJob(res.data))
        .catch(err => console.log(err));

        axios.get(`http://localhost:8000/api/jobs`)
            .then(res => setJobs(res.data.filter(i => i._id !== id)))
            .catch(err => console.log(err));
    }, [id]);

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
            selector: row => <><Link to={`/jobs/compare/${id}/${row._id}`}>Compare With This Job Posting</Link></>
        },
    ];
  return (
    <div>
        <NavigationBar/>
        <div className="m-3">
            {job ? <DisplayJobSummary job={job}/> : <p>Loading...</p>}
            {
                jobs ? 
                <DataTable
                    title="Choose a job posting entry for Comparison with above:"
                    columns={columns}
                    data={jobs}
                    expandableRows
                    expandableRowsComponent={ExpandedComponent}
                />
                :
                <p>Loading...</p>
            }
        </div>
    </div>
  )
}

export default CompareSeclectionPage