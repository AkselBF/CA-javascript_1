/*
  Chosen book from main page/index.html
*/

console.log(localStorage.getItem("id"));

const detailContainer = document.querySelector(".book_details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const bookId = params.get("id");

const url = "https://gutendex.com/books?ids=" + bookId;
const loader = document.querySelector(".loader");

// Gets the chosen book from previous page
async function fetchBook() {
  loader.classList.add("show");
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  createHTML(data);
  loader.classList.remove("show");
}

fetchBook();

// Get the api data
function createHTML(data) {
  detailContainer.innerHTML = `
  <h1 class="specific_book_title">${data.results[0].title}</h1>
  <div class="details_image"
    style="background-image: url('${data.results[0].formats["image/jpeg"]}')">
  </div>
  <div class="details_author">
    Name: ${data.results[0].authors[0].name}
    Birth year: ${data.results[0].authors[0].birth_year}
    Death year: ${data.results[0].authors[0].death_year}
  </div>`;
}