import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './JobApplicationForm.css';

const JobApplicationForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [showRelevantExperience, setShowRelevantExperience] = useState(false);
  const [showPortfolioURL, setShowPortfolioURL] = useState(false);
  const [showManagementExperience, setShowManagementExperience] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  
  const position = watch('position');

  useEffect(() => {
    setShowRelevantExperience(position === 'Developer' || position === 'Designer');
    setShowPortfolioURL(position === 'Designer');
    setShowManagementExperience(position === 'Manager');
  }, [position]);

  const onSubmit = data => {
    setSubmittedData(data);
    console.log(data);
  };

  return (
    <div className="wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* name */}
            <div className="input-field">
              <label>Full Name</label>
              <input type="text" placeholder='Sumit Kumar' {...register('fullName', { required: true })} />
              {errors.fullName && <p className="error">This field is required</p>}
            </div>

            {/* email */}
            <div className="input-field">
              <label>Email</label>
              <input type="email" placeholder='sumit1234@gmail.com' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
              {errors.email && <p className="error">Please enter a valid email</p>}
            </div>

            {/* phone number */}
            <div className="input-field">
              <label>Phone Number</label>
              <input type="number" placeholder='1234567890' {...register('phoneNumber', { required: true })} />
              {errors.phoneNumber && <p className="error">This field is required</p>}
            </div>

            {/* position applying for */}
            <div className="input-field">
              <label>Applying for Position</label>
              <select {...register('position', { required: true })}>
                  <option value="">Select...</option>
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Manager">Manager</option>
              </select>
              {errors.position && <p className="error">This field is required</p>}
            </div>

            {showRelevantExperience && (
            <div className="input-field">
                <label>Relevant Experience (years)</label>
                <input type="number" placeholder='e.g. 1' {...register('relevantExperience', { required: true, min: 1 })} />
                {errors.relevantExperience && <p className="error">Please enter a number greater than 0</p>}
            </div>
            )}
            {showPortfolioURL && (
            <div className="input-field">
                <label>Portfolio URL</label>
                <input type="url" placeholder='https://sumit-portfolio-gamma.vercel.app/' {...register('portfolioURL', { required: true, pattern: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/ })} />
                {errors.portfolioURL && <p className="error">Please enter a valid URL</p>}
            </div>
            )}
            {showManagementExperience && (
            <div className="input-field">
                <label>Management Experience</label>
                <input type="text" placeholder='1.5 years' {...register('managementExperience', { required: true })} />
                {errors.managementExperience && <p className="error">This field is required</p>}
            </div>
            )}

            {/* addition skills */}
            <div className="input-field">
              <label>Additional Skills</label>
              <div>
                  <label>
                  <input type="checkbox" {...register('skills', { validate: value => value.length > 0 })} value="JavaScript" />
                  JavaScript
                  </label>
                  <label>
                  <input type="checkbox" {...register('skills', { validate: value => value.length > 0 })} value="CSS" />
                  CSS
                  </label>
                  <label>
                  <input type="checkbox" {...register('skills', { validate: value => value.length > 0 })} value="Python" />
                  Python
                  </label>
              </div>
              {errors.skills && <p className="error">At least one skill must be selected</p>}
            </div>

            {/* Preferred Interview Time */}
            <div className="input-field">
              <label>Preferred Interview Time</label>
              <input
                type="datetime-local"
                {...register('interviewTime', {
                  required: true,
                  validate: value => new Date(value) >= new Date() || 'Interview time must be in the future'
                })}
                // Ensure minimum date is set to the current date and time in the required format
                min={new Date().toISOString().slice(0, 16)} 
              />
              {errors.interviewTime && <p className="error">{errors.interviewTime.message || 'This field is required'}</p>}
            </div>

            <button type="submit">Submit</button>


            {submittedData && (
              <div className="summary">
                <h2 className='summary-head'>Form Submission Summary</h2>
                <p><span>Full Name:</span> {submittedData.fullName}</p>
                <p><span>Email:</span> {submittedData.email}</p>
                <p><span>Phone Number:</span> {submittedData.phoneNumber}</p>
                <p><span>Applying for Position:</span> {submittedData.position}</p>
                {submittedData.relevantExperience && <p><span>Relevant Experience:</span> {submittedData.relevantExperience} years</p>}
                {submittedData.portfolioURL && <p><span>Portfolio URL:</span> {submittedData.portfolioURL}</p>}
                {submittedData.managementExperience && <p><span>Management Experience:</span> {submittedData.managementExperience}</p>}
                <p><span>Additional Skills:</span> {submittedData.skills.join(', ')}</p>
                <p><span>Preferred Interview Time:</span> {submittedData.interviewTime}</p>
              </div>
            )}
        </form>

        

    </div>
  );
};

export default JobApplicationForm;
