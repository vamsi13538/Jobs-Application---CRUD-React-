import React from 'react'
import { useState } from 'react'
import {FaMapMarker} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const JobListing = ({job}) => {
    const [showFullDesc, setShowFullDesc] = useState(false);
    let description = job.description;
    if(!showFullDesc){
        description = description.substring(0, 120) +'...';
    }
  return (
    <div className='jobListingCard'>
                    <p className="jobType">{job.type}</p>
                    <h3 className="jobRole">{job.role}</h3>
                    <p className="jobInfo">{description}<a  onClick={() => setShowFullDesc((prevState) => !prevState)} className='showMoreJobInfo'>{showFullDesc ? 'Show Less' : 'Show More'}</a></p>
                    <p className="jobSalary">{job.salary} / Year</p>
                    <div className='jobFooter'>
                      <p className="jobLocation"><FaMapMarker className='jobLocationIcon' /> {job.location}</p>
                        <button className="jobReadMore"><Link to={`/jobs/${job.id}`}>Read More</Link></button>
                    </div >
                </div>
  )
}

export default JobListing