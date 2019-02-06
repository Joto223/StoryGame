/*----- constants -----*/
const NAME = document.getElementsByClassName('name');
const start = document.querySelector('#start')
/*----- app's state (variables) -----*/
const gameTxt = document.getElementById('gameTxt');
var $choice1 = $('#choice1').on('click', () => {})
var $choice2 = $('#choice2').on('click', () => {})


/*----- cached element references -----*/
/*----- event listeners -----*/ start.addEventListener('click', game)


/*----- functions -----*/
function game(){
  showChoice();
$(".nameIn").fadeOut(3000, function(){
  $('#gameTxt').fadeIn(5000).html('The persistent patter of rain muffles the crunch of gravel as Vega traverses the outskirts of the city.');
  $('.nameIn').fadeIn(10000).html('Upon approaching his destination, Vega considers his objective');
});
// if ()

}

function showChoice() {
  $('.choice').show();
}
function hideChoice() {
  $('.choice').hide()
}
