import { Done } from "../components/Done";
import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { Options } from "../components/Options";
import { Progress } from "../components/Progress";
import { Ready } from "../components/Ready";
import { Testing } from "../components/Testing";
// import { StatusHeader } from "../components/StatusHeader";

export const Home = () => {
  return (
    <>
      <div className="shadow-md px-[40px] py-[30px] pb-0">
        <Header />
        <Links />
      </div>
      <div className="bg-gray-200 px-[40px] ">
        <Options />
        {/* <table className="w-full border-collapse border-spacing-5 mt-[10px]">
          <StatusHeader />
        </table> */}
        <div className="flex w-full justify-between">
          <Ready />
          <Progress />
          <Testing />
          <Done />
        </div>
      </div>
    </>
  );
};
