import rules from './rules.json';

let rule;

const convert = (distance, fromUnit, toUnit) => {
  if (rules[fromUnit][toUnit] === undefined) {
    alert('Select the unit of measure to convert');
  } else {
    rule = rules[fromUnit][toUnit];
    const result = distance * rule;
    return result;
  }
};

export default convert;
