
const textencrypt = document.getElementById("encriptar")
const textdecrypt = document.getElementById("desencriptar")
const copy = document.getElementById("copiar")


textencrypt.addEventListener("click", encrypt);

function encrypt() {

    let text = document.getElementById("mensaje").value;
    let arreglo = text.split("");
    for (let x = 0; x < arreglo.length; x++) {
        if (arreglo[x] == "a") {
            arreglo[x]="ai";
        }
        if (arreglo[x] == "e") {
            arreglo[x]="enter";
        }
        if (arreglo[x] == "i") {
            arreglo[x]="imes";
        }
        if (arreglo[x] == "o") {
            arreglo[x]="ober";
        }
        if (arreglo[x] == "u") {
            arreglo[x]="ufat";
        }
    } 
    let encriptado = arreglo.join("");
        
    document.querySelector("#textofinal").innerHTML = encriptado;

    let botonCopiar = document.getElementById("copiar")
    botonCopiar.style.display = "block";
}


textdecrypt.addEventListener("click", decrypt);

function decrypt() {

    let text = document.getElementById("mensaje").value;
    
    let desencriptado = text.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u")
    
    document.querySelector("#textofinal").innerHTML = desencriptado;

    let botonCopiar = document.getElementById("copiar")
    botonCopiar.style.display = "block";
}

copy.addEventListener("click", copiarTexto);

function copiarTexto() {
    let texto = document.getElementById("textofinal").textContent;
    navigator.clipboard.writeText(texto);
}