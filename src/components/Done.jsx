import { useStatus } from "../context/statusContext";
import { AddTask } from "./AddTaskBtn";
import { TaskCard } from "./TaskCard";

export const Done = () => {
  const { statusDone } = useStatus();
  return (
    <div>
      <h2 className="border-b-4 border-green-400 text-left pb-[15px] font-bold">
        DONE{" "}
        <span className="text-gray-500 text-[12px] ">
          ({statusDone?.length})
        </span>
      </h2>

      {statusDone?.map((done) => (
        <div key={done?.id}>
          <TaskCard task={done} />
        </div>
      ))}

      <AddTask />
    </div>
  );
};
