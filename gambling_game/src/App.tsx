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
function App() {
  const [arr, setArr] = useState<number[] | undefined>(undefined);
  return (
    <>
      <div className="m-16 flex items-center justify-center">
        <Grid ballArraySum={arr} />
        <div className="flex flex-col justify-center items-center gap-4">
          <button
            className="px-4 py-2 rounded-lg bg-white text-black"
            onClick={() => {
              setArr(returnsPrefixSum(main()));
            }}
          >
            Play
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
