import React from 'react'
import { Card } from "react-bootstrap";

const ContactItem = (props) => {
    const { handler } = props
    return (
        <div>   <Card style={{ width: '15rem', height: 'auto' }}  >
            <Card.Img variant="top" src={handler.imgurl[0]} />
            <Card.Body>
                <Card.Title>Owner Details</Card.Title>
                <Card.Text>
                    <p>{handler.name}</p>
                    <p>{handler.email}</p>
                </Card.Text>

{handler.stage===0? <button className='btn btn-dark m-2'>Pending</button> : handler.stage===10 ? <button className='btn btn-success m-2'>Aceepted</button> :<button className='btn btn-danger m-2'>Rejected</button>}
            </Card.Body>
        </Card></div>
    )
}

export default ContactItem