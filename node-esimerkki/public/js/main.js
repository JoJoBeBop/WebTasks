'use strict';

const lomake = document.querySelector('#lomake');
const kuva = document.querySelector('#kuva');

const lahetaLomake = (evt) => {
  evt.preventDefault();
  const fd = new FormData(lomake);
  const asetukset = {
    method: 'post',
    body: fd,
  };

  fetch('/upload', asetukset).then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    if (json.mimeType.includes('image')) {
      kuva.src = json.url;
    } else if (json.mimeType.includes('audio')) {
      aud.src = json.url;
    } else {
      vid.src = json.url;
    }
  });
};

lomake.addEventListener('submit', lahetaLomake);
