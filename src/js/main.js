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
//const palette = document.querySelector('.js-palet1');
const inputName = document.querySelector('.js-inputName');
const inputJob = document.querySelector('.js-inputJob');
const inputPhoto = document.querySelector('.js-inputPhoto');
const inputEmail = document.querySelector('.js-inputEmail');
const inputPhone = document.querySelector('.js-inputPhone');
const inputLinkedin = document.querySelector('.js-inputLinkedin');
const inputGithub = document.querySelector('.js-inputGithub');
const namePreview = document.querySelector ('.js-nameCard');
const jobPreview = document.querySelector ('.js-jobCard');
const photoPreview = document.querySelector ('.js-photoCard');
const emailPreview = document.querySelector ('.js-emailCard');
const phonePreview = document.querySelector ('.js-phoneCard');
const linkedinPreview = document.querySelector ('.js-linkedinCard');
const githubPreview = document.querySelector ('.js-githubCard');
//Boton reset
const btnReset = document.querySelector ('.js-reset');

function resetClick (event){
  event.preventDefault();
  //palette.value: 1;
  inputName.value='';
  inputJob.value='';
  inputPhoto.value='';
  inputEmail.value='';
  inputPhone.value='';
  inputLinkedin.value='';
  inputGithub.value='';
  namePreview.innerHTML='Nombre Apellido';
  jobPreview.innerHTML='Front-end Developer';
  //photoPreview.href='';
  emailPreview.href='';
  phonePreview.href='';
  linkedinPreview.href='';
  githubPreview.href='';
}

btnReset.addEventListener('click', resetClick);

///COLAPSABLES
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


////INPUTS FORMULARIOS
const data = {
  //palette.value: 1;
  name: '',
  job: '',
  photo:  '',
  email: '',
  phone: '',
  linkedin: '',
  github: ''
};

function updatePreview () {
  if (data.name === ('')) {
    namePreview.innerHTML = 'Nombre Apellido';
  } else {
    namePreview.innerHTML = data.name;
  }

  if (data.job === ('')) {
    jobPreview.innerHTML  = 'Front-end Developer';
  } else {
    jobPreview.innerHTML = data.job;
  }

  emailPreview.href = 'mailto:' + data.email;
  phonePreview.href =  data.phone;
  linkedinPreview.href =  'https://www.' + data.linkedin;
  githubPreview.href = 'https://github.com/' + data.github;
}

function handleInputName () {
  data.name = inputName.value;
  updatePreview ();
}
inputName.addEventListener('input', handleInputName);

function handleInputJob () {
  data.job = inputJob.value;
  updatePreview ();
}

inputJob.addEventListener('input', handleInputJob);

function handleInputEmail () {
  data.email = inputEmail.value;
  updatePreview ();
}

inputEmail.addEventListener('input', handleInputEmail);

function handleInputPhone () {
  data.phone = inputPhone.value;
  updatePreview ();
}

inputPhone.addEventListener('input', handleInputPhone);

function handleInputLinkedin () {
  data.linkedin = inputLinkedin.value;
  updatePreview ();
}

inputLinkedin.addEventListener('input', handleInputLinkedin);

function handleInputGithub () {
  data.github = inputGithub.value;
  updatePreview ();
}

inputGithub.addEventListener('input', handleInputGithub);
