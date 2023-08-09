const showResult = (resultEl, distance, value, fromUnit, unit) => {
  resultEl.textContent = `At ${distance} ${fromUnit} ${value} ${unit}`;
};

export default showResult;
