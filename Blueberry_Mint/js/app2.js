//New: Blueberry mint calculator
//------------------------------------------------
//Original:
//Takes numBtns
//Calculates the right from the left
//display output at every step
//clears if need be
//--------------------------------------------------
//New: 
//seperates numbers based on an array
//shrinks list to allow more numbers
//------------------------------------------------------

//Get input from HTML:
var numbers = document.querySelectorAll('.numbers')
var operators = document.querySelectorAll('.operators')

// 1a): Store both numbers and operators in a list:
var numList = []

//Push numbers to list
for (let i = 0; i < numbers.length; i++) {

    numbers[i].addEventListener('click', function(event) {
        
        if (numList.length < 15) {

            numList.push(event.target.getAttribute('value'))

        }

        output.innerHTML = numList.join("")

    })
    
}

//push operators to list
for (let i = 0; i < operators.length; i++) {

    operators[i].addEventListener('click', function(event) {
        
        if (numList.length < 15) {

            numList.push(event.target.getAttribute('value'))

        }

        output.innerHTML = numList.join("")

    })

}

//Seperate lists based on operators:
//Calculate and display to user  

var left = []
var right = []
var result = 0

function calculate() {

    for (let i = 0; i < numList.length; i++) {

        switch (numList[i]) {

            case '*':

                left.push(numList.slice(0, numList[i]))//numbers for the left
                right.push(numList.slice(numList[i])) //numbers for the right

                parseInt(left) //turns the left into an integer
                parseInt(right) //turns the right into an integer

                result = left * right

                break;
        
            case '/':
                left.push(numList.slice(0, numList[i]))//numbers for the left
                right.push(numList.slice(numList[i])) //numbers for the right

                parseInt(left) //turns the left into an integer
                parseInt(right) //turns the right into an integer

                result = left / right


                break;

            case '+':

                left.push(numList.slice(0, numList[i]))//numbers for the left
                right.push(numList.slice(numList[i])) //numbers for the right

                parseInt(left) //turns the left into an integer
                parseInt(right) //turns the right into an integer

                result = left + right
                break;

            case '-':

                left.push(numList.slice(0, numList[i]))//numbers for the left
                right.push(numList.slice(numList[i])) //numbers for the right

                parseInt(left) //turns the left into an integer
                parseInt(right) //turns the right into an integer

                result = left - right
                break;
        }
        
        output.innerHTML = result

    }

}

function reset() {
    if (numList.length != 0) {

        output.innerHTML = '0'

    }

    numList = []
}




