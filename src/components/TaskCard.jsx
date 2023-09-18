import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Delete, EditNote, Event, HourglassBottom } from "@mui/icons-material";
import { useTask } from "../context/taskContext";
import { Modal } from "@mui/material";
import { TaskModal } from "./TaskModal";

export const TaskCard = ({ task, index }) => {
  const {
    _id,
    name,
    summary,
    priority,
    assignee,
    startDate,
    endDate,
    taskType,
  } = task;
  const { deleteTask } = useTask();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Draggable draggableId={_id} index={index}>
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

            <p className="text-[14px]">
              {summary.length > 35 ? summary.substring(0, 35) + "..." : summary}
            </p>

            <p className="text-[14px]">Assignee: {assignee}</p>
            <p className="text-[14px]"> Type: {taskType}</p>

            <div className="mt-[10px]">
              <span className="text-[12px] border-2 w-fit px-[7px] rounded-2xl bg-gray-200 mr-[10px] dark:bg-dark-light">
                <Event
                  sx={{
                    fontSize: "14px",
                    marginRight: "5px",
                    marginTop: "-2px",
                  }}
                />
                {new Date(startDate).toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })}
              </span>

              <span className="text-[12px] border-2 w-fit px-[7px] rounded-2xl bg-gray-200  dark:bg-dark-light">
                <HourglassBottom
                  sx={{
                    fontSize: "14px",
                    marginRight: "5px",
                    marginTop: "-2px",
                  }}
                />
                {new Date(endDate).toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })}
              </span>
            </div>

            <div
              className="mt-[10px] text-right"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(true)}
                className="cursor-pointer"
              >
                <EditNote />
              </button>
              <button
                onClick={() => deleteTask(_id)}
                className="cursor-pointer"
              >
                <Delete sx={{ fontSize: "20px", marginLeft: "15px" }} />
              </button>
            </div>
          </div>
        )}
      </Draggable>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <TaskModal task={task} setShowModal={setShowModal} />
      </Modal>
    </>
  );
};
