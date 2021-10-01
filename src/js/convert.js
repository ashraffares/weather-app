const Convert = {
  CtoF: temp => (((temp * (9 / 5)) + 32)).toFixed(2),
  FtoC: temp => ((temp - 32) * (5 / 9)).toFixed(2),
  KtoF: temp => (((temp - 273.15) * (9 / 5)) + 32).toFixed(2),
};

export default Convert;
