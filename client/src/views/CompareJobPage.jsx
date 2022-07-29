import React from 'react';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CompareJobPage = () => {
    const {id, id2} = useParams();
    const [job, setJob] = useState();
    const [job2, setJob2] = useState();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/jobs/${id}`)
            .then(res => setJob(res.data))
            .catch(err => console.log(err));
        
        axios.get(`http://localhost:8000/api/jobs/${id2}`)
        .then(res => setJob2(res.data))
        .catch(err => console.log(err));
    }, [id, id2]);

  return (
    <div>
        { job && job2 ?
        <Table bordered hover className="text-lg-center align-middle m-2">
            <thead  className="table-striped">      
                <tr>
                    <th scope="col">Job ID:</th>
                    <th scope="col">{job._id}</th>
                    <th scope="col">{job2._id}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Title</th>
                    <td>{job.title}</td>
                    <td>{job2.title}</td>
                </tr>
                <tr>
                    <th scope="row">Company</th>
                    <td>{job.companyName}</td>
                    <td>{job2.companyName}</td>
                </tr>
                <tr>
                    <th scope="row">Location</th>
                    <td>{job.location}</td>
                    <td>{job2.location}</td>
                </tr>
                <tr>
                    <th scope="row">Description</th>
                    <td>{job.description}</td>
                    <td>{job2.description}</td>
                </tr>
                <tr>
                    <th scope="row">Source</th>
                    <td>{job.source}</td>
                    <td>{job2.source}</td>
                </tr>
            </tbody>
        </Table>
        : <p>Loading details for both jobs, please wait a bit before trying again.</p>
        }
    </div>
  )
}

export default CompareJobPage