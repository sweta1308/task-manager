import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useStatus } from "../context/statusContext";
import { TaskCard } from "./TaskCard";

export const Tasks = () => {
  const { columns, setColumns, onDragEnd } = useStatus();
  return (
    <>
      <div>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns)?.map(([columnId, column], index) => (
            <div key={columnId}>
              <h2>{column?.name}</h2>
              <div>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {column?.items?.map((item, index) => (
                        <TaskCard task={item} index={index} />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          ))}
        </DragDropContext>
      </div>
    </>
  );
};
