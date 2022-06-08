var btnHamburguesa=document.getElementById("btnHamburguesa");
var visible=document.getElementById("visible");

btnHamburguesa.addEventListener("click",()=>{
    visible=document.getElementById("visible");
    if(visible.className=="novisible"){
        visible.classList.remove("novisible");
        visible.classList.add("sivisible");
    }
    else{
        visible.classList.remove("sivisible");
        visible.classList.add("novisible");
    }
});