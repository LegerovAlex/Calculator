import './Button.css';
import { createElement } from '../../utils/createElement';
import { buttonStyleMap } from '../../constants/buttons';

export function Button(value) {
  const classes = ['button'];

  if (buttonStyleMap.orange.includes(value)) {
    classes.push('button--orange');
  } else if (buttonStyleMap.lightgray.includes(value)) {
    classes.push('button--lightgray');
  }

  const button = createElement('button', [document.createTextNode(value)], {
    cssClass: classes,
  });

  return button;
}
