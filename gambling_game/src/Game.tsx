const colorMap = [
  "bg-red-800",
  "bg-red-700",
  "bg-red-600",
  "bg-red-500",
  "bg-orange-800",
  "bg-orange-700",
  "bg-orange-600",
  "bg-orange-500",
  "bg-yellow-500",
];
const textMap = ["0.5x", "1x", "1.1x", "1.2x", "1.4", "1.4", "2x", "9x", "16x"];
export default function Grid({ ballArraySum }: { ballArraySum?: number[] }) {
  let arr: number[] = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center">
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
    <div className="flex gap-x-1 items-center justify-center">
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
    <div className="w-8 h-8 rounded-full flex items-center justify-center">
      <div className={visible ? `w-4 h-4 rounded-full bg-cyan-400` : ``}></div>
    </div>
  );
}

function RewardBox({ color, text }: { color: string; text: string }) {
  return (
    <div
      className={`w-8 h-8 text-sm ${color} flex items-center justify-center font-bold text-sm text-black`}
    >
      {text}
    </div>
  );
}
function RewardRow() {
  let arr: number[] = Array.from({ length: 18 }, (_, i) => i);
  return (
    <div className="flex gap-x-1 items-center justify-center">
      {arr.map((_, i) => (
        <>
          <Obstacle2 key={i} />
          {i != arr.length - 1 && i < 9 && (
            <RewardBox color={colorMap[i]} text={textMap[8 - i]} />
          )}
          {i != arr.length - 1 && i >= 9 && (
            <RewardBox color={colorMap[16 - i]} text={textMap[i - 8]} />
          )}
        </>
      ))}
    </div>
  );
}
