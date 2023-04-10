// pages/contact.tsx

import React from 'react';
// import { useForm } from 'react-hook-form';

const Contact: React.FC = () => {
  // const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => {
    // Handle form submission here
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-semibold mb-4'>Contact Us</h1>
      {/* Add contact information here */}
      <form onSubmit={/* handleSubmit(onSubmit) */}>
        {/* Render your contact form here */}
        {/* <input type="text" name="name" ref={register({ required: true })} /> */}
        {/* <input type="email" name="email" ref={register({ required: true })} /> */}
        {/* <textarea name="message" ref={register({ required: true })}></textarea> */}
        {/* <input type="submit" value="Send Message" /> */}
      </form>
    </div>
  );
};

export default Contact;
