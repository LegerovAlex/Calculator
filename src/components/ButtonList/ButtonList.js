import './ButtonList.css';
import { buttons } from '../../constants/buttons';
import { createElement } from '../../utils/createElement';
import { Button } from '../Button/Button';

export function ButtonsList() {
  const rows = buttons.map((row) => {
    const buttonsElements = row.map((value) => Button(value));
    return createElement('div', buttonsElements, {
      cssClass: ['button-row'],
    });
  });

  const buttonsContainer = createElement('div', rows, {
    cssClass: ['buttons-container'],
  });
  return buttonsContainer;
}
