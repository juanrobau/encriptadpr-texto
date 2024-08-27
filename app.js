const d = document;
const textArea = d.querySelector(".form__input");
const imagenMuneco = d.querySelector (".resultado__img");
const loaderLoading = d.querySelector(".loader");
const resultadoTitulo = d.querySelector(".resultado__titulo"); 
const resultadoTexto = d.querySelector(".resultado__texto");
const botonEncriptar = d.querySelector(".btn__encriptar");
const botonDesencriptar = d.querySelector(".btn__desencriptando");
const botonCopiar = d.querySelector(".boton__copiar");





const llaves = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
 ];


 function validarTexto(texto) {
    let caracteres = /^[a-z\s]*$/
        
    if (texto.trim() === "") {
        alert("Ingrese un mensaje para encriptar o desencriptar");
        return false;
    }
    if (!caracteres.test(texto)) {
        alert("No se permiten caracteres especiales ni mayúsculas");
        return false;
    }

    
    return true;

    
}

 function encriptarMensaje(mensaje){
    if(validarTexto(mensaje)){
        let mensajeEncriptado = "";
        for(let i = 0; i < mensaje.length; i++){     
            let letra = mensaje[i];
            let encriptada = letra;
            for(let j = 0; j < llaves.length; j++){
                if(letra == llaves[j][0]){
                    encriptada = llaves[j][1];
                    //reemplaza la letra porsu equivalente encriptado
                    break;//term el buclcuando se cumpla la correspondencia.
                }
    
            }
    
            mensajeEncriptado += encriptada;
        }
        
        return mensajeEncriptado;
    }
 }


 function desencriptarMensaje(mensaje){
    if(validarTexto(mensaje)){
        let mensajeDesencriptado = mensaje;
        for(let i = 0; i < llaves.length; i++){
            let regex = new RegExp(llaves[i][1], 'g') 
            mensajeDesencriptado = mensajeDesencriptado.replace(regex,llaves[i][0]);
        }
        return mensajeDesencriptado;
    }
   
 }
//ocultar elementos dinamicamente
textArea.addEventListener("input",(e)=>{
    imagenMuneco.style.display = "none"
    console.log(e.target.value)
    loaderLoading.classList.remove("hidden");
    resultadoTitulo.textContent = "procesando el mensaje";
    resultadoTexto.textContent = "";
})

 //funcion del boton encriptar
botonEncriptar.addEventListener("click",(e)=>{
    e.preventDefault();
    let mensaje = textArea.value;
    let mensajeEncriptado = encriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "el resultado es";

});

botonDesencriptar.addEventListener("click",(e)=>{
    e.preventDefault();
    let mensaje = textArea.value;
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeDesencriptado;
    resultadoTitulo.textContent = "el resultado es";



})

botonCopiar.addEventListener("click", ()=>{
    let textoCopiado = resultadoTexto.textContent;
    navigator.clipboard.writeText(textoCopiado).then=(() => {        
    })
    })

    

    
    
