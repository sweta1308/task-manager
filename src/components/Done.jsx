import { Droppable } from "react-beautiful-dnd";
import { useStatus } from "../context/statusContext";
import { TaskCard } from "./TaskCard";

export const Done = () => {
  const { statusDone } = useStatus();
  return (
    <Droppable droppableId="DoneTasks">
      {(provided, snapshot) => (
        <div
          className={`w-[350px] xs:w-[300px] ${
            snapshot.isDraggingOver ? "bg-gray-300 dark:bg-dark-light" : ""
          } rounded-md pb-[40px]`}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h2 className="border-b-4 border-green-400 text-left pb-[15px] font-bold">
            DONE{" "}
            <span className="text-gray-500 text-[12px] ">
              ({statusDone?.length})
            </span>
          </h2>

          {statusDone?.length === 0 && <h1 className="font-bold text-[20px] mt-[20px]">No tasks added.</h1>}

          {statusDone?.map((done, index) => (
            <div key={done?.id}>
              <TaskCard task={done} index={index} />
            </div>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
