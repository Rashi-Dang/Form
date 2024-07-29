// App.jsx

import './App.css';
import React, { useState } from 'react';
import PersonalInfoForm from './Componentss/PersonalInfoForm';
import QualificationForm from './Componentss/QualificationForm';
import ConfirmationPage from './Componentss/ConfirmationPage';
import ContactForm from './Componentss/ContactForm';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    occupation: '',
    school: '',
    degree: '',
    college: '',
    collegeDegree: '',
    email: '',
    phone: '',
    city: '',
    state: '',
  });
  const [step, setStep] = useState(1);

  const updateFormData = (data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...data,
    }));
  };

  const onSubmitPersonalInfo = (data) => {
    updateFormData(data);
    setStep(2); // Move to next step after personal info
  };

  const onSubmitQualifications = (data) => {
    updateFormData(data);
    setStep(3); // Move to next step after qualifications
  };

  const onSubmitContactInfo = (data) => {
    updateFormData(data);
    setStep(4); // Move to confirmation step after contact info
  };

  const onSubmitConfirmation = () => {
    // Handle submission or display confirmation message
    console.log('Form submitted:', formData);
    // For now, just logging the form data
    setStep(5); // Move to completion step after confirmation
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className='container'>
      <div className="black"></div>
    <div className='form-container'>
      {/* Stepper */}
      <div className="stepper">
        <div className={`step ${step >= 1 ? 'active' : ''}`}><i class="fa-solid fa-user"></i></div>
        <div className={`line ${step >= 2 ? 'active' : ''}`}></div>
        <div className={`step ${step >= 2 ? 'active' : ''}`}><i class="fa-solid fa-graduation-cap"></i></div>
        <div className={`line ${step >= 3 ? 'active' : ''}`}></div>
        <div className={`step ${step >= 3 ? 'active' : ''}`}><i class="fa-solid fa-phone"></i></div>
        <div className={`line ${step >= 4 ? 'active' : ''}`}></div>
        <div className={`step ${step >= 4 ? 'active' : ''}`}><i class="fa-solid fa-square-check"></i></div>
      </div>

      {/* Render forms based on step */}
      <div className="form-content">
      {step === 1 && <PersonalInfoForm formData={formData} onSubmit={onSubmitPersonalInfo} />}
      {step === 2 && <QualificationForm formData={formData} onNext={onSubmitQualifications} onPrev={prevStep} />}
      {step === 3 && <ContactForm formData={formData} onNext={onSubmitContactInfo} onPrev={prevStep} />}
      {step === 4 && (
        <ConfirmationPage
          formData={formData}
          onPrev={prevStep}
          onSubmit={onSubmitConfirmation}
        />
      )}
      {step === 5 && (
        <div className='personal-form-container'>
          <i className="fa-solid fa-circle-check text-6xl text-center text-green-800"></i>
          <h1 className='h1'>Success!</h1>
          <h3 className='h3'>Thank you for submitting!</h3>
        </div>
      )}
    </div>
    </div>
    <div className="black2"></div>
    </div>
  );
};

export default App;
