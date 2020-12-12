// TODO: Autocomplete the input with AJAX calls.
// GET https://wagon-dictionary.herokuapp.com/autocomplete/:stem
// https://wagon-dictionary.herokuapp.com/autocomplete/u
// https://wagon-dictionary.herokuapp.com/autocomplete/un
// https://wagon-dictionary.herokuapp.com/autocomplete/und
// https://wagon-dictionary.herokuapp.com/autocomplete/unde
// https://wagon-dictionary.herokuapp.com/autocomplete/under
const input = document.getElementById("search");
const matchList = document.getElementById("results");

const searchPlace = (event) => {
  matchList.innerHTML = "";
  const query = event.target.value;
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${query}`)
    .then((response) => response.json())
    .then((data) => {
      data.words &&
        data.words.forEach((word) => {
          // console.log(result);
          const search = `<li>${word}</li>`;
          matchList.insertAdjacentHTML("beforeend", search);
        });
    });
};

input.addEventListener("keyup", searchPlace);
