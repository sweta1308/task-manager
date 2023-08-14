import { DragDropContext } from "react-beautiful-dnd";
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
        <div className="bg-gray-200 px-[40px] pb-[50px] sm:px-[10px] dark:bg-dark-light">
          <Options />
          {isLoading ? (
            <img
              className="w-[70px] m-auto mt-[50px]"
              src="https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/abfa05c49acf005b8b1e0ef8eb25a67a7057eb20/svg-css/eclipse.svg"
              alt="spinner"
            />
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
