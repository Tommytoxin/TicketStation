document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.custom-form');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        console.log("Form submitted"); // Check if this message is logged
        event.preventDefault(); // Prevent form submission

        // Validate form inputs
        const nameInput = document.getElementById('ticket-form-name');
        const emailInput = document.getElementById('ticket-form-email');
        const phoneInput = document.getElementById('ticket-form-phone');
        const numberInput = document.getElementById('ticket-form-number');

        let isValid = true;

        // Name validation
        if (nameInput.value.trim() === '') {
            displayError(nameInput, 'Please enter your full name.');
            isValid = false;
        } else {
            removeError(nameInput);
        }

        // Email validation
        if (!isValidEmail(emailInput.value)) {
            displayError(emailInput, 'Please enter a valid email address.');
            isValid = false;
        } else {
            removeError(emailInput);
        }

        // Phone validation
        if (!isValidPhone(phoneInput.value)) {
            displayError(phoneInput, 'Please enter a valid phone number (e.g., 085-456-7890).');
            isValid = false;
        } else {
            removeError(phoneInput);
        }

        // Number of tickets validation
        if (!isValidNumber(numberInput.value)) {
            displayError(numberInput, 'Please enter a valid number of tickets.');
            isValid = false;
        } else {
            removeError(numberInput);
        }

        // If form is valid, redirect to payment page
        if (isValid) {
            console.log("Redirecting to payment.html"); // Check if this message is logged
            window.location.href = "payment.html";
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate phone number format
    function isValidPhone(phone) {
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
        return phoneRegex.test(phone);
    }

    // Function to validate number of tickets
    function isValidNumber(number) {
        return !isNaN(number) && parseInt(number) > 0;
    }

    // Function to display error message
    function displayError(input, message) {
        const errorDiv = input.nextElementSibling;
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }

    // Function to remove error message
    function removeError(input) {
        const errorDiv = input.nextElementSibling;
        errorDiv.textContent = '';
        errorDiv.style.display = 'none';
    }
});
