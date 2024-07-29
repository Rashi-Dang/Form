// ConfirmationPage.jsx
import React from 'react';

const ConfirmationPage = ({ formData, onPrev, onSubmit }) => {
  return (
    <div className='personal-form-container'>
      <h2>Confirmation</h2>
      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Date of Birth:</strong> {formData.dob}</p>
      <p><strong>Occupation:</strong> {formData.occupation}</p>
      <p><strong>School:</strong> {formData.school}</p>
      <p><strong>Degree:</strong> {formData.degree}</p>
      <p><strong>College:</strong> {formData.college}</p>
      <p><strong>College Degree:</strong> {formData.collegeDegree}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone Number:</strong> {formData.phone}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>State:</strong> {formData.state}</p>

      <div className="button-group">
      <button type="button" onClick={onPrev}><i class="fa-solid fa-arrow-left"></i> Previous</button>
      <button type="submit" onClick={onSubmit}>Confirm <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
