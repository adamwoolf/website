import React from 'react';
import { FaCode, FaMusic, FaCameraRetro } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap'

const style = {
    textDecoration: 'none'
}

const Features = () => {
    return <div className="choices">
        <Row>
            <Col md={4}>
        <Link style={style} to='/webdev'>
        <div className="choice">
        <FaCode size={65} className="icon"/>
        <h5>Web Developer</h5>
        <p>Front End, JAMstack, Design</p>
        </div>
        </Link>
        </Col>
        <Col md={4}>
        <Link style={style} to='/musician'>
        <div className="choice main-box">
        <FaMusic size={65} className="icon"/>
        <h5>Musician</h5>
        <p>Performing, Teaching, Recordings</p>
        </div>
        </Link>
        </Col>
        <Col md={4}>
        <Link style={style} to='/photos'>
        <div className="choice">
        <FaCameraRetro size={65} className="icon"/>
        <h5>Photographs</h5>
        </div>
        </Link>
        </Col>
        </Row>
    </div>
}

export default Features