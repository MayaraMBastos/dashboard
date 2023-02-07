//Main toggle
var estadoMenu = 0
function menuResponsivo(){
  if (estadoMenu == 1) {
    document.getElementById("navegador").style.width = "300px";
    document.querySelector("div.main").style.left = "300px";
    document.querySelector("div.main").style.width = "calc(100% - 300px)";
    estadoMenu = 0;
  } else if (estadoMenu == 0) {
    document.getElementById("navegador").style.width = "80px";
    document.querySelector("div.main").style.left = "80px";
    document.querySelector("div.main").style.width = "calc(100% - 80px)";
    estadoMenu = 1;
  }
}

