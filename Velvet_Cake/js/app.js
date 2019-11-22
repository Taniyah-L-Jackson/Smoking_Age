//Pseudo:

//first: Get the numbers
var numbers = document.querySelectorAll('.numbers')

//second: Get the operators
var operators = document.querySelectorAll('#operators')

//third: Have the output show on the screen
var output = document.getElementById('output')
//--------------------------------------------------------------------------

//first main: get first number
var numList = []

for (let i = 0; i < numbers.length; i++) { //goes through list of numbers
    numbers[i].addEventListener('click', function(event) {
        //gets numbers clicked

        let numBtn = event.target.getAttribute('value')
        //pushes the value of the numbers to the list

        //WIP
        if(numList.length < 15 && numList.length >= 0 ) {
            //only a certain amount of numbers can be added to the list

            numList.push(parseInt(numBtn))
            //changes the numbers from strings to integers

        }

        output.innerHTML = numList.join('')
        //.join() gets rid of the commas

    })

}

//second main: pause on operators
var calc = []
num1 = []

function operator(type) {

    for (let i = 0; i < numList.length; i++) {
        num1 += numList[i] //stores first set of numbers
    }

    num1 = parseInt(num1)
    
    switch (type) {
        case 'multiply': 
            calc.push('*')
            break;

        case 'divide':
            calc.push('/') 
            break;

        case 'add': 
            calc.push('+')
            break;

        case 'subtract': 
            calc.push('-')
            break;

    }
    output.innerHTML = calc //shows on-screen the calculations
    numList = []
}

//third main: process calculations
var result = 0
var num2 = []

function enter() {

    // num2 = numList.join("")
    // num1 = parseInt(num1)
    num2 = parseInt(numList)

    for (let i = 0; i < calc.length; i++) {
        switch (calc[i]) {
            case "+":
                result = num1 + num2;
                break;
        
            case "-":
                result = num1 - num2
                break;

            case "*":
                result = num1 * num2
                break;

            case "/":
                result = num1 / num2
                break;
        }  
        
    }

    //WIP
    result.toString()
    console.log(result)

    if(result < 10000000000000) { //makes sure all numbers can fit on the screen (MAX: 10000000000000)
        output.innerHTML = result

    }else {
        result = Number.parseFloat(result).toExponential(2) //round number if it's larger than display
        output.innerHTML = result
    }
    
    calc = [] //reset the operator storer
}

//fourth main: have a clear button
function clearBtn() { //fires when the user taps the 'clear' button

    if (num1.length != 0 || num2.length != 0) { //any value greater than 0 gets reset

        output.innerHTML = '0' //shows 0, representing the cleared array
    }

    num2 = [] //resets first number
    numList = [] 
}


