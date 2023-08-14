import { Droppable } from "react-beautiful-dnd";
import { useStatus } from "../context/statusContext";
import { TaskCard } from "./TaskCard";

export const Ready = () => {
  const { statusReady } = useStatus();
  return (
    <Droppable droppableId="ReadyTasks">
      {(provided, snapshot) => (
        <div
          className={`w-[350px] ${
            snapshot.isDraggingOver ? "bg-gray-300" : ""
          } rounded-md`}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h2 className="border-b-4 border-gray-400 text-left pb-[15px] font-bold">
            READY{" "}
            <span className="text-gray-500 text-[12px] ">
              ({statusReady?.length})
            </span>
          </h2>

          {statusReady?.map((ready, index) => (
            <div key={ready?.id}>
              <TaskCard task={ready} index={index} />
            </div>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
