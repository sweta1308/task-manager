import { Add } from "@mui/icons-material";
import { useTask } from "../context/taskContext";
import { useState } from "react";
import { Modal } from "@mui/material";
import { TaskModal } from "./TaskModal";

export const Options = () => {
  const { filters, setFilters } = useTask();
  const { selectedTime, priority } = filters;
  const [showTaskModal, setShowTaskModal] = useState(false);
  return (
    <>
      <div className="flex justify-end py-[20px] xs:flex-col">
        <button
          onClick={() => setShowTaskModal(true)}
          className="bg-[#33a37e] text-white mr-[15px] px-[18px] rounded-md cursor-pointer hover:bg-[#23775b] xs:my-[15px] xs:py-[10px] xs:mr-[0]"
        >
          <Add /> Add Task
        </button>
        <input
          type="date"
          value={selectedTime}
          onChange={(e) =>
            setFilters({ ...filters, selectedTime: e.target.value })
          }
          className="py-[5px] px-[10px] mr-[10px] outline-none dark:bg-dark-mode xs:my-[10px] xs:mr-0 xs:py-[8px]"
        />

        <div className="flex md:flex-col md:w-fit text-[14px]">
          <select
            className="px-[10px] md:py-[10px] cursor-pointer dark:bg-dark-mode xs:w-full"
            value={priority}
            onChange={(e) =>
              setFilters({ ...filters, priority: e.target.value })
            }
          >
            <option value="">Select for Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>
      <Modal open={showTaskModal} onClose={() => setShowTaskModal(false)}>
        <TaskModal setShowModal={setShowTaskModal} />
      </Modal>
    </>
  );
};
