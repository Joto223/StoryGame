/*----- constants -----*/
const NAME = document.getElementsByClassName('name');
const start = document.querySelector('#start')
const player = [choice1, choice2];
var choice;
/*----- app's state (variables) -----*/
const gameTxt = document.getElementById('gameTxt');
var $choice1 = $('#choice1').on('click', () => {
  choice = $choice1;
})
var $choice2 = $('#choice2').on('click', () => {
  choice = $choice2;
})


/*----- cached element references -----*/
/*----- event listeners -----*/ start.addEventListener('click', game)


/*----- functions -----*/
function game(){
  showChoice();
$(".nameIn").fadeOut(3000, function(){
  $('#gameTxt').fadeIn(5000).html('The persistent patter of rain muffles the crunch of gravel as Vega traverses the outskirts of the city.');
  $('.nameIn').fadeIn(10000).html('Upon approaching his destination, Vega considers his objective');
  $('#p1').html('Consider Objective');
  $('#p2').html('“I already know all I need to know”');
});
for (var i = 0; i < player.length; i++) {
    if (player[i] === choice){
  alert("it works");
  // $('#gameTxt').fadeOut(3000);
  // $('.nameIn').fadeOut(3000);
  // $('gameTxt').html('o	His target is a man who is unmarried and who lives alone. His target is in debt to some very dangerous people, and so Vega's assignment is to kill him. ');

}
}

}
function c1() {
  hideChoice();

}

function showChoice() {
  $('.choice').show();
}
function hideChoice() {
  $('.choice').hide();
}
