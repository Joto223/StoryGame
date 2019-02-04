/*----- constants -----*/
const NAME = document.getElementsByClassName('nameIn');
/*----- app's state (variables) -----*/

/*----- cached element references -----*/
/*----- event listeners -----*/

/*----- functions -----*/
function startGame(){
  let prologue = document.querySelector('.prologue');
  if(prologue.style.display === "none"){
    prologue.style.display = "block";
  } else {
    prologue.style.display = "none";
  }
}
function fade(){
  alert('fading');
  let head = document.getElementsByClassName('title');
  head.style.display = 'none';
}
