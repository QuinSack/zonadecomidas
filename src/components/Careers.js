import React from 'react'
import BackToHomeButton from './BackToHomeButton'
import Navbar from './Navbar'
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap'
import team1 from '../images/team1.jpg'
import team2 from '../images/team2.jpg'
import team3 from '../images/team3.jpg'
import team4 from '../images/team4.jpg'
import inspire1 from '../images/ava-1.jpg'
import inspire2 from '../images/ava-2.jpg'
import inspire3 from '../images/ava-3.jpg'
import inspire4 from '../images/ava-4.jpg'

const Careers = () => {
  const teamitemcard = [
    {
        image: team1,
        name: "Kingsley Aguzey",
        description: "Experienced chef in the tea and coffee industry. One of the very best in the city",
        role: "Coffee Chef"
    },
    {
        image: team2,
        name: "Esther Arthur",
        description: "Worked as a janitor with the company for 6+ years now. No one is better at her role",
        role: "Chief Janitor"
    },
    {
        image: team3,
        name: "Sydney Dapilah",
        description: "Highly motivated and committed to his job as a dispatch rider. Always at your beck and call",
        role: "Dispatch Rider"
    },
    {
        image: team4,
        name: "Leticia Oduro",
        description: "Widely known as the most caring and sweetest person in the company. Absolutel suits her role as a nurse",
        role: "Company Nurse"
    }
  ]

const inspiringstories = [
  {
    image: inspire1,
    name: "Kingsley Aguzey",
    description: "Experienced chef in the tea and coffee industry. One of the very best in the city",
    role: "Coffee Chef"
  },
  {
    image: inspire2,
    name: "Kingsley Aguzey",
    description: "Experienced chef in the tea and coffee industry. One of the very best in the city",
    role: "Coffee Chef"
  },
  {
    image: inspire3,
    name: "Kingsley Aguzey",
    description: "Experienced chef in the tea and coffee industry. One of the very best in the city",
    role: "Coffee Chef"
  },
  {
    image: inspire4,
    name: "Kingsley Aguzey",
    description: "Experienced chef in the tea and coffee industry. One of the very best in the city",
    role: "Coffee Chef"
  }
]
  
  return (
    <>
      <Navbar />
      <Container  className='careercont'>
        <Row className='meetteam'>
          <h3 className='text-center'>Meet our team</h3>
          {
            teamitemcard.map((item) => {
                return <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                  <Card.Subtitle>
                    {item.role}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            })
          }
        </Row>
        <Row style={{margin: '70px', justifyContent: 'space-evenly', gap: '1px', padding:'0px'}}>
          <h3 className='text-center'><strong>Inspiring Stories</strong></h3>
          {
            inspiringstories.map((item) => {
                return <Card style={{ width: '18rem', padding: '0px', marginBottom: '10px' }} className=''>
                <Card.Img variant="top" src={item.image} style={{objectFit: 'cover'}} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                  <Card.Subtitle>
                    {item.role}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            })
          }
        </Row>
      </Container>
      <div>
        <h3>Inspiring Stories</h3>
        <h3>Available Positions</h3>
        <BackToHomeButton />
      </div>
    </> 
  )
}

export default Careers