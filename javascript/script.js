/*
  Public api url (different ones)
*/

// "https://gutendex.com/books"
// "https://gutendex.com/books/?page=2"

const url = "https://gutendex.com/books/";

let page = 1;
let searchValue = "";
const loader = document.querySelector(".loader");

async function getBooks() {
  loader.classList.add("show");
  const response = await fetch(url + "?page=" + page);
  const result = await response.json();
  console.log(result);

  loader.classList.remove("show");
}

async function getSearch() {
  loader.classList.add("show");
  const response = await fetch(url + "?search=" + searchValue);
  const result = await response.json();
  console.log(result);

  result.results.forEach((book) => addBook(book));
  loader.classList.remove("show");
}

//getBooks();

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

/*
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
*/