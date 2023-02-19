// Form and submission

/*
const fullName = document.querySelector("#fullname");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
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
  createUser(user);
  event.preventDefault();
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

function ageCheck() {
  const temp = parseInt(subject.value);
  if (temp >= 1 && temp <= 130) {
    return true;
  }
  return false;
}

function nameCheck() {
  const regex = /\w\s\w/;
  return regex.test(fullName.value);
}

function emailCheck() {
  const regEx = /@/;
  return regEx.test(email.value);
}

function addressCheck() {
  //const regex = //;
  return regex.test(address.value);
}
*/