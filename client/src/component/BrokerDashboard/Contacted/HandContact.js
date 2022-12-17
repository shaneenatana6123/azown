import React,{useContext, useEffect} from 'react'
import { HandlerContext } from '../../../context/HandlerContext'
import ContactItem from './ContactItem'
import { Row , Col } from "react-bootstrap";
const HandContact = () => {
    const handlercontext = useContext(HandlerContext)
    const {handcondata,handcontact} = handlercontext
    useEffect(()=>{
handcontact()
    },[])
  return (
    <div>
        <Row xs={1} md={3} className="g-4">
        {handcondata && handcondata.map((handler)=>{
    return <>
    <Col>
    <ContactItem key={handcondata._id} handler = {handler} />
    </Col>
    
    </>
   
})}
        </Row>

    </div>
  )
}

export default HandContact