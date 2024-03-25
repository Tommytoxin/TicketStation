// Define a class for handling form submissions
class PaymentForm {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.formData = new FormData(this.form);
  }

  // Method for performing form validation
  validateForm() {
    let valid = true;
    this.formData.forEach(function (value, key) {
      if (!value) {
        alert("Please fill in all fields.");
        valid = false;
      }
    });
    return valid;
  }

  // Method for handling form submission
  handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    if (this.validateForm()) {
      console.log("Form data:", this.formData);
      alert("Payment successful!"); // You can remove this line once you implement actual payment processing
    }
  }

  // Method for adding submit event listener
  addSubmitListener() {
    this.form.addEventListener("submit", (event) => this.handleSubmit(event));
  }
}

// Create an instance of PaymentForm for the payment form
const paymentForm = new PaymentForm("payment-form");

// Add submit event listener
paymentForm.addSubmitListener();
