import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedType, setSelectedType] = useState("name");
  const [priority, setPriority] = useState("");

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

  let filteredTask = tasks;

  if (selectedType === "name") {
    filteredTask = filteredTask?.filter((data) =>
      data?.name
        ?.trim()
        ?.toLowerCase()
        ?.includes(searchInput?.trim()?.toLowerCase())
    );
  } else if (selectedType === "assignee") {
    filteredTask = filteredTask?.filter((data) =>
      data?.assignee
        ?.trim()
        ?.toLowerCase()
        ?.includes(searchInput?.trim()?.toLowerCase())
    );
  }

  if (priority === "High") {
    filteredTask = filteredTask?.filter((task) => task?.priority === "High");
  } else if (priority === "Medium") {
    filteredTask = filteredTask?.filter((task) => task?.priority === "Medium");
  } else if (priority === "Low") {
    filteredTask = filteredTask?.filter((task) => task?.priority === "Low");
  }

  useEffect(() => {
    getTask();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        searchInput,
        setSearchInput,
        filteredTask,
        selectedType,
        setSelectedType,
        priority,
        setPriority,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
