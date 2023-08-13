import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const getTask = async () => {
    try {
      const { data, status } = await axios.get(
        "https://gcp-mock.apiwiz.io/v1/tasks",
        {
          headers: { "x-tenant": "b4349714-47c7-4605-a81c-df509fc7e653" },
        }
      );
      if (status === 200) {
        setTasks(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
