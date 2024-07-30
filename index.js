function encriptarTexto() {
  let textoSinEncriptar = document.getElementById("texto-sin-encriptar").value;

  if (!validarTexto(textoSinEncriptar)) return;

  let textoEncriptado = "";
  for (let i = 0; i < textoSinEncriptar.length; i++) {
    let char = textoSinEncriptar[i];
    if (char === "a") {
      textoEncriptado += "ai";
    } else if (char === "e") {
      textoEncriptado += "enter";
    } else if (char === "i") {
      textoEncriptado += "imes";
    } else if (char === "o") {
      textoEncriptado += "ober";
    } else if (char === "u") {
      textoEncriptado += "ufat";
    } else {
      textoEncriptado += char;
    }
  }

  mostrarResultado(textoEncriptado, "Mensaje Encriptado:");
}

function desencriptarTexto() {
  let textoEncriptado = document.getElementById("texto-sin-encriptar").value;

  if (!validarTexto(textoEncriptado)) return;

  let textoDesencriptado = "";
  for (let i = 0; i < textoEncriptado.length; i++) {
    if (textoEncriptado.slice(i, i + 2) === "ai") {
      textoDesencriptado += "a";
      i += 1;
    } else if (textoEncriptado.slice(i, i + 5) === "enter") {
      textoDesencriptado += "e";
      i += 4;
    } else if (textoEncriptado.slice(i, i + 4) === "imes") {
      textoDesencriptado += "i";
      i += 3;
    } else if (textoEncriptado.slice(i, i + 4) === "ober") {
      textoDesencriptado += "o";
      i += 3;
    } else if (textoEncriptado.slice(i, i + 4) === "ufat") {
      textoDesencriptado += "u";
      i += 3;
    } else {
      textoDesencriptado += textoEncriptado[i];
    }
  }

  mostrarResultado(textoDesencriptado, "Mensaje Desencriptado:");
}

function copiarTexto() {
  let textoEncriptado = document.querySelector(".texto-resultado");
  let range = document.createRange();
  range.selectNode(textoEncriptado);
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); // to deselect

  // Muestra el mensaje de copiado
  const mensajeCopiado = document.getElementById("mensaje-copiado");
  mensajeCopiado.classList.add("show");

  // Oculta el mensaje de copiado después de 2 segundos
  setTimeout(() => {
    mensajeCopiado.classList.remove("show");
  }, 2000);
}

function mostrarResultado(texto, titulo) {
  let textoResultado = document.querySelector(".texto-resultado");
  let placeholderImg = document.querySelector(".caja-encriptada-img");
  let placeholderText = document.querySelector(".caja-encriptada-texto");
  let btnCopiar = document.querySelector(".btn-copiar");
  let tituloMensaje = document.querySelector(".caja-encriptada-parrafo");
  let contenedorTextoEncriptado = document.querySelector(".contenedor-texto-encriptado h3");

  if (texto.trim() === "") {
    textoResultado.style.display = "none";
    placeholderImg.style.display = "block";
    placeholderText.style.display = "block";
    tituloMensaje.style.display = "block";
    btnCopiar.style.display = "none";
  } else {
    textoResultado.style.display = "block";
    textoResultado.textContent = texto;
    placeholderImg.style.display = "none";
    placeholderText.style.display = "none";
    tituloMensaje.style.display = "none";
    btnCopiar.style.display = "block";
    contenedorTextoEncriptado.textContent = titulo;
  }
}

function validarTexto(texto) {
  const textoError = document.getElementById("texto-error");
  const regex = /^[a-z\s]+$/;

  if (!regex.test(texto)) {
    textoError.classList.add("show");

    // Oculta el mensaje de error después de 2 segundos
    setTimeout(() => {
      textoError.classList.remove("show");
    }, 2000);

    return false;
  }
  return true;
}
