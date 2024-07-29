// PersonalDetailsForm.jsx

import React from 'react';
import Stepper from './Stepper';

const PersonalDetailsForm = ({ formData, handleChange, nextStep }) => {
  const { firstName, lastName, email, phone, occupation, city, bio } = formData;

  const continueStep = (e) => {
    e.preventDefault();
    // Validation can be added here before proceeding to next step
    nextStep();
  };

  return (
    <div className="form-container">
      <Stepper/>
    <form onSubmit={continueStep}>
      {/* <h1><strong>Step 1 </strong></h1> */}
      <h2>Enter your Personal Information</h2>
      <hr />
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          required
           placeholder="Enter your first name"
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          required
           placeholder="Enter your last name"
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
           placeholder="Enter your email"
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          required
           placeholder="Enter your phone number"
        />
      </div>
      <div>
        <label>Occupation:</label>
        <input
          type="text"
          name="occupation"
          value={occupation}
          onChange={handleChange}
          required
           placeholder="Enter your occupation"
        />
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={handleChange}
          required
           placeholder="Enter your city"
        />
      </div>
      <div>
        <label>Bio:</label>
        <textarea
          name="bio"
          value={bio}
          onChange={handleChange}
          rows="3"
          required
          placeholder="Write a short bio about yourself"
        />
      </div>
      <button type="submit">Next <i class="fa-solid fa-arrow-right"></i></button>
    </form>
    </div>
  );
};

export default PersonalDetailsForm;
