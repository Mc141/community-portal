function validateForm() {
  // Clear previous error messages
  document.querySelectorAll('.error-message').forEach(el => el.remove());

  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const phone = document.getElementById('phone');

  let isValid = true;

  // Utility function to show error
  function showError(input, message) {
    const error = document.createElement('div');
    error.className = 'error-message';
    error.style.color = 'red';
    error.style.fontSize = '0.9em';
    error.style.marginTop = '4px';
    error.textContent = message;
    input.parentNode.insertBefore(error, input.nextSibling);
    isValid = false;
  }

  // Trimmed values
  const firstNameVal = firstName.value.trim();
  const lastNameVal = lastName.value.trim();
  const emailVal = email.value.trim();
  const messageVal = message.value.trim();
  const phoneVal = phone.value.trim();

  // Required fields
  if (!firstNameVal) showError(firstName, 'First name is required.');
  if (!lastNameVal) showError(lastName, 'Last name is required.');
  if (!emailVal) showError(email, 'Email is required.');
  if (!messageVal) showError(message, 'Message is required.');
  if (!phoneVal) showError(phone, 'Phone number is required.');

  // Check if first name contains numbers
  const namePattern = /\d/;
  if (namePattern.test(firstNameVal)) {
    showError(firstName, 'First name cannot contain numbers.');
  }

  // Check if last name contains numbers
  if (namePattern.test(lastNameVal)) {
    showError(lastName, 'Last name cannot contain numbers.');
  }

  // Email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailVal && !emailPattern.test(emailVal)) {
    showError(email, 'Invalid email format.');
  }

  // Phone number format validation
  const phonePattern = /^[0-9+\-\s]{7,15}$/;
  if (phoneVal && !phonePattern.test(phoneVal)) {
    showError(phone, 'Phone number must be 7-15 digits, and may include +, -, or spaces.');
  }

  return isValid;
}
