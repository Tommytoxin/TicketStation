// JavaScript for form validation and redirection

document.addEventListener("DOMContentLoaded", function() {
    // Form validation
    const form = document.querySelector('.custom-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('ticket-form-name');
        const emailInput = document.getElementById('ticket-form-email');
        const phoneInput = document.getElementById('ticket-form-phone');
        const numberInput = document.getElementById('ticket-form-number');

        let errors = [];

        if (nameInput.value.trim() === '') {
            errors.push('Please enter your name.');
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneInput.value.trim())) {
            errors.push('Please enter a valid 10-digit phone number.');
        }

        if (numberInput.value.trim() === '' || isNaN(numberInput.value.trim())) {
            errors.push('Please enter a valid number of tickets.');
        }

        if (errors.length > 0) {
            alert(errors.join('\n'));
            return;
        }

        // Redirect to payment.html
        window.location.href = 'payment.html';
    });
});
