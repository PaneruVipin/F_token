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
  const catagary = (number) => {
    if ((number) => 1 && number <= 5) {
      return "cat_1";
    } else {
      return "cat_2";
    }
  };
  return catagary(+code1) == catagary(+code2);
};

const dynamicCodes = {
  10: 4400,
  11: 4800,
  12: 5200,
  13: 5600,
  14: 6000,
  15: 6400,
  16: 6800,
  17: 7200,
  18: 7600,
  19: 8000,
  20: 8400,
  21: 8800,
  22: 9200,
  23: 9600,
  24: 10000,
  25: 10400,
  26: 10800,
  27: 11200,
  28: 11600,
  29: 12000,
  30: 12400,
  31: 12800,
  32: 13200,
  33: 13600,
  34: 14000,
  35: 14400,
  36: 14800,
  37: 15200,
  38: 15600,
  39: 16000,
  40: 16400,
  41: 16800,
  42: 17200,
  43: 17600,
  44: 18000,
  45: 18400,
  46: 18800,
  47: 19200,
  48: 19600,
  49: 20000,
  50: 20400,
  51: 20800,
  52: 21200,
  53: 21600,
  54: 22000,
  55: 22400,
  56: 22800,
  57: 23200,
  58: 23600,
  59: 24000,
  60: 24400,
  61: 24800,
  62: 25200,
  63: 25600,
  64: 26000,
  65: 26400,
  66: 26800,
  67: 27200,
  68: 27600,
  69: 28000,
  70: 28400,
  71: 28800,
  72: 29200,
  73: 29600,
  74: 30000,
  75: 30400,
  76: 30800,
  77: 31200,
  78: 31600,
  79: 32000,
  80: 32400,
  81: 32800,
  82: 33200,
  83: 33600,
  84: 34000,
  85: 34400,
  86: 34800,
  87: 35200,
  88: 35600,
  89: 36000,
  90: 36400,
  91: 36800,
  92: 37200,
  93: 37600,
  94: 38000,
  95: 38400,
  96: 38800,
  97: 39200,
  98: 39600,
  99: 40000,
};

export const dynamicNumberWithCode = () => {
  const code = randomNumberBetweenThem(11, 99);
  const number = dynamicCodes[code];
  return { number, code };
};
