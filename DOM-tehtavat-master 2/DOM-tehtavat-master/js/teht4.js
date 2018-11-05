const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

let i;



for (i = 0; i < kuvat.length; i++) {



    const uli = document.querySelector("ul");

    const photo = document.createElement("img");
    photo.src = kuvat[i];

    const li = document.createElement('li');
    li.appendChild(photo);

    uli.appendChild(li);



}

document.querySelector("ul").style = "list-style-type: none;";
i = 0;
/*

for (i = 0; i < kuvat.length; i++) {
    document.querySelector("li:nth-child(i)").style = "list-style-type: none;";

}
*/

document.querySelector("li:nth-child(2n+1)").style = "opacity: 0.5;";

