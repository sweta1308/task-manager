import { Droppable } from "react-beautiful-dnd";
import { useStatus } from "../context/statusContext";
import { TaskCard } from "./TaskCard";

export const Testing = () => {
  const { statusTesting } = useStatus();
  return (
    <Droppable droppableId="TestingTasks">
      {(provided, snapshot) => (
        <div
          className={`w-[350px] ${
            snapshot.isDraggingOver ? "bg-gray-300" : ""
          } rounded-md`}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h2 className="border-b-4 border-orange-400 text-left pb-[15px] font-bold">
            TESTING{" "}
            <span className="text-gray-500 text-[12px] ">
              ({statusTesting?.length})
            </span>
          </h2>

          {statusTesting?.map((testing, index) => (
            <div key={testing?.id}>
              <TaskCard task={testing} index={index} />
            </div>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
