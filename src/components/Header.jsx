export const Header = () => {
  return (
    <>
      <div className="flex items-center">
        <i className="fa-solid fa-arrow-left-long border-2 p-[8px] cursor-pointer mr-[25px] text-[18px]"></i>
        <div>
          <h1 className="font-semibold text-[18px]">
            Basic Structure Kanban Project
          </h1>
          <p className="text-[12px] text-gray-400 font-semibold">Paymo SRL</p>
        </div>
        <p className="text-[12px] bg-[#10b981] text-white px-[5px] rounded-lg self-start mt-[6px] mx-[15px]">
          #BSKP
        </p>
        <p className="text-gray-400 self-start mt-[4px] text-[12px] border-2 py-[2px] px-[4px] rounded-md">
          <i className="fa-regular fa-image"></i> Completed
        </p>
        <i className="fa-solid fa-gear text-gray-400 self-start mt-[8px] mx-[15px]"></i>
        <i className="fa-regular fa-bell text-[#10b981] self-start mt-[8px] mr-[15px]"></i>
        <i className="fa-solid fa-ellipsis text-gray-400 self-start mt-[8px]"></i>
      </div>
    </>
  );
};
