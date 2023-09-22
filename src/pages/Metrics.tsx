import { BarChart } from "../components/BarChart";
import { Header } from "../components/Header";
import { Links } from "../components/Links";

export const Metrics = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="shadow-md px-[40px] py-[30px] pb-0 sm:px-[20px]">
          <Header />
          <Links />
        </div>
        <div className="bg-gray-200 px-[100px] py-[30px] lg:px-[50px] sm:px-[20px] xs:p-[10px] dark:bg-dark-light">
          <BarChart />
        </div>
      </div>
    </>
  );
};
