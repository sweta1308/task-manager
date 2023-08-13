import { useStatus } from "../context/statusContext";
import { AddTask } from "./AddTaskBtn";
import { TaskCard } from "./TaskCard";

export const Testing = () => {
  const { statusTesting } = useStatus();
  return (
    <div>
      <h2 className="border-b-4 border-orange-400 text-left pb-[15px] font-bold">
        TESTING{" "}
        <span className="text-gray-500 text-[12px] ">
          ({statusTesting?.length})
        </span>
      </h2>

      {statusTesting?.map((testing) => (
        <div key={testing?.id}>
          <TaskCard task={testing} />
        </div>
      ))}

      <AddTask />
    </div>
  );
};
