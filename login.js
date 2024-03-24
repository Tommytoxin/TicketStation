//Thomas Login Page

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Select the button element from the HTML using its ID
const createAccountBtn = document.getElementById('createAccountBtn');

// Add event listener to the button
createAccountBtn.addEventListener('click', () => {
  alert('Account Created Successfully!');  // Display alert on click
});
