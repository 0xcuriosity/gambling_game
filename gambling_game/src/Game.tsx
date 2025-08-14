import { useState } from "react";

export default function Grid({ ballArraySum }: { ballArraySum?: number[] }) {
  let arr: number[] = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  return (
    <>
      <div className="flex flex-col gap-7 items-center justify-center">
        {arr.map((x, i) => (
          <>
            {ballArraySum ? (
              <Row key={i} number_of_dots={x} ballPosition={ballArraySum[i]} />
            ) : (
              <Row key={i} number_of_dots={x} />
            )}
          </>
        ))}
        <RewardRow />
      </div>
    </>
  );
}

function Row({
  number_of_dots,
  ballPosition,
}: {
  number_of_dots: number;
  ballPosition?: number;
}) {
  let arr: number[] = Array.from({ length: number_of_dots }, (_, i) => i);
  return (
    <div className="flex gap-x-2 items-center justify-center">
      {arr.map((_, i) => (
        <>
          <Obstacle key={i} />
          {i != arr.length - 1 && (
            <PotentialBall key={i} visible={i == ballPosition} />
          )}
        </>
      ))}
    </div>
  );
}

export function Obstacle() {
  return <div className="w-2 h-2 rounded-full bg-white"></div>;
}
export function Obstacle2() {
  return <div className="w-2 h-2 rounded-full"></div>;
}

export function PotentialBall({ visible }: { visible: boolean }) {
  return (
    <div
      className={
        visible ? `w-5 h-5 rounded-full bg-red-500` : `w-5 h-5 rounded-full`
      }
    ></div>
  );
}

function RewardBox() {
  return <div className={`w-5 h-5  bg-green-600 text-white text-sm`}></div>;
}
function RewardRow() {
  let arr: number[] = Array.from({ length: 18 }, (_, i) => i);
  return (
    <div className="flex gap-x-2 items-center justify-center">
      {arr.map((_, i) => (
        <>
          <Obstacle2 key={i} />
          {i != arr.length - 1 && <RewardBox />}
        </>
      ))}
    </div>
  );
}
