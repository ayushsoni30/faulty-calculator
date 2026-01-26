
  function calculate() {
  let a = Math.random();

  let input1 = Number(document.getElementById("num1").value);
  let input2 = Number(document.getElementById("num2").value);
  let operator = document.getElementById("operator").value;

  let result;

  if (a < 0.8) {
    // Correct logic
    if (operator == "+") result = input1 + input2;
    else if (operator == "*") result = input1 * input2;
    else if (operator == "-") result = input1 - input2;
    else if (operator == "/") result = input1 / input2;
    else if (operator == "**") result = input1 ** input2;
    else result = "Invalid Operator";
  } else {
    
    if (operator == "+") result = input1 - input2;
    else if (operator == "*") result = input1 + input2;
    else if (operator == "-") result = input1 / input2;
    else if (operator == "/") result = input1 ** input2;
    else if (operator == "**") result = input1 % input2;
    else result = "Invalid Operator";
  }

  document.getElementById("result").innerText = "Result: " + result;
}
