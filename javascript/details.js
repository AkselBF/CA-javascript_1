console.log(localStorage.getItem("id"));
let id;

async function getBooks() {
  const response = await fetch(`https://gutendex.com/books?ids=${id}`);
  const data = await response.json();
  console.log(data);
}

getBooks();