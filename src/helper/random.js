export function randomNumberByLength(length) {
  const characters = "123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return +result;
}

export function randomNumberBetweenThem(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function passwordToCodeHelper(password, timeStamp) {
  const splitedPassword = password.split("");
  const randomNumber1Length = +splitedPassword?.[2] + 9;
  const randomNumber2Length = +splitedPassword?.[0] + 9;
  const randomNumber3Length = +splitedPassword?.[3] + 9;
  const magicNumber1 =
    +splitedPassword?.[1] < 5
      ? +splitedPassword?.[1] + 5
      : +splitedPassword?.[1];
  const magicNumber2 = timeStamp.length - magicNumber1;
  const magicNumberCode =
    +splitedPassword?.[1] < 5
      ? randomNumberBetweenThem(1, 5)
      : randomNumberBetweenThem(6, 9);
  return {
    randomNumber1Length,
    randomNumber2Length,
    randomNumber3Length,
    magicNumber1,
    magicNumber2,
    magicNumberCode,
  };
}

export const isMagicNumberCodeSameCatagry = (code1, code2) => {
  function catagary(num) {
    if (num >= 1 && num <= 5) {
      return "cat_1";
    } else {
      return "cat_2";
    }
  }
  return catagary(+code1) == catagary(+code2);
};

export const dynamicCodes = {
  10: 4448846789,
  11: 4848846789,
  12: 5248846789,
  13: 5648846789,
  14: 6488467890,
  15: 6448846789,
  16: 6848846789,
  17: 7248846789,
  18: 7648846789,
  19: 8488467890,
  20: 8448846789,
  21: 8848846789,
  22: 9248846789,
  23: 9648846789,
  24: 1488467894,
  25: 10448846789,
  26: 10848846789,
  27: 11248846789,
  28: 11648846789,
  29: 12488467890,
  30: 12448846789,
  31: 12848846789,
  32: 13248846789,
  33: 13648846789,
  34: 14488467890,
  35: 14448846789,
  36: 14848846789,
  37: 15248846789,
  38: 15648846789,
  39: 16488467890,
  40: 16448846789,
  41: 16848846789,
  42: 17248846789,
  43: 17648846789,
  44: 18488467890,
  45: 18448846789,
  46: 18848846789,
  47: 19248846789,
  48: 19648846789,
  49: 24884678948,
  50: 20448846789,
  51: 20848846789,
  52: 21248846789,
  53: 21648846789,
  54: 22488467890,
  55: 22448846789,
  56: 22848846789,
  57: 23248846789,
  58: 23648846789,
  59: 24488467890,
  60: 24448846789,
  61: 24848846789,
  62: 25248846789,
  63: 25648846789,
  64: 26488467890,
  65: 26448846789,
  66: 26848846789,
  67: 27248846789,
  68: 27648846789,
  69: 28488467890,
  70: 28448846789,
  71: 28848846789,
  72: 29248846789,
  73: 29648846789,
  74: 34884678948,
  75: 30448846789,
  76: 30848846789,
  77: 31248846789,
  78: 31648846789,
  79: 32488467890,
  80: 32448846789,
  81: 32848846789,
  82: 33248846789,
  83: 33648846789,
  84: 34488467890,
  85: 34448846789,
  86: 34848846789,
  87: 35248846789,
  88: 35648846789,
  89: 36488467890,
  90: 36448846789,
  91: 36848846789,
  92: 37248846789,
  93: 37648846789,
  94: 38488467890,
  95: 38448846789,
  96: 38848846789,
  97: 39248846789,
  98: 39648846789,
  99: 44884678948,
};

export const dynamicNumberWithCode = () => {
  const code = randomNumberBetweenThem(11, 99);
  const number = dynamicCodes[code];
  return { number, code };
};
