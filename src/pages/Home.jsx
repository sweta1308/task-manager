import { Done } from "../components/Done";
import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { Options } from "../components/Options";
import { Progress } from "../components/Progress";
import { Ready } from "../components/Ready";
import { Testing } from "../components/Testing";

export const Home = () => {
  return (
    <>
      <div className="shadow-md px-[40px] py-[30px] pb-0">
        <Header />
        <Links />
      </div>
      <div className="bg-gray-200 px-[40px] pb-[50px]">
        <Options />
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
