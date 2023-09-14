'use strict';

/*1- boton reset
-evento 
2- enlazar los inputs del formulario 
-con los iconos de la card
-con nombre y puesto
3-paleta de colores
-evento para cambiar de color
4- crear evento para que al crear tarjeta se abra compartir en X
*/

//variables imput fomulario
const nameUser = document.querySelector('.js-name');
const job = document.querySelector('.js-job');
const img = document.querySelector('.js-img');
const email = document.querySelector('.js-email');
const mobile = document.querySelector('.js-mobile');
const lk = document.querySelector('.js-lk');
const git = document.querySelector('.js-git');


//Boton reset
const btnReset = document.querySelector ('.js-reset');

function resetClick (){
  event.preventDefault();
  nameUser.value='';
  job.value='';  
  img.value='';
  email.value='';
  mobile.value='';
  lk.value='';
  git.value='';
}

btnReset.addEventListener('click', resetClick);


//variables collapsables
const fieldsetDesign = document.querySelector('.js-fieldset_design');
const fieldsetFill = document.querySelector('.js-fieldset_fill');
const fieldsetShare = document.querySelector('.js-fieldset_share');
// const fieldsetDiv2 = document.querySelector('.js-div2');
const legendDesign = document.querySelector('.js-design-legend');
const legendFill = document.querySelector('.js-fill-legend');
const legendShare = document.querySelector('.js-share-legend');
// diseña
function handleClickLegendDesign() {
  fieldsetFill.classList.add('collapsed');
  fieldsetDesign.classList.remove('collapsed');
  fieldsetShare.classList.add('collapsed');
}

legendDesign.addEventListener('click', handleClickLegendDesign);

//rellena
function handleClickLegendFill() {
  fieldsetFill.classList.remove('collapsed');
  fieldsetDesign.classList.add('collapsed');
  fieldsetShare.classList.add('collapsed');
}
legendFill.addEventListener('click', handleClickLegendFill);

//comparte
function handleClickLegendShare() {
  fieldsetFill.classList.add('collapsed');
  fieldsetDesign.classList.add('collapsed');
  fieldsetShare.classList.remove('collapsed');
}

legendShare.addEventListener('click', handleClickLegendShare);


