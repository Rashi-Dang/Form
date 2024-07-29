import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const QualificationForm = ({ formData, onNext, onPrev }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: formData,
  });

  const onSubmitForm = (data) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className='personal-form-container'>
      <h2>Qualifications</h2>
      <Controller
        name="school"
        control={control}
        defaultValue=""
        rules={{ required: 'School name is required' }}
        render={({ field }) => (
          <>
            <label>School Name:</label>
            <input {...field} type='text' placeholder='Enter your School name'/>
            {errors.school && (
              <p className="error-message">{errors.school.message}</p>
            )}
          </>
        )}
      />
      {/* <br /> */}

      <Controller
        name="degree"
        control={control}
        defaultValue=""
        rules={{ required: 'Degree name is required' }}
        render={({ field }) => (
          <>
            <label>Degree:</label>
            <input {...field} type='text' placeholder='Enter your School Standard'/>
            {errors.degree && (
              <p className="error-message">{errors.degree.message}</p>
            )}
          </>
        )}
      />
      {/* <br /> */}

      <Controller
        name="college"
        control={control}
        defaultValue=""
        rules={{ required: 'College name is required' }}
        render={({ field }) => (
          <>
            <label>College Name:</label>
            <input {...field} type='text' placeholder='Enter your College name'/>
            {errors.college && (
              <p className="error-message">{errors.college.message}</p>
            )}
          </>
        )}
      />
      {/* <br /> */}

      <Controller
        name="collegeDegree"
        control={control}
        defaultValue=""
        rules={{ required: 'College Degree name is required' }}
        render={({ field }) => (
          <>
            <label>College Degree:</label>
            <input {...field} type='text' placeholder='Enter your College Degree'/>
            {errors.collegeDegree && (
              <p className="error-message">{errors.collegeDegree.message}</p>
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

export default QualificationForm;
