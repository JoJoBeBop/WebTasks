let div = document.getElementById('kuva');

div.onmouseover = nayta;
div.onmouseout = piilota;

function nayta() { document.getElementById("id").style.visibility="visible"; }
function piilota() { document.getElementById('id').style.visibility="hidden"; }
