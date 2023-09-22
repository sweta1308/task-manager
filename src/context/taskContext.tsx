import axios from "axios";
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import {
  FilterProps,
  TaskContextProps,
  TaskProps,
  TaskProviderProps,
} from "./types/taskContext.types";

const TaskContext = createContext<TaskContextProps>(undefined!);

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filters, setFilters] = useState<FilterProps>({
    searchInput: "",
    priority: "",
    selectedTime: "",
  });
  const { searchInput, priority, selectedTime } = filters;

  const getTask = async () => {
    try {
      setIsLoading(true);
      const { data, status } = await axios.get(
        "https://task-manager-nodejs-restapi.onrender.com/tasks"
      );
      if (status === 200) {
        setTasks(data);
        setIsLoading(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const addTask = async (taskData: TaskProps) => {
    try {
      const response = await axios.post(
        "https://task-manager-nodejs-restapi.onrender.com/tasks",
        taskData
      );
      if (response.status === 200) {
        setTasks([...tasks, taskData]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const updateTask = async (taskId: string, updatedData: TaskProps) => {
    try {
      const { data, status } = await axios.post(
        `https://task-manager-nodejs-restapi.onrender.com/tasks/${taskId}`,
        updatedData
      );
      if (status === 200) {
        console.log(data.task);
        setTasks((tasks) =>
          tasks.map((task) => (task._id === data.task._id ? data.task : task))
        );
      }
    } catch (e) {
      console.error(e);
    }
  };

  const deleteTask = async (taskId: string) => {
    try {
      const response = await axios.delete(
        `https://task-manager-nodejs-restapi.onrender.com/tasks/${taskId}`
      );
      if (response.status === 200) {
        setTasks((tasks) => tasks.filter((task) => task._id !== taskId));
      }
    } catch (e) {
      console.error(e);
    }
  };

  let filteredTask = tasks;

  filteredTask = filteredTask?.filter(
    (data) =>
      data?.name
        ?.trim()
        ?.toLowerCase()
        ?.includes(searchInput!?.trim()?.toLowerCase()) ||
      data?.assignee
        ?.trim()
        ?.toLowerCase()
        ?.includes(searchInput!?.trim()?.toLowerCase())
  );

  if (priority === "High") {
    filteredTask = filteredTask?.filter((task) => task?.priority === "High");
  } else if (priority === "Medium") {
    filteredTask = filteredTask?.filter((task) => task?.priority === "Medium");
  } else if (priority === "Low") {
    filteredTask = filteredTask?.filter((task) => task?.priority === "Low");
  }

  if (selectedTime) {
    filteredTask = filteredTask?.filter(
      (task) =>
        task?.startDate === selectedTime || task?.endDate === selectedTime
    );
  }

  useEffect(() => {
    getTask();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        filteredTask,
        isLoading,
        addTask,
        updateTask,
        deleteTask,
        filters,
        setFilters,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
