const btns = document.querySelector('.btns__cnt');
const displayPushedNr = document.querySelector('.last__pushed__nr');
const displayLastPushedBtns = document.querySelector('.last__pushed__btns');

let currentValueBtn = '';
let currentPushedNr = '';
let currentPushedNrClone = '';
let pushedOperator = '';
let concatenatedStrs = '';

function charactersAllocation(currentValueBtn) {
   const signsArr = ['%', 'CE', 'C', 'X', 'f', 'x^', '√', '/', 'x', '*', '-', '+', '+/-', '.', '='];
   const basicOperatorsArr = ['x', '-', '+', '/', '='];

   if (!signsArr.includes(currentValueBtn)) {
      if (pushedOperator.length === 0) {
         currentPushedNr += currentValueBtn;
         currentPushedNrClone = currentPushedNr;
      }

      if (pushedOperator.length !== 0) {
         currentPushedNr = '';
         currentPushedNr += currentValueBtn;
         pushedOperator = '';
      }
   }

   if (basicOperatorsArr.includes(currentValueBtn)) {
      pushedOperator += currentValueBtn;
      concatenatedStrs = currentPushedNr;
      concatenatedStrs += currentValueBtn;
   }
}

function init(e) {
   currentValueBtn = e.target.value;
   charactersAllocation(currentValueBtn);
}

btns.addEventListener('click', init, true);









