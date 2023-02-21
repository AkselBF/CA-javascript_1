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
  //console.log(data.results[0].formats["image/jpeg"])
  detailContainer.innerHTML = `
  <h1 class="specific_book_title">${data.results[0].title}</h1>
  <div class="details_image"
    style="background-image: url('${data.results[0].formats["image/jpeg"]}')">
  </div>
  <div class="details_author">
    ${data.results[0].authors[0].name}
    ${data.results[0].authors[0].birth_year}
    ${data.results[0].authors[0].death_year}
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