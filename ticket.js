
// Define a class for handling form validation
class FormValidator {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.initialize();
  }

  initialize() {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (this.validateForm()) {
        // If form is valid, submit it
        event.target.submit();
      }
    });
  }

  validateForm() {
    let isValid = true;

    // Check name field
    const nameInput = this.form.querySelector('#name');
    if (!nameInput.value.trim()) {
      this.showError(nameInput, 'Please enter your name');
      isValid = false;
    } else {
      this.hideError(nameInput);
    }

    // Check email field
    const emailInput = this.form.querySelector('#email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      this.showError(emailInput, 'Please enter a valid email address');
      isValid = false;
    } else {
      this.hideError(emailInput);
    }

    // Check phone field
    const phoneInput = this.form.querySelector('#phone');
    if (!phoneInput.value.trim()) {
      this.showError(phoneInput, 'Please enter your phone number');
      isValid = false;
    } else {
      this.hideError(phoneInput);
    }

    return isValid;
  }

  showError(element, message) {
    // Display error message
    const errorSpan = document.createElement('span');
    errorSpan.classList.add('error-message');
    errorSpan.textContent = message;

    const parent = element.parentElement;
    parent.appendChild(errorSpan);
    parent.classList.add('error');
  }

  hideError(element) {
    // Hide error message
    const parent = element.parentElement;
    parent.querySelector('.error-message').remove();
    parent.classList.remove('error');
  }
}

// Create an instance of FormValidator for the ticket form
const validator = new FormValidator('ticketForm');

//Defing a class for the tickets
class Ticket {
  //consurtctor is initializing ticket properties
  constructor(event, ticketType, ticketCount) {
    this.event = event;
    this.ticketType = ticketType;
    this.ticketCount = ticketCount;
  }

  //method is used to calculate the price of the tickets
  calculatePrice() {
    let price = 0;
    const selectedOption = document.getElementById('event').querySelector('option:checked');
    if (selectedOption) {
      price = parseInt(selectedOption.dataset.price) * parseInt(this.ticketCount);
    }
    return price;
  }
}

let cartItems = [];

//function:add the tickets to the cart
function addToCart() {
  const form = document.getElementById('ticketForm');
  const formData = new FormData(form);
  const ticketDetails = Object.fromEntries(formData.entries());
  const ticket = new Ticket(ticketDetails.event, ticketDetails.ticketType, ticketDetails.ticketCount);
  cartItems.push(ticket);
  displayCart();
}

//function:Displaying of cart items
function displayCart() {
  const cartList = document.getElementById('cartItems');
  cartList.innerHTML = '';
  let totalPrice = 0;
  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.event} - ${item.ticketType} x ${item.ticketCount}`;
    cartList.appendChild(listItem);
    totalPrice += item.calculatePrice();
  });
  const totalElement = document.getElementById('total');
  totalElement.textContent = `Total: ZAR ${totalPrice.toFixed(2)}`; 
}


// redirect to the payment page
function redirectToPaymentPage() {
  window.location.href = 'payment.html';
}

