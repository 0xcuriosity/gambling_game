import { useState } from "react";
import Grid from "./Game";
// TODO - migrate this logic over to server
// TODO - get the prefixSum  Array from the server over an HTTP request
// TODO - Add crypto
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
function returnsPrefixSum(numArray: number[]) {
  const arr: number[] = [];
  let sum = 0;
  for (let i: number = 0; i < numArray.length; i++) {
    sum += numArray[i];
    arr.push(sum);
  }
  return arr;
}
const rewardMap = [
  16, 9, 2, 1.4, 1.4, 1.2, 1.1, 1, 0.5, 1, 1.1, 1.2, 1.4, 1.4, 2, 9, 16,
];
function App() {
  const [arr, setArr] = useState<number[] | undefined>(undefined);
  let rewardTimes1 = 0;
  let rewardTimes2 = 1;
  function play() {
    const arr1 = returnsPrefixSum(main());
    setArr(arr1);
    const position = arr1[arr1.length - 1];
    return rewardMap[position];
  }
  return (
    <>
      <div className="m-16 flex items-center justify-center">
        <Grid ballArraySum={arr} />
        <div className="flex flex-col justify-center items-center gap-4">
          <button
            className="px-4 py-2 rounded-lg bg-white text-black"
            onClick={play}
          >
            Play
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-white text-black"
            onClick={() => {
              for (let i = 0; i < 10000; i++) {
                rewardTimes1 += play();
              }
              console.log(rewardTimes1 / 10000);
            }}
          >
            Simulate1
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-white text-black"
            onClick={() => {
              for (let i = 0; i < 10000; i++) {
                if (rewardTimes2 < 0.01) {
                  break;
                }
                rewardTimes2 *= play();
              }
              console.log(rewardTimes2);
            }}
          >
            Simulate2
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-white text-black"
            onClick={() => {
              setArr(undefined);
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
