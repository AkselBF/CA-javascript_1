/*
  Form and submission
*/

const form = document.querySelector("#contact_form");

const fullname = document.querySelector("#fullname");
const fullnameError = document.querySelector("#fullname_error");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject_error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email_error");

const address = document.querySelector("#address");
const addressError = document.querySelector("#address_error");

const message = document.querySelector(".message");
const input = document.querySelector(".input_box");
const btn = document.querySelector("#submit_btn");
const loader = document.querySelector(".loader");

// Checks if the form passes
function validateForm(event) {
  event.preventDefault();

  // Checks the Full name input
  if (checkLength(fullname.value, 0) === true) {
    fullnameError.style.display = "none";
    console.log(fullname.value);
  } else {
    fullnameError.style.display = "block";
  }

  // Checks the Subject input
  if (checkLength(subject.value, 10) === true) {
    subjectError.style.display = "none";
    console.log(subject.value);
  } else {
    subjectError.style.display = "block";
  }

  // Checks the E-mail input
  if (checkMail(email.value) === true) {
    emailError.style.display = "none";
    console.log(email.value);
  } else {
    emailError.style.display = "block";
  }

  // Checks the Address input
  if (checkLength(address.value, 25) === true) {
    addressError.style.display = "none";
    console.log(address.value);
  } else {
    addressError.style.display = "block";
  }

  // If every input is successfull, a message pops out
  if (checkLength(fullname.value, 0) === true 
  && checkLength(subject.value, 10) === true 
  && checkMail(email.value) === true 
  && checkLength(address.value, 25) === true) {
    alert("Submission is successfull");
    message.innerHTML = `<h2 class="success_message">Passed</h2>`;
  }
}

btn.disabled = true;

input.addEventListener("change", enableButton);
form.addEventListener("submit", validateForm);

// If ".input_box" has something in it, the button can be clicked
function enableButton() {
  if (document.querySelector(".input_box").value === "") {
    btn.disabled = true;
    btn.style.background = "#8099a5";
  } else {
    btn.disabled = false;
    btn.style.background = "#2d1073";
  }
}

// Checks the amount of characters
function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

// Checks if the email is properly formulated
function checkMail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}