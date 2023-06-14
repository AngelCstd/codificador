const sinTexto = document.querySelectorAll(".sinTexto"),
conTexto = document.querySelectorAll(".conTexto"),
encriptar = document.querySelector("#encriptar"),
desencriptar = document.querySelector("#desencriptar"),
textIn = document.querySelector("#textIn"),
textOut = document.querySelector("#textOut"),
copiarButon = document.querySelector("#copiar");

function mostrar(){
    sinTexto.forEach((element)=>{
        element.classList.add("ocultar")
    });
    conTexto.forEach((element)=>{
        element.classList.remove("ocultar")
    });
}
function desencriptarTexto(texto) {
    texto = texto.replace(/ufat/g, "u");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/ai/g, "a");
    
    return texto
};
function encriptarTexto(texto) {
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    return texto
};

function copiarPortapapeles(texto) {
    navigator.clipboard.writeText(texto)
}

encriptar.addEventListener("click", (e)=>{
    mostrar()
    textOut.value = encriptarTexto(textIn.value)
});

desencriptar.addEventListener("click", (e)=>{
    mostrar()
    textOut.value = desencriptarTexto(textIn.value)
})

copiarButon.addEventListener("click", ()=>{
    copiarPortapapeles(textOut.value)
})
