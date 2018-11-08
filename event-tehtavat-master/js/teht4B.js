const pics = [
  {
    thumb: 'http://www.fillmurray.com/100/100',
    big: 'http://www.fillmurray.com/640/480',
  },
  {
    thumb: 'http://lorempixel.com/100/100/sports/1/',
    big: 'http://lorempixel.com//640/480/sports/1/',
  },
  {
    thumb: 'https://placeimg.com/100/100/tech',
    big: 'https://placeimg.com/640/480/tech',
  },
];

//Thumbnailit
for (let i = 0; i < pics.length; i++){
  document.querySelector('ul').innerHTML += '<li>' + '<img src="' + pics[i].thumb + '">';

}

document.querySelector('li:nth-child(1)').addEventListener("click", print1);
document.querySelector('li:nth-child(2)').addEventListener("click", print2);
document.querySelector('li:nth-child(3)').addEventListener("click", print3);

function print1() {
  document.querySelector('#kuvaPaikka').innerHTML = '<img src="' + pics[0].big + '">';
  document.querySelector('div').setAttribute('class', 'visible');

}

function print2() {
  document.querySelector('#kuvaPaikka').innerHTML = '<img src="' + pics[1].big + '">';
  document.querySelector('div').setAttribute('class', 'visible');

}

function print3() {
  document.querySelector('#kuvaPaikka').innerHTML = '<img src="' + pics[2].big + '">';
  document.querySelector('div').setAttribute('class', 'visible');

}


//CSS Piilotus
document.querySelector('#kuvaPaikka').addEventListener("click", piilota);

function piilota() {
  document.querySelector('div').setAttribute('class', 'hidden');

}


//document.querySelector('#testi').style = "color: #eee; background-color: #222; padding: 3rem;";
//  document.querySelector('#testi').setAttribute('class', 'vari');










