import React from 'react'
import { Form, Col } from 'react-bootstrap'

export default function SearchForm({ params, onParamChange }) {
    return (
        <div>
            <Form className="mb-4">
                <Form.Row className="align-items-end">
                    <Form.Group as={Col} >
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control onChange={onParamChange} value={params.title} name="title" type="text" />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Job description</Form.Label>
                        <Form.Control onChange={onParamChange} value={params.description} name="description" type="text" />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>location</Form.Label>
                        <Form.Control onChange={onParamChange} value={params.location} name="location" type="text" />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Company name</Form.Label>
                        <Form.Control onChange={onParamChange} value={params.company} name="company" type="text" />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Job type</Form.Label>
                        <Form.Control onChange={onParamChange} value={params.full_time} name="full_time" type="text" />
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>
    )
}
