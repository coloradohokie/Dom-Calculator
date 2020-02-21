
var expression = []
const screen = document.getElementById('screen')
let cleanScreen = new Boolean(true)


buttonsContainer = document.getElementById('buttons-container')
spans = buttonsContainer.querySelectorAll("span")
spans.forEach(span => {
    span.addEventListener('click',evaluateClick)
})

function evaluateExpression(expression) {
    const num=[]
    let x=0
    num[x] = []
    operations = []
    let operand = ""
    expression.forEach( element => {
        if (Number.isInteger(element)) {
            console.log("is a number", element)
            operand = operand.concat(element)
            num[x] = parseInt(operand)
        }
        else {
            console.log("not a number:", element)
            operations.push(element)
            x += 1
            operand = ""
        }

    })

    console.log(num)
    console.log(operations)
    result = num[0]

    for (i=0; i< num.length; i++) {
        if (operations[i] === "+") {
            result = result + num[i+1]
        }
        if (operations[i] === "-") {
            result = result - num[i+1]
        }
        if (operations[i] === "x") {
            result = result * num[i+1]
        }
        if (operations[i] === "÷") {
            result = result / num[i+1]
        }
    }
    console.log(result)
    if ((isNaN(result)) || (result === Infinity)) {
        screen.innerText = "Error"
    } 
    else {
        screen.innerText=result
    }


}

function evaluateClick(event) {
    if (event.target.innerText === "C") {
        screen.innerText = ""
        expression = []
        result = 0
        cleanScreen = new Boolean(true)
    }
    else if (event.target.innerText === "=") {
        cleanScreen = false;
        evaluateExpression(expression)
    }
    else {
        if (cleanScreen) {
            screen.innerText += event.target.innerText
        }
        else {
            screen.innerText = event.target.innerText
        }
        let parsedNumber = event.target.innerText
        if (parsedNumber == "+" || parsedNumber == "-" || parsedNumber == "x" || parsedNumber == "÷") {
            expression.push(parsedNumber)
            console.log("operator", parsedNumber)
        } 
        else {
            expression.push(parseInt(parsedNumber))
            console.log("number", parsedNumber)
        }
    }
    
}
