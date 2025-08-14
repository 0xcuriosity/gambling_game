const randomNumberGenerator = () => {
  return Math.floor(Math.random() * 2);
};
function main() {
  const arr: number[] = [];
  for (let i: number = 0; i < 16; i++) {
    arr.push(randomNumberGenerator());
  }
  console.log(arr);
  return arr;
}
main();

// L = 0 , R = 1
