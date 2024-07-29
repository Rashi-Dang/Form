// App.jsx

// import WorkExperience from './Components/WorkExperience';

import React, { useState } from 'react';
import PersonalDetails from './Components/PersonalDetails';
import EducationDetails from './Components/EducationDetails';
import ConfirmationForm from './Components/ConfirmationForm';
import ConfirmationMessage from './Components/ConfirmationMessage';
import './App.css'
import Stepper from './Components/Stepper';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    occupation: '',
    city: '',
    bio: '',
    school: '',
    degree: '',
    // experiences: []
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // Submit logic can be added here (e.g., send formData to server)
    // For simplicity, we'll handle submission in ConfirmationForm
    // and update state to move to the confirmation message step.
    setCurrentStep(currentStep + 1);
  };


  switch (currentStep) {
    case 1:
      return (
        <div className='can'>
          <PersonalDetails
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
        </div>
      );
    case 2:
      return (
        <div className='can'>
        <EducationDetails
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
         </div>
      );
    case 3:
      return (
        <div className='can'>
        <ConfirmationForm
          formData={formData}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
        />
      </div>
      );
    case 4:
      return (
        // <div className='can'>
        <ConfirmationMessage
          prevStep={prevStep}
        />
        // </div>
      );
    default:
      return null;
    }
};

export default App;


//   return (
//     <div className='can'>
//       <Stepper currentStep={currentStep} />
//       {currentStep === 1 && (
//         <PersonalDetails
//           formData={formData}
//           handleChange={handleChange}
//           nextStep={nextStep}
//         />
//       )}
//       {currentStep === 2 && (
//         <EducationDetails
//           formData={formData}
//           handleChange={handleChange}
//           nextStep={nextStep}
//           prevStep={prevStep}
//         />
//       )}
//       {currentStep === 3 && (
//         <ConfirmationForm
//           formData={formData}
//           prevStep={prevStep}
//           handleSubmit={handleSubmit}
//         />
//       )}
//       {currentStep === 4 && (
//         <ConfirmationMessage prevStep={prevStep} />
//       )}
//     </div>
//   );
// };

// export default App;
