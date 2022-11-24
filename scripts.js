///console.log('bienvenidos')

const usuarios =document.getElementById(".usuario");
const contraseñas=document.getElementById(".contraseña");
const mensajeError=document.getElementById("error");

function validacion(campo){
    if(campo && campo.value  ==""){
        //alert(`${campo.contraseña} ojo los valores no pueden ir vacíos`)
        mensajeError.innerHTML="<p>ojo error</p>"
      // campo.classList.add("error")
        return false
    }
}

//validacion(usuario);
///validacion(contraseña);

function enviar()
{
   ///const usuario=document.getElementsByClassName(".usuario");
   console.log("validar info");
    validacion(usuarios);
    validacion(contraseñas);
    //usuario.innerHTML="<p>ojo error</p"
}