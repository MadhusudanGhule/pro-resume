import React from 'react';
import Template1 from './Templates/Template1'
import Template2 from './Templates/Template2'
import Template3 from  './Templates/Template3'

export default function TemplateSelector(props) {
  function handleTemplateClick(template) {
    props.onSelectTemplate(template);
  }
  return (
    <div>
      <h2>Select a Template:</h2>
      <ul>
        <li onClick={() => handleTemplateClick('template1')}><Template1 /></li>
        <li onClick={() => handleTemplateClick('template2')}><Template2 /></li>
        <li onClick={() => handleTemplateClick('template3')}><Template3 /></li>
      </ul>
    </div>
  );
}

