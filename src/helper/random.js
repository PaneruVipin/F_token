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

export const dynamicCodes = {
  10: 444884,
  11: 484884,
  12: 524884,
  13: 564884,
  14: 648840,
  15: 644884,
  16: 684884,
  17: 724884,
  18: 764884,
  19: 848840,
  20: 844884,
  21: 884884,
  22: 924884,
  23: 964884,
  24: 148844884,
  25: 1044884,
  26: 1084884,
  27: 1124884,
  28: 1164884,
  29: 1248840,
  30: 1244884,
  31: 1284884,
  32: 1324884,
  33: 1364884,
  34: 1448840,
  35: 1444884,
  36: 1484884,
  37: 1524884,
  38: 1564884,
  39: 1648840,
  40: 1644884,
  41: 1684884,
  42: 1724884,
  43: 1764884,
  44: 1848840,
  45: 1844884,
  46: 1884884,
  47: 1924884,
  48: 1964884,
  49: 248844884,
  50: 2044884,
  51: 2084884,
  52: 2124884,
  53: 2164884,
  54: 2248840,
  55: 2244884,
  56: 2284884,
  57: 2324884,
  58: 2364884,
  59: 2448840,
  60: 2444884,
  61: 2484884,
  62: 2524884,
  63: 2564884,
  64: 2648840,
  65: 2644884,
  66: 2684884,
  67: 2724884,
  68: 2764884,
  69: 2848840,
  70: 2844884,
  71: 2884884,
  72: 2924884,
  73: 2964884,
  74: 348844884,
  75: 3044884,
  76: 3084884,
  77: 3124884,
  78: 3164884,
  79: 3248840,
  80: 3244884,
  81: 3284884,
  82: 3324884,
  83: 3364884,
  84: 3448840,
  85: 3444884,
  86: 3484884,
  87: 3524884,
  88: 3564884,
  89: 3648840,
  90: 3644884,
  91: 3684884,
  92: 3724884,
  93: 3764884,
  94: 3848840,
  95: 3844884,
  96: 3884884,
  97: 3924884,
  98: 3964884,
  99: 448844884,
};

export const dynamicNumberWithCode = () => {
  const code = randomNumberBetweenThem(11, 99);
  const number = dynamicCodes[code];
  return { number, code };
};
