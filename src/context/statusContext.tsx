import { createContext, useContext } from "react";
import { DropResult } from "react-beautiful-dnd";
import { useTask } from "./taskContext";
import {
  StatusContextProps,
  StatusProviderProps,
} from "./types/statusContext.types";
import { TaskProps } from "./types/taskContext.types";

const StatusContext = createContext<StatusContextProps>(undefined!);

export const StatusProvider: React.FC<StatusProviderProps> = ({ children }) => {
  const { filteredTask, updateTask } = useTask();

  let statusReady = filteredTask?.filter(
    (task: TaskProps) => task.status === "Ready"
  );
  let statusProgress = filteredTask?.filter(
    (task: TaskProps) => task.status === "In Progress"
  );
  let statusTesting = filteredTask?.filter(
    (task: TaskProps) => task.status === "Testing"
  );
  let statusDone = filteredTask?.filter(
    (task: TaskProps) => task.status === "Done"
  );

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    updateTask?.(draggableId, {
      status: destination?.droppableId,
    });

    let add: TaskProps | undefined;

    if (source.droppableId === "Ready") {
      add = statusReady && statusReady[source.index];
      statusReady && statusReady.splice(source.index, 1);
    } else if (source.droppableId === "In Progress") {
      add = statusProgress && statusProgress[source.index];
      statusProgress && statusProgress.splice(source.index, 1);
    } else if (source.droppableId === "Testing") {
      add = statusTesting && statusTesting[source.index];
      statusTesting && statusTesting.splice(source.index, 1);
    } else if (source.droppableId === "Done") {
      add = statusDone && statusDone[source.index];
      statusDone && statusDone.splice(source.index, 1);
    }

    if (destination.droppableId === "Ready") {
      statusReady && statusReady.splice(destination.index, 0, add!);
    } else if (destination.droppableId === "In Progress") {
      statusProgress && statusProgress.splice(destination.index, 0, add!);
    } else if (destination.droppableId === "Testing") {
      statusTesting && statusTesting.splice(destination.index, 0, add!);
    } else if (destination.droppableId === "Done") {
      statusDone && statusDone.splice(destination.index, 0, add!);
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
