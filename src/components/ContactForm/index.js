import React, { useState } from 'react';
import { sendMessage } from 'utils/firebase';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setMessage('');
  };

  const ValidateEmail = address => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(address);
  };

  // Handle form submit and post to firebase messages collection
  const handleSubmit = event => {
    event.preventDefault();

    sendMessage(firstName, lastName, email, phone, company, message).then(() => {
      // Display alert and hide after 3 seconds
      document.getElementById('alert').style.display = 'block';
      setTimeout(() => {
        document.getElementById('alert').style.display = 'none';
      }, 3000);

      resetForm();
    });
  };

  // Validate the form
  const hasEmptyInput = firstName === '' || lastName === '' || !ValidateEmail(email);
  const placeholder = hasEmptyInput ? 'Please fill in your name and a valid email address.' : 'Message...';

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <div className="container text-center">
        <div className="alert alert-success rounded box-shadow" id="alert" role="alert">
          <h2 className="alert-heading">Your message has been sent!</h2>
        </div>
      </div>

      <div className="input-group mb-3 container">
        <div className="input-group-prepend box-shadow">
          <span className="input-group-text">Name</span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="First"
          required
          value={firstName}
          onChange={({ target: { value } }) => setFirstName(value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Last"
          required
          value={lastName}
          onChange={({ target: { value } }) => setLastName(value)}
        />
      </div>

      <div className="input-group mb-3 container">
        <div className="input-group-prepend box-shadow">
          <span className="input-group-text">Contact</span>
        </div>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          required
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <input
          type="tel"
          className="form-control"
          placeholder="Phone"
          value={phone}
          onChange={({ target: { value } }) => setPhone(value)}
        />
      </div>

      <div className="input-group mb-2 container">
        <div className="input-group-prepend box-shadow">
          <span className="input-group-text">Company</span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="If applicable..."
          value={company}
          onChange={({ target: { value } }) => setCompany(value)}
        />
      </div>

      <div className="container">
        <textarea
          type="text"
          placeholder={placeholder}
          className="mb-3 container box-shadow msg-box"
          disabled={hasEmptyInput}
          required
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
        />
        <button disabled={!message} type="submit" className="btn btn-secondary btn-lg btn-block box-shadow">
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
