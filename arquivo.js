//Main toggle
var toggleStatus = 1
function menuResponsivo(){
  if (toggleStatus == 1) {
    document.getElementById("navegador").style.width = "300px";
    toggleStatus = 0;
  } else if (toggleStatus == 0) {
    document.getElementById("navegador").style.width = "80px";
    toggleStatus = 1;
  }
}

