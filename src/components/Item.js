import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'

const Item = (props) => {
    const item = props.item
    return <>
    <Col md={4}>
    <div className="item">
        <h6>{item.name}</h6>
        <p>{item.description}</p>
        <img src={item.image} alt="test"/>
<p>€{item.price}</p>
        <a className='btn btn-dark'href='mailto:mail@adamwoolf.com'>Order Now</a>
       

        </div>
        </Col>
        </>
}

export default Item