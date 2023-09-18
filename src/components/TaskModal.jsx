import { useState } from "react";
import { useTask } from "../context/taskContext";

export const TaskModal = ({ task, setShowModal }) => {
  const { updateTask, addTask } = useTask();
  const styles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  const [taskInput, setTaskInput] = useState(
    task || {
      name: "",
      summary: "",
      assignee: "",
      priority: "",
      startDate: "",
      endDate: "",
      taskType: "",
      status: "Ready",
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      updateTask(task._id, taskInput);
    } else {
      addTask(taskInput);
    }
    setTaskInput({
      name: "",
      summary: "",
      assignee: "",
      priority: "",
      startDate: "",
      endDate: "",
      taskType: "",
      status: "Ready",
    });
    setShowModal(false);
  };

  return (
    <>
      <div
        style={styles}
        className="bg-white p-[25px] w-[400px] xs:w-[300px] dark:bg-dark-mode dark:text-white dark:shadow-md shadow-white"
      >
        <h2 className="font-bold text-[20px]">
          {task ? "Update Task" : "Add New Task"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="my-[10px]">
            <p>Name</p>
            <input
              value={taskInput.name}
              onChange={(e) =>
                setTaskInput({ ...taskInput, name: e.target.value })
              }
              className="outline-none border-2 border-black rounded-md text-[14px] p-[5px] w-full dark:bg-dark-light"
              placeholder="Name of task"
              required
            />
          </label>

          <label className="my-[10px]">
            <p>Summary</p>
            <input
              value={taskInput.summary}
              onChange={(e) =>
                setTaskInput({ ...taskInput, summary: e.target.value })
              }
              className="outline-none border-2 border-black rounded-md text-[14px] p-[5px] w-full dark:bg-dark-light"
              placeholder="Short Summary"
              required
            />
          </label>

          <label className="my-[10px]">
            <p>Assignee</p>
            <input
              value={taskInput.assignee}
              onChange={(e) =>
                setTaskInput({ ...taskInput, assignee: e.target.value })
              }
              className="outline-none border-2 border-black rounded-md text-[14px] p-[5px] w-full dark:bg-dark-light"
              placeholder="John Doe"
              required
            />
          </label>

          <div className="flex my-[10px]">
            <label className="w-[48%] mr-[10px]">
              <p>Start Date</p>
              <input
                type="date"
                value={taskInput.startDate}
                onChange={(e) =>
                  setTaskInput({ ...taskInput, startDate: e.target.value })
                }
                className="outline-none border-2 border-black rounded-md text-[14px] p-[5px] w-full dark:bg-dark-light"
                placeholder="DD-MM-YYYY"
                required
              />
            </label>
            <label className="w-[48%] ">
              <p>End Date</p>
              <input
                type="date"
                value={taskInput.endDate}
                onChange={(e) =>
                  setTaskInput({ ...taskInput, endDate: e.target.value })
                }
                className="outline-none border-2 border-black rounded-md text-[14px] p-[5px] w-full dark:bg-dark-light"
                placeholder="DD-MM-YYYY"
                required
              />
            </label>
          </div>

          <div className="flex my-[10px]">
            <label className="w-[48%] mr-[10px]">
              <p>Priority</p>
              <select
                value={taskInput.priority}
                onChange={(e) =>
                  setTaskInput({ ...taskInput, priority: e.target.value })
                }
                className="outline-none border-2 border-black rounded-md text-[14px] p-[5px] w-full dark:bg-dark-light"
                required
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </label>
            <label className="w-[48%]">
              <p>Task type</p>
              <input
                value={taskInput.taskType}
                onChange={(e) =>
                  setTaskInput({ ...taskInput, taskType: e.target.value })
                }
                className="outline-none border-2 border-black rounded-md text-[14px] p-[5px] w-full dark:bg-dark-light"
                placeholder="Development"
                required
              />
            </label>
          </div>

          <div className="flex justify-between mt-[10px]">
            <input
              type="submit"
              value={`${task ? "Update" : "Add"} Task`}
              className="bg-[#33a37e] text-white w-[48%] py-[5px] cursor-pointer rounded-md hover:bg-[#23785c]"
            />
            <button
              onClick={() => setShowModal(false)}
              className="w-[48%] border-2 border-[#33a37e] text-[#33a37e] rounded-md hover:text-white hover:bg-[#33a37e]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
