import React, { useState } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

export default function GitJobList({ job }) {
    const [open, setOpen] = useState(false)

    return (
        <Card className="mb-4 mt-4">
            <Card.Body>

                <div className="d-flex justify-content-between">
                    <div>
                        <img className="mr-5 mb-2" height="60" alt={job.company} src={job.company_logo} />
                        <Badge variant="primary" className="mr-3 mb-7">{job.type}</Badge>
                        <Badge variant="info" className="mr-3 mb-7">{job.location}</Badge>

                        <Card.Title>
                            {job.title} - <span className="font-weight-light">{job.company}</span>
                        </Card.Title>

                        <div style={{ wordBreak: 'break-all' }}>
                            <ReactMarkdown source={job.how_to_apply} />
                        </div>

                    </div>
                    <Card.Subtitle className="font-weight-light">
                        {new Date(job.created_at).toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' })}
                    </Card.Subtitle>
                </div>

                <Card.Text>
                    <Button onClick={() => setOpen(prevOpen => !prevOpen)} variant="info"> {open ? '⬆⬆⬆' : 'More⬇⬇⬇'}</Button>
                </Card.Text>
                <Collapse in={open}>
                    <div className="mt-4 justify-content-center" style={{ wordBreak: 'break-all' }}>
                        <ReactMarkdown source={job.description} />
                    </div>
                </Collapse>
            </Card.Body>

        </Card>
    )
}
