/*
  Public api url (different ones)
*/

// "https://gutendex.com/books"
// "https://gutendex.com/books/?page=2"

const url = "https://gutendex.com/books/";

let page = 1;
let searchValue = "";

async function getBooks() {
  const response = await fetch(url + "?page=" + page);
  const result = await response.json();
  console.log(result);
}

async function getSearch() {
  const response = await fetch(url + "?search=" + searchValue);
  const result = await response.json();
  console.log(result);

  result.results.forEach((book) => addBook(book));
}
// If an image doesn't show up, try the "try" and "catch" method.

getBooks();

function addBook(book) {
  const container = document.querySelector(".books");
  const bookContainer = document.createElement("div");
  const bookName = document.createElement("h2");
  const bookLink = document.createElement("a");
  const img = document.createElement("img");
  img.src = book.formats["image/jpeg"];

  bookName.textContent = book.title;
  bookContainer.append(bookName, img);
  container.append(bookContainer);

  bookLink.href = `html/details.html?id=${book.id}`;
  bookLink.append(img);
  bookContainer.append(bookLink);
  bookLink.addEventListener("click", () => {
    localStorage.setItem("id", book.id);
    console.log(localStorage.getItem("id"));
  });

  /*
  const book_details = json.results;

  book_details.forEach(function(book) {
    bookContainer.innerHTML += `
    <a href="details.html?id=${book.id}" class="specific_book">
      <div class="image"></div>
      <div class="details">
        <h3 class="name">${book.name}</h3>
      </div>
    </a>`;
  });*/
  
  document.querySelector("body").append(bookContainer);
}

const prev = document.querySelector("#previous");
const next = document.querySelector("#next");
const searchBtn = document.querySelector("#search");

searchBtn.addEventListener("click", () => {
  searchValue = document.querySelector("#search-input").value;
  console.log(searchValue);
  document.querySelector(".books").innerHTML = "";
  getSearch();
});

prev.addEventListener("click", () => {
  page--;
  document.querySelector(".books").innerHTML = "";

  getBooks();
});

next.addEventListener("click", () => {
  page++;
  document.querySelector(".books").innerHTML = "";

  getBooks();
});



/*
const loader = document.querySelector(".loading p");

let page = 4;
let searchValue = "";

async function getCharacters() {
  const startTime = Date.now();

  loader.classList.add("show");
  const response = await fetch(url + "s?page=" + page);
  const result = await response.json();
  console.log(result);

  result.data.forEach((character) => addCharacter(character));
  loader.classList.remove("show");

  document.querySelector(".time").innerHTML = 
  "Loading time: " + (Date.now() - startTime) + " ms";
  console.log(Date.now() - startTime);
}

async function getSearch() {
  loader.classList.add("show");
  const response = await fetch(url + "?name=" + searchValue);
  const result = await response.json();
  console.log(result);

  result.data.forEach((character) => addCharacter(character));
  loader.classList.remove("show");
}

getCharacters();

function addCharacter(character) {
  const container = document.querySelector(".container");
  const characterContainer = document.createElement("div");
  const characterName = document.createElement("h3");
  const img = document.createElement("img");
  img.src = character.imageUrl;

  characterName.textContent = character.name;
  characterContainer.append(characterName, img);
  container.append(characterContainer);
}

const prev = document.querySelector("#previous");
const next = document.querySelector("#next");
const searchBtn = document.querySelector("#search");

searchBtn.addEventListener("click", () => {
  searchValue = document.querySelector("#search-input").value;
  console.log(searchValue);
  document.querySelector(".container").innerHTML = "";
  getSearch();
});

prev.addEventListener("click", () => {
  page--;
  document.querySelector(".container").innerHTML = "";

  getCharacters();
});

next.addEventListener("click", () => {
  page++;
  document.querySelector(".container").innerHTML = "";

  getCharacters();
});
*/