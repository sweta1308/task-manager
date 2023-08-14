import { Droppable } from "react-beautiful-dnd";
import { useStatus } from "../context/statusContext";
import { TaskCard } from "./TaskCard";

export const Progress = () => {
  const { statusProgress } = useStatus();
  return (
    <Droppable droppableId="ProgressTasks">
      {(provided, snapshot) => (
        <div
          className={`w-[350px] ${
            snapshot.isDraggingOver ? "bg-gray-300" : ""
          } rounded-md`}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h2 className="border-b-4 border-yellow-400 text-left pb-[15px] font-bold">
            IN PROGRESS{" "}
            <span className="text-gray-500 text-[12px] ">
              ({statusProgress?.length})
            </span>
          </h2>

          {statusProgress?.map((progress, index) => (
            <div key={progress?.id}>
              <TaskCard task={progress} index={index} />
            </div>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
