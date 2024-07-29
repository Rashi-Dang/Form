// // WorkExperienceForm.jsx

// import React, { useState } from 'react';

// const WorkExperience = ({ formData, handleChange, nextStep, prevStep }) => {
//   const { experiences } = formData;

//   const [newExperience, setNewExperience] = useState({
//     position: '',
//     experience: ''
//   });

//   const handleExperienceChange = (e) => {
//     const { name, value } = e.target;
//     setNewExperience({ ...newExperience, [name]: value });
//   };

//   const addExperience = () => {
//     // Add new experience to the list
//     handleChange({ target: { name: 'experiences', value: [...experiences, newExperience] } });
//     // Reset the form for new experience
//     setNewExperience({ position: '', experience: '' });
//   };

//   const removeExperience = (index) => {
//     // Remove experience from the list based on index
//     const updatedExperiences = experiences.filter((exp, i) => i !== index);
//     handleChange({ target: { name: 'experiences', value: updatedExperiences } });
//   };

//   const continueStep = (e) => {
//     e.preventDefault();
//     // Validation can be added here before proceeding to next step
//     nextStep();
//   };

//   const goBack = (e) => {
//     e.preventDefault();
//     prevStep();
//   };

//   return (
//     <form onSubmit={continueStep}>
//       <h2>Step 3: Work Experience</h2>
//       {experiences.map((exp, index) => (
//         <div key={index}>
//           <label>Position:</label>
//           <input
//             type="text"
//             name={`position-${index}`}
//             value={exp.position}
//             onChange={(e) => handleChange({
//               target: {
//                 name: 'experiences',
//                 value: experiences.map((item, i) => (i === index ? { ...item, position: e.target.value } : item))
//               }
//             })}
//             required
//           />
//           <label>Experience:</label>
//           <textarea
//             name={`experience-${index}`}
//             value={exp.experience}
//             onChange={(e) => handleChange({
//               target: {
//                 name: 'experiences',
//                 value: experiences.map((item, i) => (i === index ? { ...item, experience: e.target.value } : item))
//               }
//             })}
//             rows="4"
//             required
//           />
//           <button type="button" onClick={() => removeExperience(index)}>Remove</button>
//         </div>
//       ))}
//       <div>
//         <label>New Position:</label>
//         <input
//           type="text"
//           name="position"
//           value={newExperience.position}
//           onChange={handleExperienceChange}
//           required
//         />
//       </div>
//       <div>
//         <label>New Experience:</label>
//         <textarea
//           name="experience"
//           value={newExperience.experience}
//           onChange={handleExperienceChange}
//           rows="4"
//           required
//         />
//       </div>
//       <button type="button" onClick={addExperience}>Add Experience</button>
//       <button type="button" onClick={goBack}>Back</button>
//       <button type="submit">Next</button>
//     </form>
//   );
// };

// export default WorkExperience;


// WorkExperienceForm.jsx

import React, { useState } from 'react';

const WorkExperienceForm = ({ formData, handleChange, nextStep, prevStep }) => {
  const { experiences } = formData;

  const [newExperience, setNewExperience] = useState({
    position: '',
    experience: ''
  });

  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    handleChange({ target: { name: 'experiences', value: updatedExperiences } });
  };

  const addExperience = () => {
    handleChange({ target: { name: 'experiences', value: [...experiences, newExperience] } });
    setNewExperience({ position: '', experience: '' });
  };

  const removeExperience = (index) => {
    const updatedExperiences = experiences.filter((exp, i) => i !== index);
    handleChange({ target: { name: 'experiences', value: updatedExperiences } });
  };

  const continueStep = (e) => {
    e.preventDefault();
    // Validation logic can be added here
    nextStep();
  };

  const goBack = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <form onSubmit={continueStep}>
      <h2>Step 3: Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index}>
          <label>Position:</label>
          <input
            type="text"
            value={exp.position}
            onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
            required
          />
          <label>Experience:</label>
          <textarea
            value={exp.experience}
            onChange={(e) => handleExperienceChange(index, 'experience', e.target.value)}
            rows="4"
            required
          />
          <button type="button" onClick={() => removeExperience(index)}>Remove</button>
        </div>
      ))}
      <div>
        <label>New Position:</label>
        <input
          type="text"
          value={newExperience.position}
          onChange={(e) => setNewExperience({ ...newExperience, position: e.target.value })}
          required
        />
      </div>
      <div>
        <label>New Experience:</label>
        <textarea
          value={newExperience.experience}
          onChange={(e) => setNewExperience({ ...newExperience, experience: e.target.value })}
          rows="4"
          required
        />
      </div>
      <button type="button" onClick={addExperience}>Add Experience</button>
      <button type="button" onClick={goBack}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default WorkExperienceForm;
