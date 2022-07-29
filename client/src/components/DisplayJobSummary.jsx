import React from 'react';
import { Card, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DisplayJobSummary = (props) => {
    const {job} = props;

  return (
    <Card className="m-3 ">
        <Card.Header as="h3">{job.title} at {job.companyName}</Card.Header>
        <Card.Body className="border border-secondary m-1">
            <Row>Title: {job.title}</Row>
            <Row>Company: {job.companyName}</Row>
            <Row>Location: {job.location}</Row>
            <Row>Source: {job.source.slice(0,75)}...</Row>            
            <Row>Description: {job.description.slice(0,200)}...
            </Row>
        </Card.Body>
    </Card>
  )
}

export default DisplayJobSummary