import './style.css';
import { render } from './utils/render.js';
import { Calculator } from './components/Calculator/Calculator.js';

const calculator = Calculator();

render(calculator, '#root');
