const btns = document.querySelector('.btns__cnt');
const displayPushedNr = document.querySelector('.last__pushed__nr');
const displayLastPushedBtns = document.querySelector('.last__pushed__btns');

let currentValueBtn = '';

function init(e) {
   currentValueBtn = e.target.value;
}

btns.addEventListener('click', init, true);









