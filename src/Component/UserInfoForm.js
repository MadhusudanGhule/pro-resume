import React, { useState } from 'react';

function UserInfoForm(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit({ firstName, lastName, email, phone });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={handlePhoneChange} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}
export default UserInfoForm;
