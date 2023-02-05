//Main toggle
var toggleStatus = 1
function menuResponsivo(){
  if (toggleStatus == 1) {
    document.getElementById("navegador").style.width = "300px";
    document.querySelector("div.main").style.left = "300px";
    document.querySelector("div.main").style.width = "calc(100% - 300px)";
    toggleStatus = 0;
  } else if (toggleStatus == 0) {
    document.getElementById("navegador").style.width = "80px";
    document.querySelector("div.main").style.left = "80px";
    document.querySelector("div.main").style.width = "calc(100% - 80px)";
    toggleStatus = 1;
  }
}

