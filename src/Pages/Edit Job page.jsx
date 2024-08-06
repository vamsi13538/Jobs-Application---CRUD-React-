import React, { useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditJobPage = ({ updateJobSubmit }) => {
    const job = useLoaderData();
    const [role, setRole] = useState(job.role || '');
    const [type, setType] = useState(job.type || '');
    const [location, setLocation] = useState(job.location || '');
    const [description, setDescription] = useState(job.description || '');
    const [salary, setSalary] = useState(job.salary || '');
    const [companyName, setCompanyName] = useState(job.company.name || '');
    const [companyDescription, setCompanyDescription] = useState(job.company.description || '');
    const [contactEmail, setContactEmail] = useState(job.company.contactEmail || '');
    const [contactPhone, setContactPhone] = useState(job.company.contactPhone || '');

    const navigate = useNavigate();
    const { id } = useParams();

    const submitForm = (e) => {
        e.preventDefault();

        const updatedJob = {
            id,
            role,
            type,
            location,
            salary,
            description,
            company: {
                name: companyName,
                description: companyDescription,
                contactEmail,
                contactPhone,
            }
        };
        
        updateJobSubmit(updatedJob);
        toast.success('Job Updated Successfully!');
        return navigate(`/jobs/${id}`);
    };

    return (
        <div className="addJobContainer">
            <form onSubmit={submitForm}>
                <h2>Update Job</h2>
                <label htmlFor="jobTypeDropdown" className="addJobType">
                    Job Type
                </label>
                <div>
                    <select 
                        id="jobTypeDropdown" 
                        name="jobTypeDropdown" 
                        required 
                        value={type} 
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Internship">Internship</option>
                    </select>
                </div>
                <label htmlFor="jobListingName" className="jobListingName">
                    Job Listing Name
                </label>
                <div>
                    <input
                        type="text"
                        id="jobListingName"
                        placeholder="e.g., Beautiful Apartment in Miami"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                </div>
                <label htmlFor="addJobDescription" className="description">
                    Description
                </label>
                <div>
                    <textarea
                        cols={30}
                        rows={4}
                        id="addJobDescription"
                        placeholder="Add any job duties, expectations, requirements, etc."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <label htmlFor="addJobSalaryDropdown" className="addJobSalary">
                    Salary
                </label>
                <div>
                    <select 
                        id="addJobSalaryDropdown" 
                        value={salary} 
                        onChange={(e) => setSalary(e.target.value)}
                    >
                        <option value="above50K">above $50K</option>
                        <option value="under50K">under $50K</option>
                    </select>
                </div>
                <label htmlFor="addJobLocation" className="addJobLocation">
                    Location
                </label>
                <div>
                    <input 
                        type="text" 
                        id="addJobLocation" 
                        placeholder="Company Location" 
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <p className="addJobCompanyInfoHeader">Company Info</p>
                <label htmlFor="addJobCompanyName" className="addJobCompanyName">
                    Company Name
                </label>
                <div>
                    <input 
                        type="text" 
                        id="addJobCompanyName" 
                        placeholder="Company Name" 
                        value={companyName} 
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                </div>
                <label htmlFor="addJobCompanyDescription" className="addJobCompanyDescription">
                    Company Description
                </label>
                <div>
                    <textarea
                        cols={30}
                        rows={4}
                        id="addJobCompanyDescription"
                        placeholder="What does your company do?"
                        value={companyDescription}
                        onChange={(e) => setCompanyDescription(e.target.value)}
                    ></textarea>
                </div>
                <label htmlFor="addJobContactEmail" className="addJobContactEmail">
                    Contact Email
                </label>
                <div>
                    <input
                        type="email"
                        id="addJobContactEmail"
                        placeholder="Enter email address here..."
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                    />
                </div>
                <label htmlFor="addJobContactPhone" className="addJobContactPhone">
                    Contact Phone
                </label>
                <div>
                    <input
                        type="text"
                        id="addJobContactPhone"
                        placeholder="Enter phone number here..."
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                    />
                </div>
                <button type="submit" className="addJobBtn">
                    <a>Update Job</a>
                </button>
            </form>
        </div>
    );
};

export default EditJobPage;
