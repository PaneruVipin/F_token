import {
  dynamicCodes,
  dynamicNumberWithCode,
  isMagicNumberCodeSameCatagry,
  passwordToCodeHelper,
  randomNumberByLength,
} from "./helper/random";

export const generateToken = (password: number) => {
  if (typeof password != "number") {
    throw new Error(
      "dynamic-token-error: only number allowed in dynamic-token password"
    );
  }
  if (JSON.stringify(password).length < 9) {
    throw new Error(
      "dynamic-token-error: password should be minimun 9 length"
    );
  }
  if (JSON.stringify(password).length > 12) {
    throw new Error(
      "dynamic-token-error: password should be less then and equal 12 numbers"
    );
  }
  if (JSON.stringify(password).includes("0")) {
    throw new Error(
      "dynamic-token-error: 0 is not allowed in password for secruity reason"
    );
  }

  const timeStamp = JSON.stringify(
    +(JSON.stringify(password).slice(4) + "99999") + new Date().getTime()
  );
  const {
    randomNumber1Length,
    randomNumber2Length,
    randomNumber3Length,
    magicNumber1,
    magicNumberCode,
  } = passwordToCodeHelper(JSON.stringify(password), timeStamp);

  const randomNumber1 = randomNumberByLength(randomNumber1Length);
  const randomNumber2 = randomNumberByLength(randomNumber2Length);
  const randomNumber3 = randomNumberByLength(randomNumber3Length);
  const splitedToken = [
    timeStamp.slice(0, magicNumber1),
    timeStamp.slice(magicNumber1),
  ];
  const { code, number } = dynamicNumberWithCode();
  const magicNumber1Extralength =
    JSON.stringify(number + +splitedToken[0]).length - magicNumber1;
  const token =
    JSON.stringify(randomNumber3) +
    magicNumberCode +
    JSON.stringify(randomNumber1) +
    code +
    JSON.stringify(magicNumber1Extralength) +
    JSON.stringify(+splitedToken[0] + number) +
    JSON.stringify(randomNumber2) +
    splitedToken[1];
  return token;
};

export const validateToken = (
  token: string,
  password: number,
  timeOut: number = 200
) => {
  if (typeof timeOut != "number") {
    throw new Error(
      "dynamic-token-error: only number allowed in dynamic-token timeout"
    );
  }
  if (timeOut < 50) {
    throw new Error(
      "dynamic-token-error: dynamic-token timeout minimum value is 50"
    );
  }
  if (timeOut > 600) {
    throw new Error(
      "dynamic-token-error: dynamic-token timeout maximum value is 600"
    );
  }
  if (typeof password != "number") {
    throw new Error(
      "dynamic-token-error: only number allowed in dynamic-token password"
    );
  }
  if (JSON.stringify(password).length < 9) {
    throw new Error(
      "dynamic-token-error: password should be minimum 9 length"
    );
  }
  if (JSON.stringify(password).length > 12) {
    throw new Error(
      "dynamic-token-error: password should be less then and equal 12 numbers"
    );
  }
  if (JSON.stringify(password).includes("0")) {
    throw new Error(
      "dynamic-token-error: 0 is not allowed in password for secruity reason"
    );
  }
  if (typeof token != "string") {
    throw new Error(
      "dynamic-token-error: inValid dynamic Token, token must be a string"
    );
  }
  if (Number.isNaN(+token)) {
    throw new Error("dynamic-token-error: inValid dynamic Token");
  }
  const timeStamp =
    +(JSON.stringify(password).slice(4) + "99999") + new Date().getTime();
  const {
    randomNumber1Length,
    randomNumber2Length,
    randomNumber3Length,
    magicNumber1,
    magicNumber2,
    magicNumberCode,
  } = passwordToCodeHelper(JSON.stringify(password), JSON.stringify(timeStamp));
  let tokenWithoutSalt = token.slice(randomNumber3Length + 1);
  const magicNumberCodeInToken = token.slice(
    randomNumber3Length,
    randomNumber3Length + 1
  );

  if (!isMagicNumberCodeSameCatagry(magicNumberCodeInToken, magicNumberCode)) {
    tokenWithoutSalt =
      magicNumberCode + magicNumberCodeInToken + tokenWithoutSalt;
  }
  const dynamicCode = tokenWithoutSalt.slice(
    randomNumber1Length,
    randomNumber1Length + 2
  );
  const magicNumber1Extralength = +tokenWithoutSalt.slice(
    randomNumber1Length + 2,
    randomNumber1Length + 3
  );
  const dynamicNumber = dynamicCodes[dynamicCode];
  const splitedToken = [
    tokenWithoutSalt.slice(0, randomNumber1Length),
    tokenWithoutSalt.slice(
      randomNumber1Length + 3,
      randomNumber1Length + 3 + magicNumber1 + magicNumber1Extralength
    ),
    tokenWithoutSalt.slice(
      randomNumber1Length + 3 + magicNumber1 + magicNumber1Extralength,
      randomNumber1Length +
        3 +
        magicNumber1 +
        magicNumber1Extralength +
        randomNumber2Length
    ),
    tokenWithoutSalt.slice(
      randomNumber1Length +
        3 +
        magicNumber1 +
        magicNumber1Extralength +
        randomNumber2Length,
      randomNumber1Length +
        3 +
        magicNumber1 +
        magicNumber1Extralength +
        randomNumber2Length +
        magicNumber2
    ),
  ];
  const timeStampByToken = +(
    +splitedToken[1] -
    dynamicNumber +
    splitedToken[3]
  );
  if (
    timeStamp - timeStampByToken > -1 &&
    timeStamp - timeStampByToken < timeOut
  ) {
    return;
  } else {
    throw new Error("dynamic-token-error: inValid dynamic-token token");
  }
};
export default { validateToken, generateToken };
