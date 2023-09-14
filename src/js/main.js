'use strict';

/*1- boton reset
darle Clase x
llamar al elemento dqs x
hacer variable x
click evento para borrar


2- collapsable (1ª siempre abierta)
darle clase
llamar al elemento y darle variable dqs
click evento cerrar otras opciones


*/

/*const btnReset = document.querySelector ('.js-reset');

function resetClick (){

}


btnReset.addEventListener('click', resetClick);*/

const fieldsetDesign = document.querySelector('.js-fieldset_design');
const fieldsetFill = document.querySelector('.js-fieldset_fill');
const fieldsetShare = document.querySelector('.js-fieldset_share');
const fieldsetDiv2 = document.querySelector('.js-div2');
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


