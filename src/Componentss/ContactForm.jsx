// ContactForm.jsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const ContactForm = ({ formData, onNext, onPrev }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: formData,
  });

  const onSubmitForm = (data) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className='personal-form-container'>
      <h2>Contact Information</h2>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        }}
        render={({ field }) => (
          <>
            <label>Email:</label>
            <input {...field} type='text' placeholder='Enter your E-mail'/>
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </>
        )}
      />
      {/* <br /> */}

      <Controller
        name="phone"
        control={control}
        defaultValue=""
        rules={{
          required: 'Phone number is required',
          pattern: {
            value: /^[0-9]{10}$/,
            message: 'Invalid phone number (10 digits)',
          },
        }}
        render={({ field }) => (
          <>
            <label>Phone Number:</label>
            <input {...field} type='text' placeholder='Enter your Phone No.'/>
            {errors.phone && (
              <p className="error-message">{errors.phone.message}</p>
            )}
          </>
        )}
      />
      {/* <br /> */}

      <Controller
        name="city"
        control={control}
        defaultValue=""
        rules={{ required: 'City is required' }}
        render={({ field }) => (
          <>
            <label>City:</label>
            <input {...field} type='text' placeholder='Enter your City'/>
            {errors.city && (
              <p className="error-message">{errors.city.message}</p>
            )}
          </>
        )}
      />
      {/* <br /> */}

      <Controller
        name="state"
        control={control}
        defaultValue=""
        rules={{ required: 'State is required' }}
        render={({ field }) => (
          <>
            <label>State:</label>
            <input {...field} type='text' placeholder='Enter your State'/>
            {errors.state && (
              <p className="error-message">{errors.state.message}</p>
            )}
          </>
        )}
      />
      {/* <br /> */}

      <div className="button-group">
      <button type="button" onClick={onPrev}><i class="fa-solid fa-arrow-left"></i> Previous</button>
      <button type="submit">Next <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </form>
  );
};

export default ContactForm;
