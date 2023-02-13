/*
  Public api url
*/
const url = "https://gutendex.com/";

async function getBooks() {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
}

/*
async function getCharacters() {
  loader.classList.add("show");
  const response = await fetch(url + "s?page=" + page);
  const result = await response.json();
  console.log(result);

  result.data.forEach((character) => addCharacter(character));
  loader.classList.remove("show");
}
*/