import React from 'react';
import jsPDF from 'jspdf';

function PDFGenerator(props) {
  function handleGeneratePDF() {
    alert('Downloade pdf')
    const { firstName, lastName, email, phone, template } = props.userData;
    const doc = new jsPDF();
    console.log(props.userData)

    doc.setFontSize(18);
    doc.text(`${firstName} ${lastName}`, 10, 20);

    doc.setFontSize(14);
    doc.text(`Email: ${email}`, 10, 30);
    doc.text(`Phone: ${phone}`, 10, 40);

    if (template === 'template1') {
      // Add additional content for template 1
    } else if (template === 'template2') {
      // Add additional content for template 2
    } else if (template === 'template3') {
      // Add additional content for template 3
    }

    doc.save(`${firstName}.pdf`);
  }

  return (
    <div>
      <h2>Generate PDF:</h2>
      <button onClick={handleGeneratePDF}>Download PDF</button>
    </div>
  );
}

export default PDFGenerator;
