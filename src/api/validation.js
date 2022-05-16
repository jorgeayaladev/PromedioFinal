export const evalNumber = (number) => {
  const num = parseFloat(number);
  if (num >= 0 && num <= 20) {
    return number;
  } else {
    return "";
  }
};

export const validInput = (num) => {
  if (typeof num === Number && (num < 0 || num > 20)) {
    return true;
  }
};
