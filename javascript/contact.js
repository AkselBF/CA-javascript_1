

/*
const fullName = document.querySelector("#fullname");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
const btn = document.querySelector("button");
const form = document.querySelector("form");
const users = document.querySelector(".users")

form.addEventListener("submit", (event) => {
  const user = {
    name: fullName.value,
    age: age.value,
    email: email.value,
  };
  createUser(user);
  event.preventDefault();
});

function createUser(user) {
  const element = document.createElement("div");
  const heading = document.createElement("h2");
  const ageParagraph = document.createElement("p");
  const emailParagraph = document.createElement("p");
  heading.textContent = user.name;
  ageParagraph.textContent = user.age;
  emailParagraph.textContent = user.email;
  element.append(heading, ageParagraph, emailParagraph);
  users.append(element);
}

document.addEventListener("keyup", (event) => {
  if (nameCheck() && ageCheck() && emailCheck()) {
    console.log("Value in all fields");
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});

function ageCheck() {
  const temp = parseInt(age.value);
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
*/