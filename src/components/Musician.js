import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const Musician = () => {
    return <div>



    <div className='contents'>
        <h4>My Life in Music</h4>
        
        <Container fluid="md">
  <Row>
    <Col md={8}>
        <p>For many years I have enjoyed a full-time career as a performing musician working with the very best classical music ensembles, festivals and orchestras. I complemented this by teaching at world-leading 
            institutions around Europe. as professor of Historical Performance and Baroque Trombone at London's Royal Academy of Music,
            The Conservatoire of Utrecht, Royal Conservatoire of Brussels and the Conservatory of Amsterdam I am proud to have had a 
            part in the development of many fantastic musicians in today's classical music scene.
        </p>
        <p>As a performer, I played with top orchestras in the world of period-instrument performance, notably as first trombone
            with Sir John Eliot Gardiner's English Baroque Soloists, a member of His Majestys Sagbutts and Cornetts, and the Caecilia-Concert.
            Alongside this, I continued playing the modern instrument with London-based ensemble Mardi Brass and other groups.  My love of jazz and contemporary
            music led to the creation of new compositions and experimental projects.
        </p>
        <p>I recorded over 100 CDs and DVDs, among which I am proud to count two solo projects, marking the first recordings to feature
            the trombone as a solo instrument in music from the 16th and 17th centuries.
        </p>
        <p>Alongside my output of recordings, some of which are available via this website, I also published various books which focus on historical 
            performance practise on the trombone, also available here.
        </p>
        <p>I continue to work on more publications and to make music whenever possible, and continue teaching at the Brussels Conservatoire.</p>
    </Col>
    <Col md={4}><img className='portrait' src={'/imgs/trombone.jpg'} /></Col>
  </Row>
</Container>

        </div>
        </div>
}

export default Musician