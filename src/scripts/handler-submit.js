import convert from './convert-distance';
import showResult from './show-result';

const resultEl = document.getElementById('result');
const formEl = document.getElementById('conversion-form');

let result;

const onSubmit = async e => {
  e.preventDefault();
  const distance = document.getElementById('distance').value;
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;

  if (fromUnit === toUnit) {
    alert('Select the unit of measure to convert');
  } else {
    result = await convert(distance, fromUnit, toUnit);
  }

  if (result !== undefined) {
    showResult(resultEl, distance, fromUnit, toUnit, result);
  }
  formEl.reset();
};

formEl.addEventListener('submit', onSubmit);
