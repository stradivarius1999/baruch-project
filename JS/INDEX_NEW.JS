//Acciones con evento onlick en icono hamburguesa (celular)
function openMenu(){
    document.getElementById("mainMenu").style.width="470px";
    document.getElementById("mainMenu").style.display="flex";
    document.getElementById("mainMenu").style.height="1000px";
    document.getElementById("openmenu").style.display="none";
}

//Acciones con evento onlick en icono cerrar x (celular)
function closeNav(){
    document.getElementById("mainMenu").style.width="0px";
    document.getElementById("mainMenu").style.transition="0.9s all";
    window.location.reload()//Emular tecla f5
}