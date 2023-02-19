console.log(localStorage.getItem("id"));
//let id;
const detailContainer = document.querySelector(".book_details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const bookId = params.get("id");

//const img = document.createElement("img");

const url = "https://gutendex.com/books?ids=" + bookId;
//const url = `https://gutendex.com/books?ids=${bookId}`;
//console.log(url);

async function fetchBook() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  createHTML(data);
}

fetchBook();

function createHTML(data) {
  detailContainer.innerHTML = `
  <h1 class="specific_book_title">${data.title}</h1>
  <div class="details_image"
    style="background-image: url('${data.formats}')">
  </div>
  <div class="details_author">
    ${data.authors}
  </div>`;
}

/*
async function getBooks() {
  const response = await fetch(`https://gutendex.com/books?ids=${id}`);
  const data = await response.json();
  console.log(data);
}

getBooks();
*/