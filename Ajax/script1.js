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
        console.log(haku.value);

      });
}

//Klikkaukset
nappi.addEventListener('click', A);

//Press enter to search
const input = document.getElementById('hakuteksti');
input.addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById('hakunappi').click();
  }
});

function nayta(tulot) {

  //Tyhjentää
  const ulla = document.getElementById('uli');
  ulla.innerHTML = '';

  for (let i = 0; i <= 9; i++) {


    //Etsii
    const nimi = tulot[i].show.name;
    const linkki = tulot[i].show.url;
    const yhteenveto = tulot[i].show.summary;
    const genre = tulot[i].show.genres;






    //Printtaa

    const divide = document.querySelector('.tulostusDiv');
    const divi = '<div>';
    divide.innerHTML += divi;

    //Katsoo jos kuva on Null
    if (tulot[i].show.image != null ){
      let kuva = tulot[i].show.image.medium;
      const div5 = document.querySelector('ul');
      const html5 = '<img src="' + kuva + '">';
      div5.innerHTML += html5;

    } else {
      const kuva = "https://cdn.releases.com/img/image/6571e6ee-a45a-4b44-b736-9cefa0493180.jpg/300"
      const div5 = document.querySelector('ul');
      const html5 = '<img src="' + kuva + '">';
      div5.innerHTML += html5;
    }

    const div = document.querySelector('ul');
    const html = '<li>' + nimi + '</li>';
    div.innerHTML += html;

    const div3 = document.querySelector('ul');
    const html3 = '<li>' + yhteenveto + '</li>';
    div3.innerHTML += html3;

    const div2 = document.querySelector('ul');
    const html2 = '<li><a href= "' + linkki + '">Link to website</a></li>';
    div2.innerHTML += html2;

    const div4 = document.querySelector('ul');
    const html4 = '<li>' + genre[0] + ', ' + genre[1] + ', ' + genre[2] +
        '</li> -------------------------- <br>';
    div4.innerHTML += html4;

    const divide1 = document.querySelector('.tulostusDiv');
    const divi1 = '</div>';
    divide1.innerHTML += divi1;

  }
  console.log('fff');

}

console.log('DDDD');
