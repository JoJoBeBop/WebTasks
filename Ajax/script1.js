const nappi = document.getElementById('hakunappi');
const haku = document.getElementById("hakuteksti");

function A(evt){
  console.log(haku.value);
  fetch("http://api.tvmaze.com/search/shows?q=" + haku.value)


      .then(function(response) {
        return response.text();


      })
      .then(function(html) {
        let toHTML = new DOMParser();
        let parse = toHTML.parseFromString(html, "text/html");


        console.log(parse);
      })
      .catch(function(errorLog) {
        console.log("ERROR : ", errorLog);
      });
}
nappi.addEventListener('click', A);






/*
const ul = document.getElementById('demo'); // Get the list where we will place our authors
const url = "http://api.tvmaze.com/search/shows?q=" + haku.value;*/
/*

Toimii:

    function A(evt){
      console.log(haku.value);
      fetch("http://api.tvmaze.com/search/shows?q=" + haku.value)


      .then(function(response) {
        return response.json();

      })
      .then(function(data) {
        console.log(data)
      })
    }
nappi.addEventListener('click', A);
*/
