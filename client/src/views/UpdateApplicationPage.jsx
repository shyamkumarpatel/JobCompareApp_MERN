import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/NavigationBar';
import DisplayJobSummary from '../components/DisplayJobSummary';

const UpdateApplicationPage = () => {
    const {id} = useParams();
    const [applicationStatus, setApplicationStatus] = useState();
    const [applicationNotes, setApplicationNotes] = useState();
    const [error, setError] = useState({});
    const [job, setJob] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/jobs/${id}`)
            .then(res =>{
                setJob(res.data);
                setApplicationStatus(res.data.applicationStatus);
                setApplicationNotes(res.data.applicationNotes);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("applicationStatus", applicationStatus);
        // console.log("applicationNotes", applicationNotes);
        axios.put(`http://localhost:8000/api/jobs/update/${id}`, {applicationStatus, applicationNotes})
        .then(res => 
            {
                console.log("res", res);
            })
        .catch(err => 
            {
                console.log(err);
                setError(err.response.data.errors);
            });
    }
  return (
    <>
        <NavigationBar/>
        <Card className="m-3 ">
            <Card.Header as="h1">
                <Row>
                    <Col>
                        Add Information About a Job Posting
                    </Col>
                    <Col className="d-flex justify-content-md-end">
                        <Link to={`/jobs/${id}`}>View Full Job Posting Details</Link>
                    </Col>
                </Row>
            </Card.Header>
        <Card.Body className="border border-secondary m-1">
            <Card.Title>Current Application Status: {applicationStatus}</Card.Title>
            <Form onSubmit={handleSubmit}>
                <Row>
                        <Form.Group className="mb-3" controlId="applicationStatus">
                            <Form.Label>Application Status: *</Form.Label>
                            <Form.Select onChange={(e) => setApplicationStatus(e.target.value)}>
                                <option>Started Drafting Application</option>
                                <option>Submitted Application</option>
                                <option>No Response / Rejected</option>
                                <option>Waiting Response</option>
                                <option>Preping for Interview</option>
                                <option>Waiting for response, Post Interview</option>
                                <option>Waiting for Offer</option>
                                <option>Accepted Offer</option>
                                <option>Declined Offer</option>
                            </Form.Select>
                            {error.hasOwnProperty("applicationStatus")&& <Form.Text>{error.applicationStatus.message}</Form.Text>}
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="applicationNotes">
                            <Form.Label>Application Notes: *</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e) => setApplicationNotes(e.target.value)}   value={applicationNotes}/>
                            {error.hasOwnProperty("applicationNotes")&& <Form.Text>{error.applicationNotes.message}</Form.Text>}
                        </Form.Group>
                    </Row>
                    <Row><Button variant="success" size="lg" type="submit">Update</Button></Row>
                </Form>
                {job ? <DisplayJobSummary job={job}/> : <p>Loading...</p>}
            </Card.Body>
        </Card>
    </>
  )
}

export default UpdateApplicationPage