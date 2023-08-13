import { useStatus } from "../context/statusContext";
import { TaskCard } from "./TaskCard";

export const Ready = () => {
  const { statusReady } = useStatus();
  return (
    <div>
      <h2 className="border-b-4 border-gray-400 text-left pb-[15px] font-bold">
        READY{" "}
        <span className="text-gray-500 text-[12px] ">
          ({statusReady?.length})
        </span>
      </h2>

      {statusReady?.map((ready) => (
        <div key={ready?.id}>
          <TaskCard task={ready} />
        </div>
      ))}
    </div>
  );
};
