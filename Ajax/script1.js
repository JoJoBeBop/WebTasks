const nappi = document.getElementById('hakunappi');
const haku = document.getElementById("hakuteksti");

function A(evt){
  console.log(haku.value);
  fetch("http://api.tvmaze.com/search/shows?q=" + haku.value)
    .then(response => response.json())
    .then(data => console.log(data));
}
nappi.addEventListener('click', A);




/*
const ul = document.getElementById('demo'); // Get the list where we will place our authors
const url = "http://api.tvmaze.com/search/shows?q=" + haku.value;*/