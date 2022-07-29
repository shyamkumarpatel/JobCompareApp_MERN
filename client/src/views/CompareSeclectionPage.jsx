import React from 'react';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import {Link} from 'react-router-dom';

import DisplayJobSummary from '../components/DisplayJobSummary';

const CompareSeclectionPage = () => {
    const {id} = useParams();
    const [jobs, setJobs] = useState([]);

    const handleDelete = () =>{
        console.log("jobs =", jobs);
        
    }
    useEffect(() => {
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
    <div className="m-3">
        <button type="button" onClick={handleDelete}>Compare Job</button>
        <DataTable
            title="Job Postings"
            columns={columns}
            data={jobs}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
        />
    </div>
  )
}

export default CompareSeclectionPage