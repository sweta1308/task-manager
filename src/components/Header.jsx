import { useTheme } from "../context/themeContext";

export const Header = () => {
  const { isDark, setIsDark } = useTheme();
  return (
    <>
      <div className="flex items-center sm:flex-col sm:items-start">
        <div className="flex items-center">
          <i className="fa-solid fa-arrow-left-long border-2 p-[8px] cursor-pointer mr-[25px] text-[18px]"></i>
          <div>
            <h1 className="font-semibold text-[18px]">
              Basic Structure Kanban Project
            </h1>
            <p className="text-[12px] text-gray-400 font-semibold">Paymo SRL</p>
          </div>
          <p className="text-[12px] bg-[#10b981] text-white px-[5px] rounded-lg self-start mt-[6px] mx-[15px] sm:mx-[5px]">
            #BSKP
          </p>
        </div>

        <div className="flex mt-[-15px] sm:mt-[5px]">
          <p className="text-gray-400 self-start mt-[4px] text-[12px] border-2 py-[2px] px-[4px] rounded-md">
            <i className="fa-regular fa-image"></i> Completed
          </p>
          <i className="fa-solid fa-gear text-gray-400 self-start mt-[8px] mx-[15px]"></i>
          <i className="fa-regular fa-bell text-[#10b981] self-start mt-[8px] mr-[15px]"></i>
          <i className="fa-solid fa-ellipsis text-gray-400 self-start mt-[8px] mr-[15px]"></i>
          {isDark ? (
            <i
              onClick={() => setIsDark((prev) => !prev)}
              className="fa-solid fa-sun fa-lg cursor-pointer mt-[15px]"
            ></i>
          ) : (
            <i
              onClick={() => setIsDark((prev) => !prev)}
              className="fa-solid fa-moon fa-lg cursor-pointer mt-[15px]"
            ></i>
          )}
        </div>
      </div>
    </>
  );
};
