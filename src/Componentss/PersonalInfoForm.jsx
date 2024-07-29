// PersonalInfoForm.jsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const PersonalInfoForm = ({ formData, onSubmit }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: formData,
  });

  const onSubmitForm = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className='personal-form-container'>
      <h2 className='h2'>Personal Information</h2>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        rules={{ required: 'First name is required' }}
        render={({ field }) => (
          <>
            <label>First Name:</label>
            <input {...field} placeholder='First Name' type='text'/>
            {errors.firstName && (
              <p className="error-message">{errors.firstName.message}</p>
            )}
          </>
        )}
      />
      {/* <br /> */}

      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        rules={{ required: 'Last name is required' }}
        render={({ field }) => (
          <>
            <label>Last Name:</label>
            <input {...field} placeholder='Last Name' type='text'/>
            {errors.lastName && (
              <p className="error-message">{errors.lastName.message}</p>
            )}
          </>
        )}
      />
      {/* <br /> */}

      <Controller
        name="dob"
        control={control}
        defaultValue=""
        rules={{ required: 'Date of birth is required' }}
        render={({ field }) => (
          <>
            <label>Date of Birth:</label>
            <input type="date" {...field}/>
            {errors.dob && (
              <p className="error-message">{errors.dob.message}</p>
            )}
          </>
        )}
      />
      {/* <br /> */}

      <Controller
        name="occupation"
        control={control}
        defaultValue=""
        rules={{ required: 'Occupation is required' }}
        render={({ field }) => (
          <>
            <label>Occupation:</label>
            <input {...field} placeholder='Occupation' type='text'/>
            {errors.occupation && (
              <p className="error-message">{errors.occupation.message}</p>
            )}
          </>
        )}
      />
      {/* <br /> */}

      <div className="button-group">
      <button type="submit">Next <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
