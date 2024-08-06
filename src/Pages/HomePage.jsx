import React from 'react'
import Hero from '../Components/Hero'
import HomeCards from '../Components/Home Cards'
import Joblistings from '../Components/Job Listings'
import ViewAllJobs from '../Components/View All Jobs'

const HomePage = () => {
  return (
    <>
    <Hero />
    <HomeCards />
    <Joblistings  isHome={true}/>
    <ViewAllJobs />
    </>
  )
}

export default HomePage