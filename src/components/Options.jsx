export const Options = () => {
  return (
    <>
      <div className="flex justify-between py-[20px]">
        <div className="flex">
          <p className="text-[14px] bg-white items-center mr-[20px] border-4 p-[10px]">
            <i className="fa-solid fa-plus"></i> Add Task
          </p>
          <p className="text-[14px] bg-white items-center border-4 p-[10px] relative">
            <i className="fa-solid fa-filter text-[12px]"></i> Add Filter{" "}
            <i className="fa-solid fa-sort-down relative bottom-1"></i>
          </p>
        </div>

        <div className="flex text-[14px] border-2 border-gray-300 rounded-sm font-semibold">
          <p className="p-[10px]">Ungrouped</p>
          <p className="p-[10px] bg-white">Users</p>
        </div>

        <div className="flex">
          <p className="text-[14px] bg-white items-center border-4 p-[10px] relative mr-[20px]">
            <i className="fa-solid fa-gear"></i> More{" "}
            <i className="fa-solid fa-sort-down relative bottom-1"></i>
          </p>
          <p className="bg-white p-[10px] border-r-2">
            <i className="fa-solid fa-pause text-[#10b981]"></i>
          </p>
          <p className="bg-white p-[10px]">
            Board <i className="fa-solid fa-sort-down relative bottom-1"></i>
          </p>
        </div>
      </div>
    </>
  );
};
