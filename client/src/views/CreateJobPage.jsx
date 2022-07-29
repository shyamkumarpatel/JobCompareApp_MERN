import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/NavigationBar';

const CreateJobPage = () => {
    const [title, setTitle] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [source, setSource] = useState("");
    const [error, setError] = useState({});

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted","title=", title);
        axios.post(`http://localhost:8000/api/jobs/new`, {title, companyName, description, location, source})
        .then(res => 
            {
                navigate(`/`);
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
                    <Link to={`/`}>Back to home</Link>
                </Col>
            </Row>
        </Card.Header>
        <Card.Body className="border border-secondary m-1">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Job Title: *</Form.Label>
                            <Form.Control type="text" size="lg" onChange={(e) => setTitle(e.target.value)} value={title}/>
                            {error.hasOwnProperty("title")&& <Form.Text>{error.title.message}</Form.Text>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="companyName">
                            <Form.Label>Company Name: *</Form.Label>
                            <Form.Control type="text" size="lg" onChange={(e) => setCompanyName(e.target.value)} value={companyName}/>
                            {error.hasOwnProperty("companyName")&& <Form.Text>{error.companyName.message}</Form.Text>}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="location">
                            <Form.Label>Location: *</Form.Label>
                            <Form.Control type="location" size="lg" onChange={(e) => setLocation(e.target.value)} value={location}/>
                            {error.hasOwnProperty("location")&& <Form.Text>{error.location.message}</Form.Text>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="source">
                            <Form.Label>Source:  *</Form.Label>
                            <Form.Control type="text" size="lg" onChange={(e) => setSource(e.target.value)} value={source}/>
                        {error.hasOwnProperty("source")&& <Form.Text>{error.source.message}</Form.Text>}
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Job Description: *</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e) => setDescription(e.target.value)} />
                            {error.hasOwnProperty("description")&& <Form.Text>{error.description.message}</Form.Text>}
                        </Form.Group>
                    </Row>
                    <Row><Button variant="primary" size="lg" type="submit">Add Job</Button></Row>
                </Form>
            </Card.Body>
        </Card>
    </>
  )
}

export default CreateJobPage