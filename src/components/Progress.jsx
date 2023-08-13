import { useStatus } from "../context/statusContext";
import { TaskCard } from "./TaskCard";

export const Progress = () => {
  const { statusProgress } = useStatus();
  return (
    <div>
      <h2 className="border-b-4 border-yellow-400 text-left pb-[15px] font-bold">
        IN PROGRESS{" "}
        <span className="text-gray-500 text-[12px] ">
          ({statusProgress?.length})
        </span>
      </h2>

      {statusProgress?.map((progress) => (
        <div key={progress?.id}>
          <TaskCard task={progress} />
        </div>
      ))}
    </div>
  );
};
