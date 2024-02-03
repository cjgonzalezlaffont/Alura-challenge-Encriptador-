let area2msgNotFound = "No message was found.";
let area2msgQuestion = "What text would you like to encrypt or decrypt?";

showInitials(true);

function enableButtons() {
  let texto = document.getElementById("textInput").value;
  if (texto != "") {
    document.getElementById("btnEncrypt").removeAttribute("disabled");
    document.getElementById("btnDecrypt").removeAttribute("disabled");
  } else {
    document.getElementById("btnEncrypt").setAttribute("disabled", "true");
    document.getElementById("btnDecrypt").setAttribute("disabled", "true");
    asignTextToElement("p", "");
  }
}

function asignTextToElement(element, textElement) {
  let elementoHtml = document.querySelector(element);
  elementoHtml.innerHTML = textElement;
}

function encrypt() {
  let text = document.getElementById("textInput").value;
  showInitials(false);
  asignTextToElement("p", encryptText(text));
}

function decrypt() {
  let text = document.getElementById("textInput").value;
  showInitials(false);
  asignTextToElement("p", decryptText(text));
}

function showInitials(value) {
  if (value === true) {
    document.getElementById("imgPuppet").removeAttribute("hidden");
    asignTextToElement("h3", area2msgNotFound);
    asignTextToElement("h6", area2msgQuestion);
  } else {
    document.getElementById("imgPuppet").setAttribute("hidden", "true");
    asignTextToElement("h3", "");
    asignTextToElement("h6", "");
  }
}

function encryptText(text) {
  let result = "";
  for (let index = 0; index < text.length; index++) {
    switch (text[index]) {
      case "a":
        result += "ai";
        break;
      case "e":
        result += "enter";
        break;
      case "i":
        result += "imes";
        break;
      case "o":
        result += "ober";
        break;
      case "u":
        result += "ufat";
        break;
      default:
        result += text[index];
        break;
    }
  }
  return result;
}

function decryptText(text) {
  let result = "";
  for (let index = 0; index < text.length; index++) {
    switch (text[index]) {
      case "a":
        result += "a";
        index++;
        break;
      case "e":
        result += "e";
        index = index + 4;
        break;
      case "i":
        result += "i";
        index = index + 3;
        break;
      case "o":
        result += "o";
        index = index + 3;
        break;
      case "u":
        result += "u";
        index = index + 3;
        break;
      default:
        result += text[index];
        break;
    }
  }
  return result;
}

/*
Durante estas cuatro semanas, vamos a trabajar en una aplicación que encripta textos, 
así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la 
encriptación utilizada.

Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver 
una palabra encriptada para su versión original.

Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos para inserción del texto que será encriptado o desencriptado, y 
el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla.

Extras:
Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea 
que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
*/
