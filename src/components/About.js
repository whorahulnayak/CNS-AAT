import React from 'react'
import { Card, Button } from 'react-bootstrap'
import rahul from '../assets/rahul.jpg'
import nava from '../assets/navaneeth.jpg'
function About() {
  return (
    <div className='container-new text-center'>
      <h1>About US</h1>
      <p>
        This website is made with ReactJS by Rahul & Navaneeth
      </p>
      <div className='about-row'>
        <div className='rand'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={rahul} />
            <Card.Body>
              <Card.Title>Rahul Anil Nayak</Card.Title>
              <Card.Text>Loves playing video games
                Passionate Web Developer -  and coding.
                Spends free time learning new technologies & watching football.
              </Card.Text>

              <a href="https://www.linkedin.com/in/rahul-anil-nayak-039436166/" target="_blank" rel='noreferrer'>
              <Button
                variant="primary">
                Check Our Linkedin
              </Button>
              </a>

            </Card.Body>
          </Card>
        </div>
        <div className='rand'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={nava} />
            <Card.Body>
              <Card.Title>Navaneeth S</Card.Title>
              <Card.Text>
                Designer - Loves to design , create and loves playing video games 
                Spends free time watching stranger things conspiracy theories.
              </Card.Text>
              {/* add link to button */}
              <a href="https://www.linkedin.com/in/itsnavaneeth/" target="_blank" rel='noreferrer'>
              <Button
                variant="primary">
                Check Our Linkedin
              </Button>
              </a>

            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default About