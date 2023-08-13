import { createContext, useContext } from "react";
import { useTask } from "./taskContext";

const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
  const { tasks } = useTask();

  const statusReady = tasks?.filter((task) => task.status === "Ready");
  const statusProgress = tasks?.filter((task) => task.status === "In Progress");
  const statusTesting = tasks?.filter((task) => task.status === "Testing");
  const statusDone = tasks?.filter((task) => task.status === "Done");

  return (
    <StatusContext.Provider
      value={{ statusReady, statusProgress, statusTesting, statusDone }}
    >
      {children}
    </StatusContext.Provider>
  );
};

export const useStatus = () => useContext(StatusContext);
