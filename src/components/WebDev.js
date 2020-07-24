import React from 'react'
import { Row, Col } from 'react-bootstrap'

const WebDev = () => {
    return  <div className='contents webdev'>
    <h4> Web Development</h4>
    <Row>
    <Col md={9}>
<p>Following a long career in the music industry, involving some part-time graphic design work and building various websites using a variety of technology, in 2019 I decided to focus my activities on full-time web development.</p>
<p>I started a business, <a href='https://www.webspinner.eu'>WebSpinner.eu</a>, developing custom websites for a range of people and organisations and quickly built an international client-base. I was pleased to discover that the more I learned, the more I wanted to know, and I now love working in an ever-changing environment, combining design asthetics with technology.</p>
<h5>The Tech</h5>
<p>First came HTML, soon combined with CSS, then it was Wordpress for me, which offers certain benefits for client sites. However, I was soon up to my elbows in Javascript and exploring the big Frameworks and Libraries, especially Angular and React. From React, I became interested in mobile app development.</p>
<p>Then I met the JAMstack, and it was goodbye Wordpress, (more or less, - there's a blog on that). Combining headless CMSs with fast front end frameworks to serve customers superfast and accessible websites.</p>
<p>That's the story so far... There's certainly lots more to come and it's exciting to see what will be next!</p>
<p>If you'd like to collaborate, or have enquiries about websites, please <a href='mailto:mail@adamwoolf.com'>drop me a line.</a></p>
<a className='button' href='https://www.webspinner.eu'>Check out my Portfolio</a>

    </Col>
<Col md={3} className='logos' >
    <img className='logo' src={'/imgs/logoReact.jpeg'}/>
    <img className='logo' src={'/imgs/logoAngular.png'}/>
    <img className='logo' src={'/imgs/logoJS.png'}/>
    <img className='logo' src={'/imgs/logoHTML.png'}/>
    <img className='logo' src={'/imgs/logoCSS.png'}/>
</Col>

    </Row>

    </div>
}

export default WebDev