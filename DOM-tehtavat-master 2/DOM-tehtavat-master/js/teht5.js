window.onload = setInterval(Kello,1000);

function Kello() {

    let d = new Date();

    let tunti = d.getHours();
    let mins = d.getMinutes();
    let seks = d.getSeconds();

    //Funktion nollaPois avulla nollat pois edestä
    mins = nollaPois(mins);
    seks = nollaPois(seks);

    document.getElementById('kello').innerHTML = tunti + "." + mins + "." + seks;

}

function nollaPois(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}