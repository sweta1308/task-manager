import { createContext, useContext } from "react";
import { useTask } from "./taskContext";

const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
  const { filteredTask, updateTask } = useTask();

  let statusReady = filteredTask?.filter((task) => task.status === "Ready");
  let statusProgress = filteredTask?.filter(
    (task) => task.status === "In Progress"
  );
  let statusTesting = filteredTask?.filter((task) => task.status === "Testing");
  let statusDone = filteredTask?.filter((task) => task.status === "Done");

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    updateTask(draggableId, {
      status: destination.droppableId,
    });

    let add;

    if (source.droppableId === "Ready") {
      add = statusReady[source.index];
      statusReady.splice(source.index, 1);
    } else if (source.droppableId === "In Progress") {
      add = statusProgress[source.index];
      statusProgress.splice(source.index, 1);
    } else if (source.droppableId === "Testing") {
      add = statusTesting[source.index];
      statusTesting.splice(source.index, 1);
    } else if (source.droppableId === "Done") {
      add = statusDone[source.index];
      statusDone.splice(source.index, 1);
    }

    if (destination.droppableId === "Ready") {
      statusReady.splice(destination.index, 0, add);
    } else if (destination.droppableId === "In Progress") {
      statusProgress.splice(destination.index, 0, add);
    } else if (destination.droppableId === "Testing") {
      statusTesting.splice(destination.index, 0, add);
    } else if (destination.droppableId === "Done") {
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
