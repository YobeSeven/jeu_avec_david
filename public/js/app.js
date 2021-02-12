
let jeu = document.querySelector(`.jeu`)
let touteRangee = document.querySelectorAll(`.case-simple`)
let rangee = [`a`,`b`]


// PARTIR VERS LA DROITE
document.body.addEventListener(`keyup` , (event) => {
  if (event.keyCode === 39) {
    let divImg = document.querySelector(`.image-jojo`)
    let suivant; 

    if(divImg.nextElementSibling != null && divImg.nextElementSibling != undefined){
        suivant = divImg.nextElementSibling;
    }else{
        suivant = divImg;
    }

    if(divImg.getAttribute('id').substring(2) <= 11){
        suivant.classList.add(`image-jojo`)
        divImg.classList.remove(`image-jojo`)
    }
  }
})

// PARTIR VERS LA GAUCHE
document.body.addEventListener(`keyup`,(event) =>{
  if (event.keyCode === 37) {
    let divImg = document.querySelector(`.image-jojo`)
    let suivant;

    if(divImg.previousElementSibling != null && divImg.previousElementSibling != undefined){
        suivant = divImg.previousElementSibling;
    }else{
        suivant = divImg;
    }

    if(divImg.getAttribute('id').substring(2) >= 2 ){
        suivant.classList.add(`image-jojo`)
        divImg.classList.remove(`image-jojo`)
    }
  }
})

// PARTIR VERS LE BAS
document.body.addEventListener(`keyup`,(event) => {
  if (event.keyCode === 40) {
    let divImg = document.querySelector(`.image-jojo`)
    let divId = divImg.getAttribute(`id`).substring(0,1)
    console.log(divId);
    let suivant;
    rangee.forEach( element => {
      if (element == divId) {
        if (rangee.indexOf(element) < rangee.length-1) {
          suivant = rangee[element];
          console.log(suivant);
        }
      }
    });

  
  }
})

// PARTIR VERS LE HAUT
