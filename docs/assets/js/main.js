"use strict";const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,data.photo=fr.result}fileField.addEventListener("change",getImage);const palette1=document.querySelector(".js-palet1"),palette2=document.querySelector(".js-palet2"),palette3=document.querySelector(".js-palet3"),inputName=document.querySelector(".js-inputName"),inputJob=document.querySelector(".js-inputJob"),inputPhoto=document.querySelector(".js-inputPhoto"),inputEmail=document.querySelector(".js-inputEmail"),inputPhone=document.querySelector(".js-inputPhone"),inputLinkedin=document.querySelector(".js-inputLinkedin"),inputGithub=document.querySelector(".js-inputGithub"),namePreview=document.querySelector(".js-nameCard"),jobPreview=document.querySelector(".js-jobCard"),emailPreview=document.querySelector(".js-emailCard"),phonePreview=document.querySelector(".js-phoneCard"),linkedinPreview=document.querySelector(".js-linkedinCard"),githubPreview=document.querySelector(".js-githubCard"),btnCreate=document.querySelector(".js-share-link"),btnX=document.querySelector(".js-x"),errorMsj=document.querySelector(".js-p-error"),urlCard=document.querySelector(".js-url");let data={palette:1,name:"",job:"",photo:"",email:"",phone:"",linkedin:"",github:""};const btnReset=document.querySelector(".js-reset");function resetClick(e){e.preventDefault(),palette1.checked=!0,palette2.checked=!1,palette2.checked=!1,handleChangePalette1(),inputName.value="",inputJob.value="",inputPhoto.value="",inputEmail.value="",inputPhone.value="",inputLinkedin.value="",inputGithub.value="",namePreview.innerHTML="Nombre Apellido",jobPreview.innerHTML="Front-end developer",emailPreview.href="",phonePreview.href="",linkedinPreview.href="",githubPreview.href="",profileImage.style.backgroundImage='url("./assets/images/lisa.jpg")',profilePreview.style.backgroundImage='url("./assets/images/lisa.jpg")',data.photo="",data.palette=1,data.name="",data.job="",data.email="",data.phone="",data.linkedin="",data.github=""}function handleChangePalette1(){namePreview.classList.remove("palet2","palet3"),namePreview.classList.add("palet1"),jobPreview.classList.remove("border2","border3"),jobPreview.classList.add("border1"),phonePreview.classList.remove("icon2","icon3"),phonePreview.classList.add("icon1"),emailPreview.classList.remove("icon2","icon3"),emailPreview.classList.add("icon1"),linkedinPreview.classList.remove("icon2","icon3"),linkedinPreview.classList.add("icon1"),githubPreview.classList.remove("icon2","icon3"),githubPreview.classList.add("icon1"),data.palette=1}function handleChangePalette2(){namePreview.classList.remove("palet1","palet3"),namePreview.classList.add("palet2"),jobPreview.classList.remove("border1","border3"),jobPreview.classList.add("border2"),githubPreview.classList.remove("icon1","icon3"),githubPreview.classList.add("icon2"),phonePreview.classList.remove("icon1","icon3"),phonePreview.classList.add("icon2"),emailPreview.classList.remove("icon1","icon3"),emailPreview.classList.add("icon2"),linkedinPreview.classList.remove("icon1","icon3"),linkedinPreview.classList.add("icon2"),data.palette=2}function handleChangePalette3(){namePreview.classList.remove("palet1","palet2"),namePreview.classList.add("palet3"),jobPreview.classList.remove("border1","border2"),jobPreview.classList.add("border3"),phonePreview.classList.remove("icon1","icon2"),phonePreview.classList.add("icon3"),emailPreview.classList.remove("icon1","icon2"),emailPreview.classList.add("icon3"),linkedinPreview.classList.remove("icon1","icon2"),linkedinPreview.classList.add("icon3"),githubPreview.classList.remove("icon1","icon2"),githubPreview.classList.add("icon3"),data.palette=3}btnReset.addEventListener("click",resetClick),palette1.addEventListener("change",handleChangePalette1),palette2.addEventListener("change",handleChangePalette2),palette3.addEventListener("change",handleChangePalette3);const fieldsetDesign=document.querySelector(".js-fieldset_design"),fieldsetFill=document.querySelector(".js-fieldset_fill"),fieldsetShare=document.querySelector(".js-fieldset_share"),fieldsetDiv2=document.querySelector(".js-div2"),legendDesign=document.querySelector(".js-design-legend"),legendFill=document.querySelector(".js-fill-legend"),legendShare=document.querySelector(".js-share-legend");function handleClickLegendDesign(){fieldsetFill.classList.add("collapsed"),fieldsetDesign.classList.remove("collapsed"),fieldsetShare.classList.add("collapsed"),fieldsetDiv2.classList.add("form_share_div2-hidden")}function handleClickLegendFill(){fieldsetFill.classList.remove("collapsed"),fieldsetDesign.classList.add("collapsed"),fieldsetShare.classList.add("collapsed"),fieldsetDiv2.classList.add("form_share_div2-hidden")}function handleClickLegendShare(){fieldsetFill.classList.add("collapsed"),fieldsetDesign.classList.add("collapsed"),fieldsetShare.classList.remove("collapsed")}function updatePreview(){""===data.name?namePreview.innerHTML="Nombre Apellido":namePreview.innerHTML=data.name,""===data.job?jobPreview.innerHTML="Front-end Developer":jobPreview.innerHTML=data.job,emailPreview.href="mailto:"+data.email,phonePreview.href="tel:"+data.phone,linkedinPreview.href="https://www.linkedin.com/in/"+data.linkedin,githubPreview.href="https://github.com/"+data.github.replace("@","")}function handleInputName(){data.name=inputName.value,updatePreview()}function handleInputJob(){data.job=inputJob.value,updatePreview()}function handleInputEmail(){data.email=inputEmail.value,updatePreview()}function handleInputPhone(){data.phone=inputPhone.value,updatePreview()}function handleInputLinkedin(){data.linkedin=inputLinkedin.value,updatePreview()}function handleInputGithub(){data.github=inputGithub.value,updatePreview()}function handleClickBtnCreate(e){e.preventDefault(),fetch("https://dev.adalab.es/api/card/",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}).then(e=>e.json()).then(e=>{!1===e.success?errorMsj.innerHTML="¡Ups, algo está fallando!":(fieldsetDiv2.classList.remove("form_share_div2-hidden"),fieldsetDiv2.classList.add("form_share_div2"),urlCard.href=e.cardURL,urlCard.innerHTML=e.cardURL,btnX.href=`https://twitter.com/intent/tweet?url=${urlCard.href}&text=He%20creado%20mi%20tarjeta%20con%20Awesome%20profile-card%21%21%21&`,localStorage.setItem("datainfo",JSON.stringify(data)))})}function render(){inputName.value=data.name,inputJob.value=data.job,inputPhoto.value=data.photo,inputEmail.value=data.email,inputPhone.value=data.phone,inputLinkedin.value=data.linkedin,inputGithub.value=data.github,namePreview.innerHTML=data.name,jobPreview.innerHTML=data.job,emailPreview.href=data.email,phonePreview.href=data.phone,linkedinPreview.href=data.linkedin,githubPreview.href=data.github,profileImage.style.backgroundImage=data.photo,profilePreview.style.backgroundImage=data.photo}legendDesign.addEventListener("click",handleClickLegendDesign),legendFill.addEventListener("click",handleClickLegendFill),legendShare.addEventListener("click",handleClickLegendShare),inputName.addEventListener("input",handleInputName),inputJob.addEventListener("input",handleInputJob),inputEmail.addEventListener("input",handleInputEmail),inputPhone.addEventListener("input",handleInputPhone),inputLinkedin.addEventListener("input",handleInputLinkedin),inputGithub.addEventListener("input",handleInputGithub),btnCreate.addEventListener("click",handleClickBtnCreate);const dataLS=JSON.parse(localStorage.getItem("datainfo"));null!==dataLS&&(data=dataLS,render());