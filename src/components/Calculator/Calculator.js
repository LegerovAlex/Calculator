import './Calculator.css';
import { createElement } from '../../utils/createElement';
import { ButtonsList } from '../ButtonList/ButtonList';
import { Display } from '../Display/Display';
import { handleButtonClick } from '../../logic/calculatorLogic';

export function Calculator() {
  const buttonsList = ButtonsList();
  const display = Display();

  buttonsList.addEventListener('click', (event) => {
    if (!event.target.classList.contains('button')) {
      return;
    }
    const value = event.target.textContent;
    handleButtonClick(value);
  });

  const calculatorContainer = createElement('div', [display, buttonsList], {
    cssClass: ['calculator'],
  });

  return calculatorContainer;
}
