const nappi = document.getElementById('hakunappi');
const haku = document.getElementById('hakuteksti');

function A(evt) {

  fetch('http://api.tvmaze.com/search/shows?q=' + haku.value).
      then(function(response) {
        return response.json();
      }).
      then(function(json) {
        nayta(json);
        console.log(json);
        console.log(json.length);

        console.log(haku.value);

      });
}

//Klikkaukset
nappi.addEventListener('click', A);

//Enter toiminnaliseksi
const input = document.getElementById('hakuteksti');
input.addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById('hakunappi').click();
  }
});

function nayta(tulot) {

  //Tyhjentää
  const ulla = document.getElementById('tulostus');
  ulla.innerHTML = '';

  for (let i = 0; i <= 9; i++) {

    //Etsii tiedot
    const nimi = tulot[i].show.name;
    const linkki = tulot[i].show.url;
    const yhteenveto = tulot[i].show.summary;
    const genre = tulot[i].show.genres;

    //Printtaa rivit, jonka sisälle sisältö tulee
    const divide = document.querySelector('.tulostusDiv');
    const divi = '<div class="rivi"></div>';
    divide.innerHTML += divi;

    //Katsoo jos kuva on Null ja printtaa
    if (tulot[i].show.image != null ){
      let kuva = tulot[i].show.image.medium;
      const div5 = divide.getElementsByTagName('div')[i];
      const html5 = '<img src="' + kuva + '">';
      div5.innerHTML += html5;

    } else {
      const kuva = "https://cdn.releases.com/img/image/6571e6ee-a45a-4b44-b736-9cefa0493180.jpg/300"
      const div5 = divide.getElementsByTagName('div')[i];
      const html5 = '<img src="' + kuva + '">';
      div5.innerHTML += html5;
    }

    //Muu sisältö
    const div = divide.getElementsByTagName('div')[i];
    const html = '<h4 class="teksti">' + nimi + '</h4>';
    div.innerHTML += html;

    const div3 = divide.getElementsByTagName('div')[i];
    const html3 = yhteenveto;
    div3.innerHTML += html3;

    const div2 = divide.getElementsByTagName('div')[i];
    const html2 = '<a href= "' + linkki + '"  class="teksti">Link to website</a>';
    div2.innerHTML += html2;

    const div4 = divide.getElementsByTagName('div')[i];
    const html4 = '<p class="teksti">' + genre + '</p>';
    div4.innerHTML += html4;


  }

}