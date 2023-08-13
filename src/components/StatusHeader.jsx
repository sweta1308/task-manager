import { useStatus } from "../context/statusContext";

export const StatusHeader = () => {
  const { statusReady, statusProgress, statusTesting, statusDone } =
    useStatus();
  return (
    <>
      <tr>
        <th className="border-b-4 border-gray-400 text-left mx-[30px] pb-[15px]">
          READY{" "}
          <span className="text-gray-500 text-[12px] ">
            ({statusReady?.length})
          </span>
        </th>
        <th className="border-b-4 border-yellow-400 text-left mx-[30px] pb-[15px]">
          IN PROGRESS{" "}
          <span className="text-gray-500 text-[12px]">
            ({statusProgress?.length})
          </span>
        </th>
        <th className="border-b-4 border-orange-400 text-left mx-[30px] pb-[15px]">
          TESTING{" "}
          <span className="text-gray-500 text-[12px]">
            ({statusTesting?.length})
          </span>
        </th>
        <th className="border-b-4 border-green-400 text-left mx-[30px] pb-[15px]">
          DONE{" "}
          <span className="text-gray-500 text-[12px]">
            ({statusDone?.length})
          </span>
        </th>
      </tr>
    </>
  );
};
