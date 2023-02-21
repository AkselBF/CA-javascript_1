// Form and submission
const fullName = document.querySelector("#fullname");
const nameError = document.querySelector("#fullname_error");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject_error");

const email = document.querySelector("#email");
const mailError = document.querySelector("#email_error");

const address = document.querySelector("#address");
const addressError = document.querySelector("#address_error");

const btn = document.querySelector("button");
const form = document.querySelector("form");
const users = document.querySelector(".users")

form.addEventListener("submit", (event) => {
  const user = {
    name: fullName.value,
    subject: subject.value,
    email: email.value,
    address: address.value,
  };
  
  console.log(user);
  alert(user);
  event.preventDefault();
  //createUser(user);
});

function validateForm() {
  preventDefault();

  if (checkLength(fullName.value) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkLength(subject.value) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkLength(email.value) === true) {
    mailError.style.display = "none";
  } else {
    mailError.style.display = "block";
  }

  if (checkLength(address.value) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
}

function createUser(user) {
  const element = document.createElement("div");
  const heading = document.createElement("h3");
  const subjectParagraph = document.createElement("p");
  const emailParagraph = document.createElement("p");
  const addressParagraph = document.createElement("p");
  heading.textContent = user.name;
  ageParagraph.textContent = user.subject;
  emailParagraph.textContent = user.email;
  addressParagraph.textContent = user.address;
  element.append(heading, subjectParagraph, emailParagraph, addressParagraph);
  users.append(element);
}

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

document.addEventListener("keyup", (event) => {
  if (nameCheck() && subjectCheck() && emailCheck() && addressCheck()) {
    console.log("Value in all fields");
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});

function nameCheck() {
  const regex = /[a-zA-Z ]+$/;
  return regex.test(fullName.value);
}

function subjectCheck() {
  for (let i = 0; i < subject.value; i++) {
    if (subject.value > 10) {
      return true;
    } else {
      return false;
    }
  }
  /*
  const temp = parseInt(subject.value);
  if (temp >= 1 && temp <= 130) {
    return true;
  }
  return false;*/
}

function emailCheck() {
  const regEx = /\S+@\S+\.\S+/;
  const matchedPattern = regEx.test(email.value);
  return matchedPattern;
  /*
  const regEx = /@/;
  return regEx.test(email.value);*/
}

function addressCheck() {
  const adrName = /\w\s\w/;
  return adrName.test(address.value);
}

/*
const form = document.querySelector(".contact_form");

form.onsubmit = function(event) {
  event.preventDefault();

  console.log(event);

  const name = document.querySelector("#")
}*/