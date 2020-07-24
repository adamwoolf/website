import React, { Component } from 'react'
import Carousel from 'react-images';
import {Row, Col } from 'react-bootstrap'
import { FaInstagram } from 'react-icons/fa';



const photos = [
    {title:'', source:'/imgs/1.jpg'},
    {title:'', source:'/imgs/2.jpg'},
    {title:'', source:'/imgs/3.jpg'},
    {title:'', source:'/imgs/5.jpg'},
    {title:'', source:'/imgs/6.jpg'},
    {title:'', source:'/imgs/7.jpg'},
    {title:'', source:'/imgs/8.jpg'},
    {title:'', source:'/imgs/9.jpg'},
    {title:'', source:'/imgs/10.jpg'},
    {title:'', source:'/imgs/11.jpg'},
    {title:'', source:'/imgs/12.jpg'},
    {title:'', source:'/imgs/13.jpg'},
    {title:'', source:'/imgs/14.jpg'},
    {title:'', source:'/imgs/15.jpg'},
    {title:'', source:'/imgs/16.jpg'},
    {title:'', source:'/imgs/17.jpg'},
    {title:'', source:'/imgs/19.jpg'},
    {title:'', source:'/imgs/20.jpg'},
    {title:'', source:'/imgs/21.jpg'},
    {title:'', source:'/imgs/22.jpg'},
    {title:'', source:'/imgs/23.jpg'},
    {title:'', source:'/imgs/24.jpg'},
    {title:'', source:'/imgs/25.jpg'},
    {title:'', source:'/imgs/26.jpg'},
    {title:'', source:'/imgs/27.jpg'},
    {title:'', source:'/imgs/28.jpg'},
    {title:'', source:'/imgs/29.jpg'},
    {title:'', source:'/imgs/30.jpg'},
    {title:'', source:'/imgs/31.jpg'},
    {title:'', source:'/imgs/32.jpg'},
    {title:'', source:'/imgs/33.jpg'},
    {title:'', source:'/imgs/34.jpg'},
]

const style={
    width: '100%'
}

const headerStyle={
    textAlign: 'center',
    paddingTop: '4%'
}

class Gallery extends Component {
    render(){
    return <div>
        <div style={headerStyle}>
        <h4>Selected Photos</h4>
        <p>More on <a target="_blank" href='https://www.instagram.com/adam.woolf/' >
        <FaInstagram size={44} /></a>
        Instagram </p>
        </div>

        <Row>
            {photos.map((photo) => 
        <Col md={4}><img style={style} src={photo.source}/></Col>
        )}

        </Row>
    </div>
}
}

export default Gallery