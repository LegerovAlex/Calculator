import { calculatorState } from '../state/store';
import { add, divide, multiply, subtract, toggleSign, percent } from '../utils/math';
import { updateDisplay } from '../utils/updateDisplay';

export function handleButtonClick(value) {
  if ((value >= '0' && value <= '9') || value === '.') {
    handleNumber(value);
  } else if (['+', '-', '*', '/', '='].includes(value)) {
    handleOperator(value);
  } else {
    handleSpecial(value);
  }
  updateDisplay();
}

function handleNumber(value) {
  const maxLength = 9;

  if (calculatorState.overwrite) {
    calculatorState.current = value === '.' ? '0.' : value;
    calculatorState.overwrite = false;
    return;
  }

  if (value === '.' && calculatorState.current.includes('.')) {
    return;
  }

  if (calculatorState.current.replace('.', '').length >= maxLength) {
    return;
  }

  if (calculatorState.current === '0' && value !== '.') {
    calculatorState.current = value;
    return;
  }

  calculatorState.current += value === '.' ? '.' : value;
}

function handleOperator(value) {
  if (calculatorState.operation && !calculatorState.overwrite) {
    calculatorState.current = calculate().toString();
  }

  calculatorState.previous = calculatorState.current;
  calculatorState.operation = value;
  calculatorState.overwrite = true;
}

function handleSpecial(value) {
  switch (value) {
    case 'AC':
      calculatorState.current = '0';
      calculatorState.previous = null;
      calculatorState.operation = null;
      calculatorState.overwrite = false;
      break;
    case '+/-':
      calculatorState.current = toggleSign(parseFloat(calculatorState.current)).toString();
      break;
    case '%':
      calculatorState.current = percent(parseFloat(calculatorState.current)).toString();
      break;
  }
}

function calculate() {
  const prev = parseFloat(calculatorState.previous);
  const current = parseFloat(calculatorState.current);

  if (calculatorState.operation === '/' && current === 0) {
    return 'Error';
  }

  switch (calculatorState.operation) {
    case '+':
      return add(prev, current);
    case '-':
      return subtract(prev, current);
    case '*':
      return multiply(prev, current);
    case '/':
      return divide(prev, current);
    default:
      return current;
  }
}
