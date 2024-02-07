function takeSquareRoot() {
    let number1 = +document.getElementById("input1").value;
    

    let squareRoot = Math.sqrt(number)
    document.getElementById("result").innerHTML = sqareRoot;

    let absolutevalue = Math.absolutevalue(number)
    document.getElementById("result").innerHTML = absolutevalue;

    let rounddown = Math.rounddown(number)
    document.getElementById("result").innerHTML = rounddown;

    let sin = Math.sin(number)
    document.getElementById("result").innerHTML = sin
}
