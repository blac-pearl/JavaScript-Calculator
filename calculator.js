console.log('Hello');

document.write('<p>Click button to start calculating.</p>')

function myFunction() {
    var x,y,z,operator;
    x=prompt("Type first number");
    operator = prompt('Type an operator');
    y=prompt("Type second number");
    
    if (operator == '+') {
        z = Number(x) + Number(y)
    } else if ((oper = !null)) {
        z = 'Error'
    } else if ((x = !null)) {
        z = 'Error'
    } else if ((y = !null)) {
        z = 'Error'
    } else if (operator == '/') {
        z = Number(x) / Number(y)
    } else if (operator == '*') {
        z = Number(x) * Number(y)
    } else if (operator == '-') {
        z = Number(x) - Number(y)
    }

    return z;
}
document.getElementById("demo").innerHTML =myFunction();