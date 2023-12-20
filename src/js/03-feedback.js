import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const textArea = document.querySelector('textarea');
const input = document.querySelector('input');

const STORAGE_KEY = 'feedback-form-state';

populateTextarea();

form.addEventListener('submit', event => {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;
  console.log(email.value, message.value);

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
});

form.addEventListener('input', throttle(onTextareaInput, 500));
const formData = {};
function onTextareaInput(event) {
  event.preventDefault();

  formData[event.target.name] = event.target.value;
  //   console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  console.log('savedMessage:', savedMessage);
  const parsedMessage = JSON.parse(savedMessage);
  if (savedMessage) {
    textArea.value = parsedMessage.message;
    input.value = parsedMessage.email;
  }
}
