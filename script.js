const counterEl = document.getElementById("liveCounter");
let counter = 0;

setInterval(() => {
  counter += 1;
  counterEl.textContent = counter.toString();
}, 1000);

const messageEl = document.getElementById("message");
const charCountEl = document.getElementById("charCount");
const form = document.getElementById("contactForm");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");
const messageError = document.getElementById("messageError");

const maxChars = 1000;

const updateCharCount = () => {
  const length = messageEl.value.length;
  charCountEl.textContent = `${length} / ${maxChars}`;
  charCountEl.style.color = length > maxChars ? "#a23c24" : "#6f5a4c";
};

messageEl.addEventListener("input", updateCharCount);

const showError = (el, message) => {
  el.textContent = message;
};

const clearErrors = () => {
  showError(nameError, "");
  showError(emailError, "");
  showError(ageError, "");
  showError(messageError, "");
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();

  let isValid = true;
  const nameValue = document.getElementById("name").value.trim();
  const emailValue = document.getElementById("email").value.trim();
  const ageValue = document.getElementById("age").value.trim();
  const messageValue = messageEl.value.trim();

  if (!nameValue) {
    showError(nameError, "Name cannot be empty.");
    isValid = false;
  }

  if (!emailValue || !emailValue.includes("@")) {
    showError(emailError, "Email must contain @.");
    isValid = false;
  }

  if (!ageValue || isNaN(Number(ageValue))) {
    showError(ageError, "Age must be numeric.");
    isValid = false;
  }

  if (!messageValue) {
    showError(messageError, "Message cannot be empty.");
    isValid = false;
  } else if (messageValue.length > maxChars) {
    showError(messageError, "Message exceeds 1000 characters.");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully.");
    form.reset();
    updateCharCount();
  }
});

updateCharCount();
