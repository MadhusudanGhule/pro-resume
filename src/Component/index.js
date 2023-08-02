import React, { useState } from 'react';
import TemplateSelector from './Component/TemplateSelector';
import PDFGenerator from './Component/PDFGenerator';
import PersonalInfoForm from './Component/forms/PersonalInfoForm';
import Education from './Component/forms/Education';
import Hedar from './Component/Hedar';
import Experiance from './Component/forms/Experiance';
import Languags from './Component/forms/Languags';
function App() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    template: 'template1',
  });
  function handleUserDataChange(event) {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));

  }
  return (
    <>
      <div className="row m-4">
        <div className="col">
          <div>
            <Hedar></Hedar>
          </div>
        </div>
      </div>
      <div class="container-flud">
        <div class="row">
          <div class="col-sm">

            <div className=''>
              <PersonalInfoForm userData={userData} onUserDataChange={handleUserDataChange} />
            </div>
          </div>
          <div class="col-sm">

            <div>
              <Education />
            </div>
          </div>
          <div class="col-sm">

            <div>
              <Experiance />
            </div>
          </div>
          <div className="col-sm">
            <Languags />

          </div>
        </div>

        <div className='container'>
          <div className="row">
            <div className="com-sm"></div>
            <div>
              <TemplateSelector
                userData={userData}
                onUserDataChange={handleUserDataChange}
              />
            </div>
          </div>
        </div>



        <div className="row">
          <div className="col-12">  <div>
            <PDFGenerator userData={userData} />
          </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
