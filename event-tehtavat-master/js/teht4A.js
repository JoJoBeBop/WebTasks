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


for (let j = 0; j < pics.length; j++) {
  const kuva = document.createElement('img');
  const li = document.createElement('li');
  const isoKuva = document.querySelector('#kuvaPaikka');

  kuva.src = pics[j].thumb;
  li.appendChild(kuva);
  document.querySelector('#lista').appendChild(li);

  li.addEventListener('click', (evt) => {
    document.querySelector('#kuvaPaikka').innerHTML = '<img src="' + pics[j].big + '">';
    //CSS
    document.querySelector('#kuvaPaikka').style = "display: block;";

  });

  isoKuva.addEventListener("click", (poista) => {
    document.querySelector('#kuvaPaikka').style = "display: none;";
    });


}








/*

document.querySelector('li:nth-child(1)').addEventListener("click", print1);
document.querySelector('li:nth-child(2)').addEventListener("click", print2);
document.querySelector('li:nth-child(3)').addEventListener("click", print3);

function print1() {
  document.querySelector('#kuvaPaikka').innerHTML = '<img src="' + pics[0].big + '">';
}

function print2() {
  document.querySelector('#kuvaPaikka').innerHTML = '<img src="' + pics[1].big + '">';
}

function print3() {
  document.querySelector('#kuvaPaikka').innerHTML = '<img src="' + pics[2].big + '">';
}

document.querySelector('#testi').style = "color: #eee; background-color: #222; padding: 3rem;";

*/








