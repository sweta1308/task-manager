import { Draggable } from "react-beautiful-dnd";

export const TaskCard = ({ task, index }) => {
  const { id, name, priority, assignee, startDate, type } = task;
  return (
    <>
      <Draggable draggableId={id.toString()} index={index}>
        {(provided, snapshot) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={`bg-white w-[350px] my-[20px] py-[15px] px-[30px] text-left rounded-md shadow-md cursor-grab xs:w-[300px] hover:bg-gray-100 hover:scale-105 ${
              snapshot.isDragging ? "shadow-xl bg-gray-100" : ""
            } dark:bg-dark-mode`}
          >
            <div className="flex justify-between">
              <h2 className="font-bold">{name}</h2>
              <div>
                {priority === "High" ? (
                  <i
                    className="fa-solid fa-circle-exclamation"
                    style={{ color: "#ff0000" }}
                  ></i>
                ) : priority === "Medium" ? (
                  <i
                    className="fa-solid fa-arrow-up"
                    style={{ color: "#ffea00" }}
                  ></i>
                ) : null}
              </div>
            </div>

            <p className="text-[14px]">Assigned By: {assignee}</p>
            <p className="text-[14px]"> Type: Complete {type}</p>
            <p className="text-[12px] border-2 w-fit px-[7px] rounded-2xl mt-[10px]">
              <i className="fa-solid fa-list-check text-[12px]"></i> Default
              Task List
            </p>
            <p className="text-[12px] border-2 w-fit px-[7px] rounded-2xl bg-gray-200 mt-[15px] dark:bg-dark-light">
              {new Date(startDate).toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </p>
          </div>
        )}
      </Draggable>
    </>
  );
};
