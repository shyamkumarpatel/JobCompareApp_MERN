import React from 'react';
//import DisplayAllPets from '../components/DisplayAllPets';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import DisplayAllJobs from '../components/DisplayAllJobs';

const Dashboard = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/jobs`)
            .then(res => setJobs(res.data))
            .catch(err => console.log(err));
    }, []);

  return (
    <div>
        <DisplayAllJobs jobs={jobs}/>
    </div>
  )
}

export default Dashboard