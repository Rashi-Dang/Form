// ConfirmationMessage.jsx

import React from 'react';
import Stepper from './Stepper';

const ConfirmationMessage = ({ prevStep }) => {
  const goBack = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className='thank-you-container'>
        <Stepper/>
      <h2>Thank you for submitting!</h2>
      <p>Your details have been successfully submitted.</p>
      <button onClick={goBack}><i class="fa-solid fa-arrow-left"></i> Back</button>
    </div>
  );
};

export default ConfirmationMessage;
