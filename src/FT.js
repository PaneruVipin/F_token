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

export const validateToken = (tk) => {
  setTimeout(() => {
    const our_tk = new Date().getTime();
    const mgn1 = +tk[tk.length - 2];
    const mgn2 = +tk[tk.length - 1];
    const splt_tk = [
      tk.substr(0, 7),
      tk.substr(7, mgn1),
      tk.substr(mgn1 + 7, 8),
      tk.substr(mgn1 + 7 + 8, mgn2),
    ];
    const dcr_tk = +(splt_tk[1] + splt_tk[3]);
    console.log(tk, dcr_tk - our_tk > -10 && dcr_tk - our_tk < 100);
  }, 2);
};

export default { validateToken, generateToken };
