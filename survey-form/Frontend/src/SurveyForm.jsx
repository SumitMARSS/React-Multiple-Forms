
import React, { useContext, useState } from 'react';
import { SurveyContext } from './SurveyContext';
import './Survey.css';

const SurveyForm = () => {
  const { formData, additionalQuestions, errors, handleChange, validateForm } = useContext(SurveyContext);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form
      setSubmittedData(formData);
      console.log("Form data:", formData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Survey Form</h1>
        <div className="form-container">
          {/* name */}
          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <span>{errors.fullName}</span>}
          </div>
          {/* Email */}
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          {/* Survey Topic */}
          <div>
            <label>Survey Topic</label>
            <select name="surveyTopic" value={formData.surveyTopic} onChange={handleChange}>
              <option value="">Select Topic</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
            </select>
            {errors.surveyTopic && <span>{errors.surveyTopic}</span>}
          </div>

          {/* surveyTopic conditions */}
          {formData.surveyTopic === 'Technology' && (
            <div>
              <div>
                <label>Favorite Programming Language</label>
                <select
                  name="favoriteProgrammingLanguage"
                  value={formData.favoriteProgrammingLanguage}
                  onChange={handleChange}
                >
                  <option value="">Select Language</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="C">C</option>
                </select>
                {errors.favoriteProgrammingLanguage && <span>{errors.favoriteProgrammingLanguage}</span>}
              </div>

              <div>
                <label>Technology Experience</label>
                <select
                  name="technologyExperience"
                  value={formData.technologyExperience}
                  onChange={handleChange}
                >
                  <option value="">Select Experience</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
                {errors.technologyExperience && <span>{errors.technologyExperience}</span>}
              </div>
            </div>
          )}

          {formData.surveyTopic === 'Health' && (
            <div>
              <div>
                <label>Exercise Frequency</label>
                <select
                  name="exerciseFrequency"
                  value={formData.exerciseFrequency}
                  onChange={handleChange}
                >
                  <option value="">Select Frequency</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Rarely">Rarely</option>
                </select>
                {errors.exerciseFrequency && <span>{errors.exerciseFrequency}</span>}
              </div>

              <div>
                <label>Diet Preference</label>
                <select
                  name="dietPreference"
                  value={formData.dietPreference}
                  onChange={handleChange}
                >
                  <option value="">Select Diet</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Non_Vegetarian">Non-Vegetarian</option>
                </select>
                {errors.dietPreference && <span>{errors.dietPreference}</span>}
              </div>
            </div>
          )}

          {formData.surveyTopic === 'Education' && (
            <div>
              <div>
                <label>Highest Qualification</label>
                <select
                  name="highestQualification"
                  value={formData.highestQualification}
                  onChange={handleChange}
                >
                  <option value="">Select Qualification</option>
                  <option value="High_school">High School</option>
                  <option value="Bachelors">Bachelor's</option>
                  <option value="Masters">Master's</option>
                  <option value="PhD">PhD</option>
                </select>
                {errors.highestQualification && <span>{errors.highestQualification}</span>}
              </div>

              <div>
                <label>Field of Study</label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleChange}
                />
                {errors.fieldOfStudy && <span>{errors.fieldOfStudy}</span>}
              </div>
            </div>
          )}

          <div>
            <label>Feedback</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
            />
            {errors.feedback && <span>{errors.feedback}</span>}
          </div>

          {/* In case of additional question */}

          {additionalQuestions.length > 0 && <h3>Additional Questions</h3>}

          {additionalQuestions.map((question, index) => (
            <div key={index}>
              <label>{question.question}</label>
              <input
                type="text"
                name={`additionalQuestion${index}`}
                value={formData[`additionalQuestion${index}`] || ''}
                onChange={handleChange}
              />
            </div>
          ))}

          <button type="submit">Submit</button>
        </div>

            {/* summary */}
        {submittedData && (
        <div>
          <h2 style={{ textAlign: 'center' }}>Summary of Submitted Data</h2>
          <p><strong>Full Name:</strong> {submittedData.fullName}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Survey Topic:</strong> {submittedData.surveyTopic}</p>

          {submittedData.surveyTopic === 'Technology' && (
            <div>
              <p><strong>Favorite Programming Language:</strong> {submittedData.favoriteProgrammingLanguage}</p>
              <p><strong>Technology Experience:</strong> {submittedData.technologyExperience}</p>
            </div>
          )}

          {submittedData.surveyTopic === 'Health' && (
            <div>
              <p><strong>Exercise Frequency:</strong> {submittedData.exerciseFrequency}</p>
              <p><strong>Diet Preference:</strong> {submittedData.dietPreference}</p>
            </div>
          )}

          {submittedData.surveyTopic === 'Education' && (
            <div>
              <p><strong>Highest Qualification:</strong> {submittedData.highestQualification}</p>
              <p><strong>Field of Study:</strong> {submittedData.fieldOfStudy}</p>
            </div>
          )}

          <p><strong>Feedback:</strong> {submittedData.feedback}</p>

          {additionalQuestions.length > 0 && (
            <div>
              <h3>Additional Questions and Answers</h3>
              {additionalQuestions.map((question, index) => (
                <div key={index}>
                  <p><strong>{question.question}:</strong> {submittedData[`additionalQuestion${index}`]}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      </form>

      
    </div>
  );
};

export default SurveyForm;

