// Form and submission

const form = document.querySelector("#contact_form");

const fullname = document.querySelector("#fullname");
const fullnameError = document.querySelector("#fullname_error");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject_error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email_error");

const address = document.querySelector("#address");
const addressError = document.querySelector("#address_error");

const input = document.querySelector(".input_box");
const btn = document.querySelector("#submit_btn");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(fullname.value, 0) === true) {
    fullnameError.style.display = "none";
    console.log(fullname.value);
  } else {
    fullnameError.style.display = "block";
  }

  if (checkLength(subject.value, 10) === true) {
    subjectError.style.display = "none";
    console.log(subject.value);
  } else {
    subjectError.style.display = "block";
  }

  if (checkMail(email.value) === true) {
    emailError.style.display = "none";
    console.log(email.value);
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(address.value, 25) === true) {
    addressError.style.display = "none";
    console.log(address.value);
  } else {
    addressError.style.display = "block";
  }

  if (checkLength(fullname.value, 0) === true 
  && checkLength(subject.value, 10) === true 
  && checkMail(email.value) === true 
  && checkLength(address.value, 25) === true) {
    alert("Submission is successfull");
  }

  /*
  console.log(fullname.value);
  console.log(subject.value);
  console.log(email.value);
  console.log(address.value);*/
  // console.log(fullname.value, subject.value, email.value, address.value);

  //alert("Submission is successfull");
}

/*
function enableButton(event) {
  if (checkLength(fullname.value).length > 0 
  && checkLength(subject.value).length > 0 
  && checkMail(email.value).length > 0
  && checkLength(address.value).length > 0) {
    console.log("Value in all fields");
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}
*/
btn.disabled = true;

input.addEventListener("change", enableButton);

form.addEventListener("submit", validateForm);

function enableButton() {
  if (document.querySelector(".input_box").value === "") {
    btn.disabled = true;
    btn.style.background = "#3c5c6d";
  } else {
    btn.disabled = false;
    btn.style.background = "#2d1073";
  }
}

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function checkMail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

/*
  Regex codes (trials)
*/
// Letters and numbers: const regex = /^[a-zA-Z0-9 ]{10,}+$/;

// E-mail: const regEx = /@/;
// E-mail: const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

// Address: const regex = /\w\s\w/;
// Address: const regex = /^[a-zA-Z0-9 ]{5,}+$/;