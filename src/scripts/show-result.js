const showResult = (resultEl, distance, fromUnit, toUnit, result) => {
  resultEl.textContent = `At ${distance} ${fromUnit} ${result.toFixed(
    2
  )} ${toUnit}`;
};

export default showResult;
