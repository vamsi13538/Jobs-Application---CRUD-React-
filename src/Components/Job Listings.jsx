import React from 'react'
import { useState, useEffect } from 'react'
import JobListing from '../Components/Job Listing'
import Spinner from './Loading Spinner'


const JobListings = ({isHome = false}) => {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {

            const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';

            try{
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);
            }
            catch(error){
                console.log('Error occured '+error);
            }
            finally{
                setLoading(false);
            }
        }

        fetchJobs();

    }, [])

  return (
    <section className="jobListingCotainer">
        <div className="jobHeader">
            <h1>{isHome ? 'Recent Jobs' : 'Browse Jobs'}</h1>
        </div>
        <div className='jobListingMainCardContainer'>
            {loading ? 
            (
                <Spinner loading={loading} />
                // <h1>Loading...</h1>
            ) : 
            (
            <>
                {jobs.map((job) => (
                    <JobListing key={job.id} job={job} />
                ))}
            </>
            )}
        </div>
    </section>
  )
}

export default JobListings