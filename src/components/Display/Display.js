import './Display.css';
import { createElement } from '../../utils/createElement';
import { calculatorState } from '../../state/store';

export function Display() {
  const displayElement = createElement('div', [document.createTextNode(calculatorState.current)], {
    cssClass: ['display'],
  });

  return displayElement;
}
