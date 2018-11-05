document.getElementsByTagName("td")[0].innerHTML = "<td>Jori</td>";
document.getElementsByTagName("td")[1].innerHTML = "<td>Bööm</td>";
document.getElementsByTagName("td")[2].innerHTML = "<td>YortyBoiMcFroYo</td>";
document.getElementsByTagName("td")[3].innerHTML = "<td>Asematie 12</td>";

const a = document.getElementsByTagName("tr")[0];
const q = document.createTextNode('Puhelinnumero');
const w = document.createElement("th");
w.appendChild(q);
a.appendChild(w);

const div = document.getElementsByTagName("tr")[1];
const e = document.createTextNode('050 65 745 95');
const r = document.createElement("td");
r.appendChild(e);
div.appendChild(r);

document.getElementsByTagName("td")[2].remove();
document.getElementsByTagName("th")[2].remove();