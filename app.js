function enableButtons() {
  let texto = document.getElementById("textInput").value;

  if (texto != "") {
    document.getElementById("Encrypt").removeAttribute("disabled");
    document.getElementById("Decrypt").removeAttribute("disabled");
  } else {
    document.getElementById("Encrypt").setAttribute("disabled", "true");
    document.getElementById("Decrypt").setAttribute("disabled", "true");
  }
}

function asignTextToElement(element, textElement) {
  let elementoHtml = document.querySelector(element);
  elementoHtml.innerHTML = textElement;
}

function encript() {
  let texto = document.getElementById("textInput").value;
  asignTextToElement("p", encripText(texto));
}

function decript() {}

function encripText(text) {
  let result = "resultadooo" + text;

  return result;
}
