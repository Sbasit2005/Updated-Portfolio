JavaScript: // JavaScript code for form submission
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
event.preventDefault();

const name = nameInput.value;
const email = emailInput.value;
const message = messageInput.value;

// TODO: Submit the form data to the server using fetch or XMLHttpRequest

alert(Thank you, ${name}! Your message has been sent.);

nameInput.value = '';
emailInput.value = '';
messageInput.value = '';
});