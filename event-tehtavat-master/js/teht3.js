function laske() {

  let numero1 = parseFloat(document.getElementById("num1").value);
  let numero2 = parseFloat(document.getElementById("num2").value);
  let symb = document.getElementById("drop").value;

  if (symb === "+"){
    document.getElementById("vastaus").innerHTML = numero1 + numero2;

  } else if (symb === "-"){
    document.getElementById("vastaus").innerHTML = numero1 - numero2;

  }else if (symb === "*"){
    document.getElementById("vastaus").innerHTML = numero1 * numero2;

  }else if (symb === "/"){
    document.getElementById("vastaus").innerHTML = numero1 / numero2;

  }


}