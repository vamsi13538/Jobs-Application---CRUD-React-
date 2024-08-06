import React from 'react'
import {Link} from 'react-router-dom'
import Card from './Card'

const HomeCards = ({firstCardTitle="Developers", secondCardTitle="Employers"}) => {
  return (
    <section className="homeCardsContainer">
        <Card bgClr='whitesmoke'>
            <h3>For {firstCardTitle}</h3>
            <p>Browse our React jobs and start your career today</p>
            <button style={{backgroundColor: 'black', color: 'white'}}><Link to='/jobs' className='targetLink'>Browse Jobs</Link></button>
        </Card>
        <Card bgClr='lightsteelblue'>
            <h3>For {secondCardTitle}</h3>
            <p>List your job to find the perfect developer for the role</p>
            <button style={{backgroundColor: 'blueviolet', color: 'white'}}><Link to='/add-job' className='targetLink'>Add Jobs</Link></button>
        </Card>
    </section>
  )
}

export default HomeCards