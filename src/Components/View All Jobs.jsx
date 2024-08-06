import React from 'react'
import {Link} from 'react-router-dom'

const ViewAllJobsButton = () => {
  return (
    <div className='viewAllJobsBtn'>
        <button><Link to="/Jobs">View All Jobs</Link></button>
    </div>
  )
}

export default ViewAllJobsButton