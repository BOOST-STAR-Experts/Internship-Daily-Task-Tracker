const api_url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const btn = document.getElementById("btn");
const input = document.getElementById("word");
btn.addEventListener("click", () => {
  btnClick();
  input.value = "";
});

function btnClick() {
  const inputWord = input.value;
  if (inputWord == "") {
    result.innerHTML = `
    <p>Please Enter a word!</p>
    `;
  } else {
    fetch(api_url + inputWord)
      .then((response) => response.json())
      .then((res) => {
        const synonyms =
          res[0].meanings[0].synonyms[0] !== undefined
            ? `<p>Synonym: ${res[0].meanings[0].synonyms[0]}</p>`
            : "";
        result.innerHTML = `
            <h1 id="input">${inputWord}</h1>
                <p>${res[0].meanings[0].partOfSpeech}</p>
                ${synonyms}
                <p>Definition: ${
                  res[0].meanings[0].definitions[0].definition
                }</p>
                <p id="example">${
                  res[0].meanings[0].definitions[0].example || ""
                }</p>
            `;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
}
