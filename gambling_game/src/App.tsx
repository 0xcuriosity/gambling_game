import { useState } from "react";
import Grid from "./Game";
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
        <button
          className="px-4 py-2 rounded-lg bg-white text-black"
          onClick={() => {
            setArr(returnsPrefixSum(main()));
          }}
        >
          Play
        </button>
      </div>
    </>
  );
}

export default App;
