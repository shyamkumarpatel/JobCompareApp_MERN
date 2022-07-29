import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams, Link} from 'react-router-dom';
import { Card, Table, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const DisplayJobCard = () => {
    const {id} = useParams();
    const [job, setJob] = useState();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/jobs/${id}`)
            .then(res => setJob(res.data))
            .catch(err => console.log(err));
    }, [id]);
  return (
    <div>
    {
        job ?
            <Card className="m-3 ">
                <Card.Header as="h1">
                    <Row>
                        <Col>Job Details: </Col>
                        <Col className="d-flex justify-content-md-end">
                            <Link to={`/`}>Back to home</Link>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className="border border-secondary m-1">
                        <div>
                        <Table striped bordered hover className="text-lg-center align-middle">
                                <tbody>
                                <tr>
                                    <th>Title</th>
                                    <td>{job.title}</td>
                                </tr>
                                <tr>
                                    <th>Company</th>
                                    <td>{job.companyName}</td>
                                </tr>
                                <tr>
                                    <th>Location</th>
                                    <td>{job.location}</td>
                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <td>
                                            {job.description}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Source</th>
                                    <td>{job.source}</td>
                                </tr>
                                </tbody>
                            </Table>
                            {/* {pets.map((pet, i) =>
                                    <tr key={i}>
                                        <td>{pet.name}</td>
                                        <td>{pet.type}</td>
                                        <td>
                                            <Link to={`/pets/${pet._id}`}>details</Link> | <Link to={`/pets/${pet._id}/edit`}>edit</Link>
                                        </td>
                                    </tr>
                                )} */}
                            {/* <p>Description: {product.description}</p>
                            <p><Link to={`/`}>Home</Link> | <Link to={`/${product._id}/edit`}>Edit</Link> | <button type="button" onClick={handleDelete}>Delete</button></p> */}
                        </div>
                </Card.Body>
            </Card>
            : <h1> Loading... or Error could have occured</h1>
            }
    </div>
  )
}

export default DisplayJobCard