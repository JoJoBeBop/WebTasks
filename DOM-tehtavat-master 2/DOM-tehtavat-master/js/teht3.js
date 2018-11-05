let kuvat = [
    'http://placekitten.com/321/240',
    'http://placekitten.com/320/241',
    'http://placekitten.com/322/242',
    'http://placekitten.com/321/240',
    'http://placekitten.com/331/240',
];

let i;
let photos = "";
/*

const ul = document.querySelector("ul");

const html =
    `<li>
            const[i]
    </li> `;
ul.innerHTML = html;
*/
/*

for (i = 0; i <= 5; i++) {
    photos = "<li>" + kuvat[I] + "</li>";
    document.getElementById("name").innerHTML += photos;
}


for (i = 0; i <= 5; i++) {



    const ul = document.querySelector("#jotain");

    const html =
           `<li>
                  <img src="kuvat[i]">
             </li> `;
    ul.innerHTML = html;



kyrpa = kuvat;

for (i = 1; i <= 5; i++) {
    const div = document.querySelector('#jotain');          // haetaan elementti, jonka id on esimerkki
    const html =                                               // tehdään monirivinen merkkijono, huomaa backtick merkkijonon ympärillä (gravis)
        `<p>
            Tässä on kappale tekstiä, jossa on kuva.

         </p>`;

}
div.innerHTML = html;


}

*/

/*

for (i = 1; i <= 5; i++) {

    let kuvat = [
        'http://placekitten.com/321/240',
        'http://placekitten.com/320/241',
        'http://placekitten.com/322/242',
        'http://placekitten.com/321/240',
        'http://placekitten.com/331/240',
    ];


    const ul = document.querySelector("#jotain");

    const html = `<li><img src="http://placekitten.com/321/240"></li> `;
    ul.innerHTML = html;



let list = document.getElementsByTagName("ul")[0];
list.getElementsByTagName("li")[0].innerHTML = "Milk";

const pol = document.getElementsByTagName('UL');
const html = `<p> Tässä on kappale tekstiä, jossa on kuva."></p>`;
pol.innerHTML = html;

}
*/


for (i = 1; i <= kuvat.length; i++) {
    photo.src = kuvat[i];

    document.getElementById('jotain').innerHTML += "<li>" + "<img src=\"http://placekitten.com/321/240\">" ;
}


