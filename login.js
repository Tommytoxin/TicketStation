//Thomas Login Page

class LoginPage {
  // Constructor to initialize the LoginPage object
  constructor() {
    // Get references to DOM elements
    this.container = document.getElementById('container');
    this.registerBtn = document.getElementById('register');
    this.loginBtn = document.getElementById('login');
    this.createAccountBtn = document.getElementById('createAccountBtn');

    // Attach event listeners to buttons
    this.registerBtn.addEventListener('click', this.toggleRegistration.bind(this));
    this.loginBtn.addEventListener('click', this.toggleLogin.bind(this));
    this.createAccountBtn.addEventListener('click', this.handleAccountCreation.bind(this));
  }

  // Toggles visibility of the registration form
  toggleRegistration() {
    this.container.classList.toggle('active');
  }

  // Toggles visibility of the login form
  toggleLogin() {
    this.container.classList.toggle('active');
  }

  // Handles account creation (placeholder for actual logic)
  handleAccountCreation() {
    alert('Account Created Successfully!');  // Placeholder message
  }
}

// Create a new LoginPage instance
const loginPage = new LoginPage();