import { DragDropContext } from "react-beautiful-dnd";
import { ClipLoader } from "react-spinners";
import { Done } from "../components/Done";
import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { Options } from "../components/Options";
import { Progress } from "../components/Progress";
import { Ready } from "../components/Ready";
import { Testing } from "../components/Testing";
import { useStatus } from "../context/statusContext";
import { useTask } from "../context/taskContext";

export const Home = () => {
  const { isLoading } = useTask();
  const { onDragEnd } = useStatus();

  return (
    <>
      <div className="min-h-screen">
        <div className="shadow-md px-[40px] py-[30px] pb-0 sm:px-[20px]">
          <Header />
          <Links />
        </div>
        <div className="bg-gray-200 px-[40px] pb-[50px] text-center sm:px-[10px] dark:bg-dark-light">
          <Options />
          {isLoading ? (
            <ClipLoader size={80} color="#10b981" />
          ) : (
            <DragDropContext onDragEnd={onDragEnd}>
              <div className="flex w-full justify-between flex-wrap md:justify-center">
                <Ready />
                <Progress />
                <Testing />
                <Done />
              </div>
            </DragDropContext>
          )}
        </div>
      </div>
    </>
  );
};
