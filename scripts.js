
class Calculate {
    constructor() {
        this.total = 0;
        console.log("initial total: ", this.total);
    }
    // add 
    addNumbers(a, b) {
        console.log("addNumbers");
        return this.total = a + b;
    }
    // subtract
    subtractNumbers(a, b) {
        console.log("subtractNumbers");
        return this.total = a - b;
    }
    // multiply
    multiplyNumbers(a, b) {
        console.log("multiplyNumbers");
        return this.total = a * b;
    }  
    // divide
    divideNumbers(a, b) {
        console.log("divideNumbers");
        return this.total = a / b;
    }
}
class App{
    constructor() {
        this.calc = new Calculate();

        // store the first number
        this.firstPrompt = prompt("Please enter first number.");
        this.firstNumber = parseInt(this.firstPrompt);
        console.log("firstNumber", this.firstNumber);

        // store the operator
        this.operator = prompt("Please enter operator (+, -, *, /).");
        console.log("operator", this.operator);

        // store the second number
        this.secondPrompt = prompt("Please enter second number.");
        this.secondNumber = parseInt(this.secondPrompt);
        console.log("secondNumber", this.secondNumber);

        //console.log(this.firstNumber + " " + this.operator + " " + this.secondNumber);
        console.log(`${this.firstNumber} ${this.operator} ${this.secondNumber}`);
    }
    callCalculations() {
        switch(this.operator) {
            case "+":
                this.calc.addNumbers(this.firstNumber, this.secondNumber);
                console.log("total", this.calc.total);
                break;
            case "-":
                this.calc.subtractNumbers(this.firstNumber, this.secondNumber);
                break;
            case "*":
                this.calc.multiplyNumbers(this.firstNumber, this.secondNumber);
                break;
            case "/":
                this.calc.divideNumbers(this.firstNumber, this.secondNumber);
                break;                    
                    
            default:
              // code block
          }
    }
    displayResult() {
         
        this.equation = `${this.firstNumber} ${this.operator} ${this.secondNumber} = ${this.calc.total}`;
        console.log(this.equation);
        
        alert(this.equation); 
    }

}
//let firstCalculation = new Calculate();
let startApp = new App();
startApp.callCalculations();
startApp.displayResult();


