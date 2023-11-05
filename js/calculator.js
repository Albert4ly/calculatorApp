const btns = document.querySelector('.btns__cnt');
const displayPushedNr = document.querySelector('.last__pushed__nr');
const displayLastPushedBtns = document.querySelector('.last__pushed__btns');

let currentValueBtn = '';
let currentPushedNr = '';
let currentPushedNrClone = '';
let currentPushedNrClone2 = '';
let pushedOperator = '';
let pushedOperatorClone = '';
let concatenatedStrs = '';

let isBoolean = null;

let digitToMathOperation = null;
let digitToMathOperation2 = null;

let resultOfOperation = null;

function displayNr(currentPushedNr) {
   displayPushedNr.innerHTML = currentPushedNr;
}

function displayLastBtns(concatenatedStrs) {
   displayLastPushedBtns.innerHTML = concatenatedStrs;
}

function result(digitToMathOperation, digitToMathOperation2, pushedOperatorClone) {

   if (pushedOperatorClone === '+') {
      resultOfOperation  = digitToMathOperation + digitToMathOperation2;
   }
   
   if (pushedOperatorClone === '-') {
      resultOfOperation = digitToMathOperation - digitToMathOperation2;
   }
   
   if (pushedOperatorClone === 'x') {
      resultOfOperation = digitToMathOperation * digitToMathOperation2;
   }
   
   if (pushedOperatorClone === '/') {
      resultOfOperation = digitToMathOperation / digitToMathOperation2;
   }
   
}

function dataTypeConversion(currentPushedNrClone, currentPushedNrClone2) {

   if (isBoolean === true) {
      digitToMathOperation = Number(currentPushedNrClone);
      digitToMathOperation2 = Number(currentPushedNrClone2);
   }

}

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
         currentPushedNrClone2 += currentPushedNr;
         pushedOperator = '';
      }
   }

   if (basicOperatorsArr.includes(currentValueBtn)) {

      if (concatenatedStrs.charAt(concatenatedStrs.length - 1) !== currentValueBtn) {
         pushedOperator += currentValueBtn;
         pushedOperatorClone = pushedOperator;
         concatenatedStrs = currentPushedNr;
         concatenatedStrs += currentValueBtn;
      }

      if (concatenatedStrs.charAt(concatenatedStrs.length - 1) === currentValueBtn) {
         isBoolean = true;
      }
      
   }
}

function init(e) {
   currentValueBtn = e.target.value;
   charactersAllocation(currentValueBtn);
   dataTypeConversion(currentPushedNrClone, currentPushedNrClone2);
   result(digitToMathOperation, digitToMathOperation2, pushedOperatorClone);
   displayNr(currentPushedNr);
   displayLastBtns(concatenatedStrs);
}

btns.addEventListener('click', init, true);









