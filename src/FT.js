import { randomNumberBetweenThem, randomNumberByLength } from "./helper/random";

export const generateToken = () => {
  const randomNumber1 = randomNumberByLength(7);
  const randomNumber2 = randomNumberByLength(8);
  const timeStamp = new Date().getTime().toString();
  const magicNumber1 = randomNumberBetweenThem(5, 9);
  const magicNumber2 = timeStamp.length - magicNumber1;
  const splitedToken = [
    timeStamp.substring(0, magicNumber1),
    timeStamp.substring(magicNumber1),
  ];
  const token =
    randomNumber1 +
    splitedToken[0] +
    randomNumber2 +
    splitedToken[1] +
    magicNumber1 +
    magicNumber2;
  return token;
};

export const validateToken = (token) => {
  var timeStamp = new Date().getTime();
  var magicNumber1 = +token[token.length - 2];
  var magicNumber2 = +token[token.length - 1];
  var splitedToken = [
    token.substring(0, 7),
    token.substring(7, magicNumber1),
    token.substring(magicNumber1 + 7, 8),
    token.substring(magicNumber1 + 7 + 8, magicNumber2),
  ];

  var timeStampByToken = +(splitedToken[1] + splitedToken[3]);
  // console.log(token, timeStampByToken - timeStamp > -10 && timeStampByToken - timeStamp < 100);
};

export default { validateToken, generateToken };
