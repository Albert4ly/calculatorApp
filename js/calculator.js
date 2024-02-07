import {
	btns,
	memoryBtns,
	displayPushedNr,
	displayLastPushedBtns,
} from "./htmlElementsHandles.js";

class Calculator {
	constructor() {
		this.memoryValue = 0;
		this.displayValue = "0";
		this.previousValue = null;
		this.selectedFunction = null;
		this.isFunctionDone = false;
		this.repeatedValue = 0;
		this.wasEqualClicked = false;
		this.wasSpecialFunctionClicked = false;

		this.bindToDisplay();
		this.bindToBtns();
	}

	bindToDisplay() {
		displayPushedNr.textContent = this.displayValue;
		this.displayPushedNr = displayPushedNr;
	}

	bindToBtns() {
		btns.addEventListener("click", (e) => this.charactersRecognition(e));
		memoryBtns.addEventListener("click", (e) =>
			this.memoryCharactersRecognition(e)
		);
	}

	charactersRecognition(e) {
		const signsArr = [
			"%",
			"CE",
			"C",
			"X",
			"f",
			"x^",
			"√",
			"/",
			"x",
			"*",
			"-",
			"+",
			"+/-",
			".",
			"=",
		];
		const basicSignsArr = ["+", "-", "x", "/"];

		if (!signsArr.includes(e.target.value)) {
			this.concatenateNumber(e);
		}

		if (basicSignsArr.includes(e.target.value)) {
			switch (e.target.value) {
				case "+":
					this.addition();
					break;
				case "-":
					this.substraction();
					break;
			}
		}

		if (signsArr.includes(e.target.value)) {
			const specialBtn = e.target.value;

			switch (specialBtn) {
				case "CE":
					this.clear();
					break;
				case "C":
					this.cancelDisplay();
					break;
			}
		}
	}

	cancelDisplay() {
		this.changeDisplayValue(null);
	}

	clear() {
		this.previousValue = 0;
		this.selectedFunction = null;
		this.changeDisplayValue(null);
	}

	memoryCharactersRecognition(e) {
		const memoryBtn = e.target.value;

		switch (memoryBtn) {
			case "MC":
				this.wasSpecialFunctionClicked = true;
				this.memoryValue = 0;
				break;
			case "MR":
				this.wasSpecialFunctionClicked = true;
				this.changeDisplayValue(this.memoryValue);
			case "M+":
				this.wasSpecialFunctionClicked = true;
				this.memoryValue += Number(this.displayValue);
				break;
			case "M-":
				this.wasSpecialFunctionClicked = true;
				this.memoryValue -= Number(this.displayValue);
				break;
			case "MS":
				this.wasSpecialFunctionClicked = true;
				this.memoryValue = Number(this.displayValue);
		}
	}

	concatenateNumber(e) {
		this.displayValue =
			this.displayValue === null ||
			this.displayValue === "0" ||
			this.wasSpecialFunctionClicked
				? e.target.textContent
				: this.displayValue + e.target.textContent;

		if (this.wasEqualClicked) {
			this.previousValue = 0;
			this.repeatedValue = 0;
			this.wasEqualClicked = false;
		}

		this.wasSpecialFunctionClicked = false;
		this.isFunctionDone = false;

		this.displayPushedNr.textContent = this.displayValue;
	}

	addition(hasRepeatedValue) {
		this.callPreviousFuncAndAssignNew(this.addition, hasRepeatedValue);

		if (this.isFunctionDone) {
			this.setValuesForIsFuncDone();

			return;
		}

      const [displayValue, previousValue] = this.getDisplayAndPreviousValue();
		const newValue = displayValue + previousValue;

		this.isFunctionDone = true;
		this.repeatedValue = hasRepeatedValue
			? this.repeatedValue
			: this.wasEqualClicked
			? newValue
			: Number(this.displayPushedNr.textContent);

		this.wasEqualClicked = false;
		this.previousValue = newValue;
		this.displayValue = null;
		this.displayPushedNr.textContent = newValue;
	}

