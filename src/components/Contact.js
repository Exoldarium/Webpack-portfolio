import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xpznbeqa");
  if (state.succeeded) {
      return <div className='contact_confirmation'>
                <span className='contact_spanConfirmation'>
                  <p className='contact_paragraphConfirmation'>I'll get to you as soon as possible!</p>
                </span>
              </div>;
  }
  return (
      <section id='contact'>
        <form 
          onSubmit={handleSubmit}
          className="contact_form"
        >
        <label 
          htmlFor="email"
          className='contact_label'
        >
          <span className='contact_span'>Contact</span>
          <span className='contact_spanEmail'>Send me an e-mail if you are interested in working with me</span>
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className='contact_input'
          placeholder='email@adress.com'
        />
        <ValidationError 
         prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
          className='contact_textArea'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button 
          type="submit" 
          disabled={state.submitting}
          className="contact_button"
        >
          Submit
        </button>
      </form>
      </section>
  );
}

export default Contact;