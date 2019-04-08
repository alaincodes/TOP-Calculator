const myResult = document.getElementById('myResult');
const myBtnClear = document.getElementById('myBtnClear');

myResult.innerHTML = '0';

function addition(a, b) {
  return a + b;
}

function soustract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) { return "Don't do me like that..."; }
  return a / b;
}

function equal(a, operator, b) {
  switch (operator) {
    case `addition`:
    return addition(a, b);
    break;
    case `soustract`:
    return soustract(a, b);
    break;
    case `multiply`:
    return multiply(a, b);
    break;
    case `divide`:
    return divide(a, b);
    break;
    default:
    return `Please stop..`;
  }
}