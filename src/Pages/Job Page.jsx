import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../Components/Loading Spinner';
import {FaMapMarker, FaArrowCircleLeft, FaBuilding, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const JobPage = ({deleteJob}) => {

    const {id} = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const onDeleteClick = (jobId) => {
        const confirm = window.confirm('Are you sure you want to delete this job listing ?');

        if(!confirm) return;

        deleteJob(jobId);

        toast.success('Job Deleted Successfully!');

        navigate('/jobs');
    }

    useEffect(() => {
        const fetchJob = async () => {
            try{
                const res = await fetch(`/api/jobs/${id}`);
                const data = await res.json();
                setJob(data);
            }catch(error){
                console.log("Error occured : ",error);
            }finally{
                setLoading(false);
            }
        }

        fetchJob();
    }, [])

  return (
    loading ? <Spinner  loading={loading}/> :
    <>
    <div className="backToJobContainer">
        <p><Link to="/jobs">&nbsp;<FaArrowCircleLeft className='faArrowLeft' />  Back to job Listings</Link></p>
    </div>
    <div className="jobInfoMainContainer">
        <div className="jobInfoLeftContainer">
            <div className='jobInfoBlock'>
                <div className="jobTitleInfo">
                    <p className="jobRole"><FaUser style={{color: 'black'}} /> {job.type}</p>
                    <h2 className="jobTitle">{job.role}</h2>
                    <p className="jobLocationInfo"><FaMapMarker className='jobLocationMarker' /> Miami, FL</p>
                </div>
                <div className="jobDescriptionInfo">
                    <p className="jobDescriptionTitle">Job Description</p>
                    <p className="jobDescription">{job.description}</p>
                    <p className="jobSalaryTitle">Salary</p>
                <p className="jobSalaryNumber">{job.salary}/Year</p>
                </div>
            </div>
        </div>
        <div className="jobInfoRightContainer">
            <div className="jobRightBlock">
                <div className="companyInfoContainer">
                    <p className="companyHeader">Company Info</p>
                    <p className="companyName"><FaBuilding className='faBuildingIcon' /> {job.company.name}</p>
                    <p className="companyDescription">{job.company.description}</p>
                    <p className="companyEmailHeader">Contact Email:</p>
                    <p className="companyEmail">{job.company.contactEmail}</p>
                    <p className="companyContactHeader">Contact Phone:</p>
                    <p className="companyContactPhone">{job.company.contactPhone}</p>
                </div>
            </div>
            <div className="manageJobContainer">
                <p className="manageJobHeader">Manage Job</p>
                <button className="editJobBtn"><Link to={`/edit-job/${job.id}`}>Edit Job</Link></button>
                <button onClick={() => onDeleteClick(job.id)} className="deleteJobBtn"><Link>Delete Job</Link></button>
            </div>
        </div>
    </div>
    </> 
  )
}

export default JobPage