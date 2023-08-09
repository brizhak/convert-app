import rules from './rules.json';

let result;

const convert = async ({ distance, convertTo }) => {
  const { unit, value } = distance;
  if (rules[unit][convertTo] === undefined) {
    alert('Select the unit of measure to convert');
  } else {
    result = (rules[unit][convertTo] * value).toFixed(2);
    return { unit: convertTo, value: result };
  }
};

export default convert;
