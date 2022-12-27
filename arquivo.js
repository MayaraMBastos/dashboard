//Main toggle

let toggle = document.querySelector('.toggle');
let navegador = document.querySelector('.navegador');
let main = document.querySelector('.main');

toggle.onClick = function(){
    navegador.classList.toggle('ativo');
}

//muda o nome da classe do li para hovered
let list = document.querySelectorAll('.navegador li');
function ativaLink() {
  list.forEach((item) => item.classList.remove('hovered'));
  this.classList.add('hovered');
}
list.forEach((item) => item.addEventListener('mouseover', ativaLink));


