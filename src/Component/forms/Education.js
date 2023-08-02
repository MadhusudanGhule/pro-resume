import React from 'react';

const Education = () => {
    return (
        <div>
            <div>
                <h1>Eduction</h1>
            </div>
              <form>
        <div className='m-3'>
          <label htmlFor="collegeName">College Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            // value={userData.firstName}
            // onChange={onUserDataChange}
          />
        </div>
        <div className='m-3'>
          <label htmlFor="Fild">Fild:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            // value={userData.lastName}
            // onChange={onUserDataChange}
          />
        </div>
        <div className='m-3'>
          <label htmlFor="date">date:</label>
          <input
            type="email"
            id="email"
            name="email"
            // value={userData.email}
            // onChange={onUserDataChange}
          />
        </div>
        <div className='m-3'>
          <label htmlFor="CGPA">CGPA:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            // value={userData.phone}
            // onChange={onUserDataChange}
          /> 

          
        </div>
      </form>
        </div>
    );
}

export default Education;
