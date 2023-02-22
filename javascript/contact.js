// Form and submission
/*
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

document.addEventListener("keyup", (event) => {
  if (nameCheck() && subjectCheck() && emailCheck() && addressCheck()) {
    console.log("Value in all fields");
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});

function nameCheck() {
  //const regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  //return regex.test(fullName.value);
  const regex = /\w\s\w/;
  return regex.test(fullName.value);
}

function subjectCheck() {
  //const subCode = /^[a-zA-Z0-9 ]{10,}+$/;
  //return subCode.test(address.value);
  const temp = parseInt(subject.value);
  if (temp >= 1 && temp <= 130) {
    return true;
  }
  return false;
}

function emailCheck() {
  //const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  //return regEx.test(email.value);
  const regEx = /@/;
  return regEx.test(email.value);
}

function addressCheck() {
  //const adrName = /^[a-zA-Z0-9 ]{5,}+$/;
  //return adrName.test(address.value);
  const regex = /\w\s\w/;
  return regex.test(fullName.value);
}

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

function validateForm(event) {
    event.preventDefault();

    if (checkLength(fullname.value, 0) === true) {
        fullnameError.style.display = "none";
    } else {
        fullnameError.style.display = "block";
    }

    if (checkLength(subject.value, 10) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(address.value, 25) === true) {
      addressError.style.display = "none";
    } else {
      addressError.style.display = "block";
    }

    console.log(fullname.value, subject.value, email.value, address.value);
    alert("Successfull submission");
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}