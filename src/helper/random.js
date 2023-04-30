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
  const magicNumberCode = +splitedPassword?.[1] < 5 ? 401 : 200;
  return {
    randomNumber1Length,
    randomNumber2Length,
    randomNumber3Length,
    magicNumber1,
    magicNumber2,
    magicNumberCode
  };
}
