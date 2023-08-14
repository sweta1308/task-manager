import { createContext, useContext } from "react";
import { useTask } from "./taskContext";

const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
  const { filteredTask } = useTask();

  let statusReady = filteredTask?.filter((task) => task.status === "Ready");
  let statusProgress = filteredTask?.filter(
    (task) => task.status === "In Progress"
  );
  let statusTesting = filteredTask?.filter((task) => task.status === "Testing");
  let statusDone = filteredTask?.filter((task) => task.status === "Done");

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add;

    if (source.droppableId === "ReadyTasks") {
      add = statusReady[source.index];
      statusReady.splice(source.index, 1);
    } else if (source.droppableId === "ProgressTasks") {
      add = statusProgress[source.index];
      statusProgress.splice(source.index, 1);
    } else if (source.droppableId === "TestingTasks") {
      add = statusTesting[source.index];
      statusTesting.splice(source.index, 1);
    } else if (source.droppableId === "DoneTasks") {
      add = statusDone[source.index];
      statusDone.splice(source.index, 1);
    }

    if (destination.droppableId === "ReadyTasks") {
      statusReady.splice(destination.index, 0, add);
    } else if (destination.droppableId === "ProgressTasks") {
      statusProgress.splice(destination.index, 0, add);
    } else if (destination.droppableId === "TestingTasks") {
      statusTesting.splice(destination.index, 0, add);
    } else if (destination.droppableId === "DoneTasks") {
      statusDone.splice(destination.index, 0, add);
    }
  };

  return (
    <StatusContext.Provider
      value={{
        statusReady,
        statusProgress,
        statusTesting,
        statusDone,
        onDragEnd,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
};

export const useStatus = () => useContext(StatusContext);
