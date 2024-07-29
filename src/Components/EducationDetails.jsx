// EducationDetailsForm.jsx

import React from 'react';
import Stepper from './Stepper';

const EducationDetailsForm = ({ formData, handleChange, nextStep, prevStep }) => {
  const { school, degree } = formData;

  const continueStep = (e) => {
    e.preventDefault();
    // Validation can be added here before proceeding to next step
    nextStep();
  };

  const goBack = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="form-container">
    <form onSubmit={continueStep}>
      {/* <h1><strong>Step 2</strong></h1> */}
      <Stepper/>
      <h2>Enter your Education Information</h2>
      <div>
        <label>School/College:</label>
        <input
          type="text"
          name="school"
          value={school}
          onChange={handleChange}
          required
           placeholder="Enter your school or college"
        />
      </div>
      <div>
        <label>Degree:</label>
        <input
          type="text"
          name="degree"
          value={degree}
          onChange={handleChange}
          required
            placeholder="Enter your degree"
        />
      </div>
      <button type="button" onClick={goBack}><i class="fa-solid fa-arrow-left"></i> Back</button>
      <button type="submit">Next <i class="fa-solid fa-arrow-right"></i></button>
    </form>
    </div>
  );
};

export default EducationDetailsForm;
