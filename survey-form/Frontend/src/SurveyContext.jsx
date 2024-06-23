
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const SurveyContext = createContext();

const SurveyProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    surveyTopic: '',
    favoriteProgrammingLanguage: '',
    technologyExperience: '',
    exerciseFrequency: '',
    dietPreference: '',
    highestQualification: '',
    fieldOfStudy: '',
    feedback: '',
  });

  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [errors, setErrors] = useState({});

  // useEffect(() => {
  //   if (formData.surveyTopic && formData.surveyTopic === 'Technology' && formData.favoriteProgrammingLanguage.length > 0) {
  //     fetchAdditionalQuestions(formData.favoriteProgrammingLanguage);
  //   }
  // }, [formData.favoriteProgrammingLanguage]);

  // const fetchAdditionalQuestions = async (topic) => {
  //   try {
  //     const response = await axios.get(`https://backend-survey-form.onrender.com/technology/${topic.toLowerCase()}`);
  //     setAdditionalQuestions(response.data);
  //     console.log("Additional questions:", response.data);
  //   } catch (error) {
  //     console.error("Error fetching additional questions:", error);
  //   }
  // };

  useEffect(() => {
    if (formData.surveyTopic === 'Technology' && formData.favoriteProgrammingLanguage.length > 0) {
      fetchAdditionalQuestions('technology', formData.favoriteProgrammingLanguage);
    } else if (formData.surveyTopic === 'Health' && formData.dietPreference.length > 0) {
      fetchAdditionalQuestions('health', formData.dietPreference);
    } else if (formData.surveyTopic === 'Education' && formData.highestQualification.length > 0) {
      fetchAdditionalQuestions('education', formData.highestQualification);
    }
  }, [formData.favoriteProgrammingLanguage, formData.dietPreference, formData.highestQualification]);

  const fetchAdditionalQuestions = async (category, topic = '') => {
    try {
      let url = `https://backend-survey-form.onrender.com/${category}`;
      if (topic) {
        url += `/${topic.toLowerCase()}`;
      }
      const response = await axios.get(url);
      setAdditionalQuestions(response.data);
      console.log("Additional questions:", response.data);
    } catch (error) {
      console.error("Error fetching additional questions:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    }); 
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

    if (!formData.surveyTopic) newErrors.surveyTopic = 'Survey Topic is required';

    if (formData.surveyTopic === 'Technology') {
      if (!formData.favoriteProgrammingLanguage) newErrors.favoriteProgrammingLanguage = 'Favorite Programming Language is required';
      if (!formData.technologyExperience) newErrors.technologyExperience = 'Technology Experience is required';
    }

    if (formData.surveyTopic === 'Health') {
      if (!formData.exerciseFrequency) newErrors.exerciseFrequency = 'Exercise Frequency is required';
      if (!formData.dietPreference) newErrors.dietPreference = 'Diet Preference is required';
    }

    if (formData.surveyTopic === 'Education') {
      if (!formData.highestQualification) newErrors.highestQualification = 'Highest Qualification is required';
      if (!formData.fieldOfStudy) newErrors.fieldOfStudy = 'Field of Study is required';
    }

    if (!formData.feedback) newErrors.feedback = 'Feedback is required';
    else if (formData.feedback.length < 50) newErrors.feedback = 'Feedback must be at least 50 characters long';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <SurveyContext.Provider value={{
      formData,
      additionalQuestions,
      errors,
      handleChange,
      validateForm
    }}>
      {children}
    </SurveyContext.Provider>
  );
};

export { SurveyProvider, SurveyContext };
