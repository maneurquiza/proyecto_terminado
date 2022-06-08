var formulario=document.getElementById("formulario");

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    var Nombre=document.getElementById("Nombres").value;
    console.log(Nombres);
    if(Nombres==""){
        var errorNombes=document.getElementById("errorNombre");
        if(errorNombres.className=="NoVisible"){
            errorNombres.classList.remove("NoVisible")
            errorNombres.classList.add("SiVisible")
        }
    }

});