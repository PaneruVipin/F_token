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
