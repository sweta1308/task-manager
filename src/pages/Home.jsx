import { DragDropContext } from "react-beautiful-dnd";
import { Done } from "../components/Done";
import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { Options } from "../components/Options";
import { Progress } from "../components/Progress";
import { Ready } from "../components/Ready";
import { Testing } from "../components/Testing";
import { useStatus } from "../context/statusContext";
import { BarChart } from "../components/BarChart";

export const Home = () => {
  const { onDragEnd } = useStatus();
  return (
    <>
      <div className="shadow-md px-[40px] py-[30px] pb-0 sm:px-[20px]">
        <Header />
        <Links />
      </div>
      <div className="bg-gray-200 px-[40px] pb-[50px]">
        <Options />
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex w-full justify-between flex-wrap md:justify-center">
            <Ready />
            <Progress />
            <Testing />
            <Done />
          </div>
        </DragDropContext>

        <BarChart />
      </div>
    </>
  );
};
