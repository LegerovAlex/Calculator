import { calculatorState } from '../state/store';

export function updateDisplay() {
  const displayElement = document.querySelector('.display');
  if (!displayElement) {
    return;
  }

  const number = +calculatorState.current;

  displayElement.textContent = formatResult(number);
}

function formatResult(number) {
  const formatted = parseFloat(number.toFixed(8)).toString();

  if (formatted.length > 12 || (number !== 0 && number < 0.000001 && number > -0.000001)) {
    return number.toExponential(6);
  }

  return formatted;
}
