import {
  passwordToCodeHelper,
  randomNumberBetweenThem,
  randomNumberByLength,
} from "./helper/random";

export const generateToken = (password) => {
  if (typeof password != "number") {
    throw Error("only number allowed password");
  }
  if (JSON.stringify(password).length != 4) {
    throw Error("password should be 4 length");
  }
  if (JSON.stringify(password).includes("0")) {
    throw Error("0 is not allowed in password for secruity reason");
  }

  const timeStamp = new Date().getTime().toString();
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
  const token =
    JSON.stringify(randomNumber3) +
    magicNumberCode +
    JSON.stringify(randomNumber1) +
    splitedToken[0] +
    JSON.stringify(randomNumber2) +
    splitedToken[1];
  return token;
};

export const validateToken = (token, password) => {
  const timeStamp = new Date().getTime();
  const {
    randomNumber1Length,
    randomNumber2Length,
    randomNumber3Length,
    magicNumber1,
    magicNumber2,
    magicNumberCode,
  } = passwordToCodeHelper(JSON.stringify(password), JSON.stringify(timeStamp));
  let tokenWithoutSalt = token.slice(randomNumber3Length + 3);
  const magicNumberCodeInToken = token.slice(
    randomNumber3Length,
    randomNumber3Length + 3
  );
  if (magicNumberCodeInToken != magicNumberCode) {
    tokenWithoutSalt =
      magicNumberCode + magicNumberCodeInToken + tokenWithoutSalt;
  }
  const splitedToken = [
    tokenWithoutSalt.slice(0, randomNumber1Length),
    tokenWithoutSalt.slice(
      randomNumber1Length,
      randomNumber1Length + magicNumber1
    ),
    tokenWithoutSalt.slice(
      randomNumber1Length + magicNumber1,
      randomNumber1Length + magicNumber1 + randomNumber2Length
    ),
    tokenWithoutSalt.slice(
      randomNumber1Length + magicNumber1 + randomNumber2Length,
      randomNumber1Length + magicNumber1 + randomNumber2Length + magicNumber2
    ),
  ];

  const timeStampByToken = +(splitedToken[1] + splitedToken[3]);
  console.log(
    token,
    timeStampByToken - timeStamp,
    timeStampByToken - timeStamp > -10 && timeStampByToken - timeStamp < 100
  );
};
export default { validateToken, generateToken };
