
import React, { useState } from 'react';
import './EventForm.css';

const EventForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    withGuest: false,
    guestName: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? '' : '*Name is required';
    tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email) ? '' : '*Email is not valid';
    tempErrors.age = formData.age && formData.age > 0 ? '' : '*Age must be a number greater than 0';
    if (formData.withGuest) {
      tempErrors.guestName = formData.guestName ? '' : '*Guest Name is required';
    }
    setErrors(tempErrors);
    return Object.values(tempErrors).every(error => error === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData(formData);
      // Reset form
      setFormData({
        name: '',
        email: '',
        age: '',
        withGuest: false,
        guestName: ''
      });
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <div className='input-field'>
          <label>Name:</label>
          <input type="text" name="name" placeholder='Sumit Kumar' value={formData.name} onChange={handleChange} />
          {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        </div>
        <div className='input-field'>
          <label>Email:</label>
          <input type="email" name="email" placeholder='sumit123@gmail.com' value={formData.email} onChange={handleChange} />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </div>
        <div className='input-field'>
          <label>Age:</label>
          <input type="number" name="age" placeholder='e.g. 1' value={formData.age} onChange={handleChange} />
          {errors.age && <div style={{ color: 'red' }}>{errors.age}</div>}
        </div>
        <div className='input-field'>
          <label>Are you attending with a guest?</label>
          <input type="checkbox" name="withGuest" checked={formData.withGuest} onChange={handleChange} />
        </div>
        {formData.withGuest && (
          <div className='input-field'>
            <label>Guest Name:</label>
            <input type="text" name="guestName" placeholder='Asmit Sir' value={formData.guestName} onChange={handleChange} />
            {errors.guestName && <div style={{ color: 'red' }}>{errors.guestName}</div>}
          </div>
        )}
        <button type="submit">Submit</button>


        {submittedData && (
        <div className='summary'>
          <h3>Summary</h3>
          <p> <span>Name:</span> {submittedData.name}</p>
          <p> <span>Email:</span>  {submittedData.email}</p>
          <p> <span>Age:</span> {submittedData.age}</p>
          <p> <span>Attending with Guest:</span> {submittedData.withGuest ? 'Yes' : 'No'}</p>
          {submittedData.withGuest && <p> <span>Guest Name:</span> {submittedData.guestName}</p>}
        </div>
      )}
      </form>

      
    </div>
  );
};

export default EventForm;
