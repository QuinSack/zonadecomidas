import React from 'react'
import team1 from '../images/team1.jpg'
import team2 from '../images/team2.jpg'
import team3 from '../images/team3.jpg'
import team4 from '../images/team4.jpg'

const TeamItem = () => {
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

  return (
    <div>
        {
            teamitemcard.map((item) => {
                <Col className='teamcard'>
                    <div>
                        <section className='teamimage'>
                            <img src={item.image} />
                        </section>
                        <section className='teamname'>
                            <h3>{item.name}</h3>
                        </section>
                        <section className='teamdescription'>
                            <p>{item.description}</p>
                        </section>
                        <section>
                            <h3>{item.role}</h3>
                        </section>
                    </div>
                </Col>
            })
        }
    </div>
  )
}

export default TeamItem