const botonCopiar = document.getElementById("copy");
botonCopiar.style.display = "none";
const cuadro = document.getElementById("resultado");
cuadro.style.display ="none";

function guardarTexto(){
    
    let texto = []
    let textoElement = document.getElementById("text");

    for(let i = 0 ; i <= textoElement.value.length; i++){
        texto.push(textoElement.value.charAt(i));
    }

    return texto;

}

function mostrarTexto(texto){
    if(texto.value != 0){
        const imagen = document.getElementById("persona");
        const excl = document.getElementById("textoPequeño")
        imagen.style.display = "none";
        excl.style.display = "none";
        const encriptado = document.getElementById("resultado");
        encriptado.style.display="block";
        encriptado.value = texto.value;
        encriptado.innerHTML= encriptado.value;
        botonCopiar.style.display = "block";
    }
}

function encriptarTexto(){

    let textoEncriptado = guardarTexto();
    let resultado = document.getElementById("resultado");

    for(let letra = 0 ; letra <= textoEncriptado.length; letra++){
        if(textoEncriptado[letra] == "a"){
            textoEncriptado[letra] = "ai";
        }else if(textoEncriptado[letra] == "e"){
            textoEncriptado[letra] = "enter";
        }else if(textoEncriptado[letra] == "i"){
            textoEncriptado[letra] = "imes";
        }else if(textoEncriptado[letra] == "o"){
            textoEncriptado[letra] = "ober";
        }else if(textoEncriptado[letra] == "u"){
            textoEncriptado[letra] = "ufat";
        }
    }
    textoEncriptado = textoEncriptado.toString().split(",").join("");
    resultado.value=textoEncriptado;
    mostrarTexto(resultado);
}

function encriptarTextoPorTecla(event){
    if(event.keyCode === 13){
        encriptarTexto();
    }
}

function desencriptarTexto(){

    let textoDesencriptado = document.getElementById("text"); 
    textoDesencriptado=textoDesencriptado.value;
    var cambio = true;
    let resultado = document.getElementById("resultado");

    while(cambio){
        if(textoDesencriptado.includes("ai")){
            textoDesencriptado = textoDesencriptado.replace("ai", "a");
        }else if(textoDesencriptado.includes("enter")){
            textoDesencriptado = textoDesencriptado.replace("enter", "e");
        }else if(textoDesencriptado.includes("imes")){
            textoDesencriptado = textoDesencriptado.replace("imes", "i");
        }else if(textoDesencriptado.includes("ober")){
            textoDesencriptado = textoDesencriptado.replace("ober", "o");
        }else if(textoDesencriptado.includes("ufat")){
            textoDesencriptado = textoDesencriptado.replace("ufat", "u");
        }else{
            cambio = false;
        }
    }

    resultado.value = textoDesencriptado;
    mostrarTexto(resultado);
}

function desencriptarTextoPorTecla(event){
    if(event.keyCode === 13){
        desencriptarTexto();
    }
}

function copiar(){
    let resultado = document.getElementById("resultado");

    const elemento = resultado;

    const rango = document.createRange();
    rango.selectNode(elemento);

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(rango);

    document.execCommand("copy");

    window.getSelection().removeAllRanges();
}