import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import dotenv from 'dotenv';

// dotenv.config();

export default   function Form(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_oetvj8m', 'template_wi8q1ci' , form.current, 'f0yvaHKrqIraoBEur')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
   <div className="field">
    <form ref={form} onSubmit={sendEmail}  className="form" >
      <label>Name</label><br/>
      <input type="text" name="user_name" /><br/>
      <label>Email</label><br/>
      <input type="email" name="user_email" /><br/>
      <label>Message</label><br/>
      <textarea name="message" /><br/>
      <input type="submit" value="Send" />
     </form>
    </div>
  );
};