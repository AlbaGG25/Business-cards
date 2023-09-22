'use strict';


//VARIABLES IMPUT FORMULARIO

//falta resolver tema cambio de paletas de colores
const palette1 = document.querySelector('.js-palet1');
const palette2 = document.querySelector('.js-palet2');
const palette3 = document.querySelector('.js-palet3');
const inputName = document.querySelector('.js-inputName');
const inputJob = document.querySelector('.js-inputJob');
const inputPhoto = document.querySelector('.js-inputPhoto');
const inputEmail = document.querySelector('.js-inputEmail');
const inputPhone = document.querySelector('.js-inputPhone');
const inputLinkedin = document.querySelector('.js-inputLinkedin');
const inputGithub = document.querySelector('.js-inputGithub');
const namePreview = document.querySelector ('.js-nameCard');
const jobPreview = document.querySelector ('.js-jobCard');
//const photoPreview = document.querySelector ('.js-photoCard');
const emailPreview = document.querySelector ('.js-emailCard');
const phonePreview = document.querySelector ('.js-phoneCard');
const linkedinPreview = document.querySelector ('.js-linkedinCard');
const githubPreview = document.querySelector ('.js-githubCard');
const btnCreate = document.querySelector ('.js-share-link');

//BOTON DE RESET
const btnReset = document.querySelector ('.js-reset');

function resetClick (event){
  event.preventDefault();
  palette1.checked = true;
  palette2.checked = false;
  palette2.checked = false;
  handleChangePalette1();
  inputName.value='';
  inputJob.value='';
  inputPhoto.value='';
  inputEmail.value='';
  inputPhone.value='';
  inputLinkedin.value='';
  inputGithub.value='';
  namePreview.innerHTML='Nombre Apellido';
  jobPreview.innerHTML='Front-end developer';
  emailPreview.href='';
  phonePreview.href='';
  linkedinPreview.href='';
  githubPreview.href='';
}

btnReset.addEventListener('click', resetClick);
//PALETA DE COLORES

function handleChangePalette1() {
  namePreview.classList.remove('palet2','palet3');
  namePreview.classList.add('palet1');
  jobPreview.classList.remove('border2','border3');
  jobPreview.classList.add('border1');
  phonePreview.classList.remove('icon2','icon3');
  phonePreview.classList.add('icon1');
  emailPreview.classList.remove('icon2','icon3');
  emailPreview.classList.add('icon1');
  linkedinPreview.classList.remove('icon2','icon3');
  linkedinPreview.classList.add('icon1');
  githubPreview.classList.remove('icon2','icon3');
  githubPreview.classList.add('icon1');
}

palette1.addEventListener('change', handleChangePalette1);

function handleChangePalette2() {
  namePreview.classList.remove('palet1','palet3');
  namePreview.classList.add('palet2');
  jobPreview.classList.remove('border1','border3');
  jobPreview.classList.add('border2');
  githubPreview.classList.remove('icon1','icon3');
  githubPreview.classList.add('icon2');
  phonePreview.classList.remove('icon1','icon3');
  phonePreview.classList.add('icon2');
  emailPreview.classList.remove('icon1','icon3');
  emailPreview.classList.add('icon2');
  linkedinPreview.classList.remove('icon1','icon3');
  linkedinPreview.classList.add('icon2');
}

palette2.addEventListener('change', handleChangePalette2);

function handleChangePalette3() {
  namePreview.classList.remove('palet1','palet2');
  namePreview.classList.add('palet3');
  jobPreview.classList.remove('border1','border2');
  jobPreview.classList.add('border3');
  phonePreview.classList.remove('icon1','icon2');
  phonePreview.classList.add('icon3');
  emailPreview.classList.remove('icon1','icon2');
  emailPreview.classList.add('icon3');
  linkedinPreview.classList.remove('icon1','icon2');
  linkedinPreview.classList.add('icon3');
  githubPreview.classList.remove('icon1','icon2');
  githubPreview.classList.add('icon3');
}

palette3.addEventListener('change', handleChangePalette3);


///COLAPSABLES
//variables collapsables
const fieldsetDesign = document.querySelector('.js-fieldset_design');
const fieldsetFill = document.querySelector('.js-fieldset_fill');
const fieldsetShare = document.querySelector('.js-fieldset_share');
const fieldsetDiv2 = document.querySelector('.js-div2');
const legendDesign = document.querySelector('.js-design-legend');
const legendFill = document.querySelector('.js-fill-legend');
const legendShare = document.querySelector('.js-share-legend');
// DISEÑA
function handleClickLegendDesign() {
  fieldsetFill.classList.add('collapsed');
  fieldsetDesign.classList.remove('collapsed');
  fieldsetShare.classList.add('collapsed');
  fieldsetDiv2.classList.add('form_share_div2-hidden');
}

legendDesign.addEventListener('click', handleClickLegendDesign);

//RELLENA
function handleClickLegendFill() {
  fieldsetFill.classList.remove('collapsed');
  fieldsetDesign.classList.add('collapsed');
  fieldsetShare.classList.add('collapsed');
  fieldsetDiv2.classList.add('form_share_div2-hidden');
}
legendFill.addEventListener('click', handleClickLegendFill);

//COMPARTE
function handleClickLegendShare() {
  fieldsetFill.classList.add('collapsed');
  fieldsetDesign.classList.add('collapsed');
  fieldsetShare.classList.remove('collapsed');
}

legendShare.addEventListener('click', handleClickLegendShare);


////INPUTS FORMULARIOS
const data = {
  palette: 1 ,
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
  phonePreview.href =   'tel:'+ data.phone;
  linkedinPreview.href =  'https://www.linkedin.com/in/' + data.linkedin;
  githubPreview.href = 'https://github.com/'  + data.github.replace ('@', '');
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


function handleClickBtnCreate (event){
  event.preventDefault();
  fieldsetDiv2.classList.remove ('form_share_div2-hidden');
  fieldsetDiv2.classList.add ('form_share_div2');
}

btnCreate.addEventListener('click', handleClickBtnCreate);

// const twttr = document.getElementById('xXx');
// twttr.widgets.createShareButton(
// 'https://awesome-profile-card.com?id=A456DF0001',{
// text:'He creado mi tarjeta con Awesome Profile-Cards'});
//https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/javascript-factory-function
