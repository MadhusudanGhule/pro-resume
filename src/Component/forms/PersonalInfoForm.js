import React from 'react';

export default function PersonalInfoForm({ userData, onUserDataChange }) {
  return (
    <div>
      <h2>Personal Information</h2>
      <form>
        <div className='m-3'>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userData.firstName}
            onChange={onUserDataChange}
          />
        </div>
        <div className='m-3'>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={userData.lastName}
            onChange={onUserDataChange}
          />
        </div>
        <div className='m-3'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={onUserDataChange}
          />
        </div>
        <div className='m-3'>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={userData.phone}
            onChange={onUserDataChange}
          /> 

          
        </div>
      </form>
    </div>
  );
}