	substraction(hasRepeatedValue) {
		this.callPreviousFuncAndAssignNew(this.substraction, hasRepeatedValue);

		if (this.isFunctionDone) {
			this.repeatedValue = Number(this.previousValue);
			this.displayValue = "0";
			this.wasEqualClicked = false;

			return;
		}

		const displayValue = Number(this.displayPushedNr.textContent);
		const previousValue = hasRepeatedValue
			? this.repeatedValue
			: Number(this.previousValue);

		let newValue;

		if (this.previousValue !== null) {
			newValue = hasRepeatedValue
				? displayValue - this.repeatedValue
				: previousValue - displayValue;

			this.repeatedValue = hasRepeatedValue
				? this.repeatedValue
				: this.wasEqualClicked
				? newValue
				: Number(this.displayPushedNr.textContent);
		}

		this.isFunctionDone = true;
		this.wasEqualClicked = false;
		this.displayValue = null;
		this.displayPushedNr.textContent =
			this.previousValue !== null
				? newValue
				: this.displayPushedNr.textContent;
		this.previousValue =
			this.previousValue !== null
				? newValue
				: this.displayPushedNr.textContent;
   }
   
   getDisplayAndPreviousValue() {
      const displayValue = Number(this.displayPushedNr.textContent);
		const previousValue = hasRepeatedValue
			? this.repeatedValue
			: Number(this.previousValue);
   }

	setValuesForIsFuncDone() {
		this.repeatedValue = Number(this.previousValue);
		this.displayValue = "0";
		this.wasEqualClicked = false;
	}

	callPreviousFuncAndAssignNew(currentFunc, hasRepeatedValue) {
		if (this.selectedFunction !== currentFunc && this.selectedFunction) {
			this.selectedFunction(hasRepeatedValue);
		}
		this.selectedFunction = currentFunc;
	}

	changeDisplayValue(value) {
		this.displayValue = value;
		this.displayPushedNr.textContent =
			value === null ? "0" : value.toString();
	}
}

new Calculator();

// function compounding(currentPushedNr, currentPushedNrClone, currentPushedNrClone2, currentPushedNrClone3) {

//    if (currentValueBtn.includes('x^')) {
//       let digit = Number(currentPushedNr);
//       currentPushedNr = Math.pow(digit, 2);
//       currentPushedNrClone = currentPushedNr;
//       currentPushedNrClone2 = currentPushedNr;
//       currentPushedNrClone3 = currentPushedNr;
//       displayPushedNr.innerHTML = currentPushedNr;
//    }

// function displayLastBtns(concatenatedStrs) {

//    if ((resultOfOperation < 1) || (pushedOperator.length < 1)) {
//       displayLastPushedBtns.innerHTML = concatenatedStrs;
//    }

//    if ((resultOfOperation > 1) && (pushedOperator.length < 1)) {
//       displayLastPushedBtns.innerHTML = resultOfOperation2 + pushedOperatorClone2;
//    }

//    if ((resultOfOperation > 1) && (pushedOperator.length > 0)) {
//       displayLastPushedBtns.innerHTML = resultOfOperation + pushedOperator;
//    }

// }

// function result(digitToMathOperation, digitToMathOperation2, pushedOperator) {

//    if ((pushedOperator === '+') && (digitToMathOperation2 > 1) ) {
//       resultOfOperation = digitToMathOperation + digitToMathOperation2;
//       resultOfOperation2 = resultOfOperation;
//    }

//    if ((pushedOperator === 'x') && (digitToMathOperation2 > 1)) {
//       resultOfOperation = digitToMathOperation * digitToMathOperation2;
//       resultOfOperation2 = resultOfOperation;
//    }

//    if ((pushedOperator === '-') && (digitToMathOperation2 > 1)) {
//       resultOfOperation = digitToMathOperation - digitToMathOperation2;
//       resultOfOperation2 = resultOfOperation;
//    }

//    if ((pushedOperator === '/') && (digitToMathOperation2 > 1)) {
//       resultOfOperation = digitToMathOperation / digitToMathOperation2;
//       resultOfOperation2 = resultOfOperation;
//    }

// }
