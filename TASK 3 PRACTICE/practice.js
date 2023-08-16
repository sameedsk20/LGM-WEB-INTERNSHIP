function onFormSubmit(event) {
    event.preventDefault();
  
    // Get form data
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const website = document.querySelector('input[name="website"]').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.querySelector('textarea').value;
  
    // Create the output text
    const outputText = `
      <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Website:</strong> ${website}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
  
    // Display the output
    const outputDisplay = document.getElementById('outputDisplay');
    outputDisplay.innerHTML = outputText;
  
    // Reset the form after submission
    document.getElementById('registrationForm').reset();
  
    // Prevent form submission from causing a page reload
    return false;
  }
  
  document.getElementById('registrationForm').addEventListener('submit', onFormSubmit);
  