import React from 'react'
import {Row, Col} from 'react-bootstrap'
import ReactPlayer from "react-player"


const titleStyle={
    textAlign: 'center'
}
const Media = () => {
    return <>
        <h3 style={titleStyle}>Selected Recordings</h3>
        <Row>
            <Col md={3}><ReactPlayer
        url="https://soundcloud.com/adamwoolf/little-girl-blue-arranged"
        height="200px"
      />
    </Col>
            <Col md={3}><ReactPlayer
        url="https://soundcloud.com/adamwoolf/pavan-dolorosa"
        height="200px"
      /></Col>
            <Col md={3}><ReactPlayer
        url="https://soundcloud.com/adamwoolf/joris-moet-je-steeds-rinkinken"
        height="200px"
      /></Col>
            <Col md={3}><ReactPlayer
        url="https://soundcloud.com/adamwoolf/carioca-from-round-and-dances"
        height="200px"
      /></Col>
            <Col className='film' md={4}>        <iframe width="560" height="315" src="https://www.youtube.com/embed/m-BjnFrhBvY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</Col> 
            <Col className='film' md={4}>        <iframe width="560" height="315" src="https://www.youtube.com/embed/lNtb-ly1I_k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</Col> 
            <Col className='film' md={4}>        <iframe width="560" height="315" src="https://www.youtube.com/embed/QxtBWNec4Zw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</Col> 
            <Col className='film' md={4}>        <iframe width="560" height="315" src="https://www.youtube.com/embed/-2QEk6o82_w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</Col> 
            <Col className='film' md={4}><iframe width="560" height="315" src="https://www.youtube.com/embed/1Y0QrKFIDzY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
            <Col className='film' md={4}><iframe width="560" height="315" src="https://www.youtube.com/embed/iULVrd3M5V0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
        </Row>
        </>
}

export default Media