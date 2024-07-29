// // ConfirmationForm.jsx

// import React from 'react';

// const ConfirmationForm = ({ formData, prevStep, handleSubmit }) => {
//   const {
//     firstName,
//     lastName,
//     email,
//     phone,
//     occupation,
//     city,
//     bio,
//     school,
//     degree,
//     experiences
//   } = formData;

//   const submitForm = (e) => {
//     e.preventDefault();
//     // Call handleSubmit function passed from props
//     handleSubmit();
//   };

//   return (
//     <div>
//       <h2>Confirmation</h2>
//       <p>Please review your information:</p>
//       <ul>
//         <li><strong>First Name:</strong> {firstName}</li>
//         <li><strong>Last Name:</strong> {lastName}</li>
//         <li><strong>Email:</strong> {email}</li>
//         <li><strong>Phone:</strong> {phone}</li>
//         <li><strong>Occupation:</strong> {occupation}</li>
//         <li><strong>City:</strong> {city}</li>
//         <li><strong>Bio:</strong> {bio}</li>
//         <li><strong>School/College:</strong> {school}</li>
//         <li><strong>Degree:</strong> {degree}</li>
//         {experiences.length > 0 && (
//           <li>
//             <strong>Work Experiences:</strong>
//             <ul>
//               {experiences.map((exp, index) => (
//                 <li key={index}>
//                   <strong>Position:</strong> {exp.position}<br />
//                   <strong>Experience:</strong> {exp.experience}
//                 </li>
//               ))}
//             </ul>
//           </li>
//         )}
//       </ul>
//       <button onClick={prevStep}>Back</button>
//       <button onClick={submitForm}>Confirm</button>
//     </div>
//   );
// };

// export default ConfirmationForm;


// ConfirmationForm.jsx

import React from 'react';
import Stepper from './Stepper';

const ConfirmationForm = ({ formData, prevStep, handleSubmit }) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    occupation,
    city,
    bio,
    school,
    degree,
  } = formData;

  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div className='containerr'>
  {/* <h1><strong>Step 3</strong></h1> */}
  <Stepper/>
  <h2 className='text-3xl'><strong>Confirmation</strong></h2>
  <p className='text-center'>Please review your information:</p>
  <div class="confirmation-info">
    <div>
      <h3 className='text-center text-2xl font-bold'>Personal Information</h3>
      <ul>
        <li><strong>First Name:</strong> {firstName}</li>
        <li><strong>Last Name:</strong> {lastName}</li>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Phone:</strong> {phone}</li>
        <li><strong>Occupation:</strong> {occupation}</li>
        <li><strong>City:</strong> {city}</li>
        <li><strong>Bio:</strong> {bio}</li>
      </ul>
    </div>
    <div>
      <h3 className='text-center text-2xl font-bold'>Education Information</h3>
      <ul>
        <li><strong>School/College:</strong> {school}</li>
        <li><strong>Degree:</strong> {degree}</li>
      </ul>
    </div>
  </div>
  <div class="button-group">
    <button onClick={prevStep} type='button'><i class="fa-solid fa-arrow-left"></i> Back</button>
    <button onClick={submitForm} type='submit'>Confirm</button>
  </div>
</div>
  );
};

export default ConfirmationForm;
