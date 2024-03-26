// Get all input fields and select elements
const inputs = document.querySelectorAll('input[type="text"], input[type="number"]');
const selectFields = document.querySelectorAll('select');

// Function to check if a field is empty
function isEmpty(field) {
  return field.value.trim() === '';
}

// Function to get field label or placeholder
function getFieldName(field) {
  const label = field.parentElement.querySelector('label');
  return label ? label.textContent.trim() : field.placeholder;
}

// Function to create and display error message
function showErrorMessage(field, message) {
  const errorMessageContainer = document.createElement('div');
  errorMessageContainer.classList.add('error-message'); // Add CSS class for styling (CSS needed)
  errorMessageContainer.textContent = message;
  field.parentElement.appendChild(errorMessageContainer);
}

// Function to remove error message
function removeErrorMessage(field) {
  const errorMessageContainer = field.parentElement.querySelector('.error-message');
  if (errorMessageContainer) {
    errorMessageContainer.remove();
  }
}

// Add event listener to submit button
const submitButton = document.querySelector('input[type="submit"]');

submitButton.addEventListener('click', (event) => {
  // Prevent default form submission
  event.preventDefault();

  // Check if any field is empty
  let hasEmptyField = false;
  for (const field of [...inputs, ...selectFields]) {
    if (isEmpty(field)) {
      hasEmptyField = true;
      const fieldName = getFieldName(field);
      field.classList.add('error'); // Add error class for styling (CSS needed)
      showErrorMessage(field, `Please fill in the ${fieldName} field.`);
    } else {
      field.classList.remove('error'); // Remove error class if filled
      removeErrorMessage(field); // Remove any existing error message
    }
  }

  // If no empty fields, proceed (usually send form data to server)
  if (!hasEmptyField) {
    alert('Form submitted successfully! (Note: Payment processing not included in this example)');
  }
});
