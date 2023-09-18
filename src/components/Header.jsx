import { Search } from "@mui/icons-material";
import { useTheme } from "../context/themeContext";
import { useTask } from "../context/taskContext";

export const Header = () => {
  const { isDark, setIsDark } = useTheme();
  const { filters, setFilters } = useTask();
  const { searchInput } = filters;
  return (
    <>
      <div className="flex items-center justify-between px-[30px] sm:px-[10px]">
        <h1 className="font-semibold text-[28px] text-[#33a37e]">
          TaskManager
        </h1>

        <div className="shadow-xl p-[5px] rounded-md dark:bg-dark-light dark:shadow-white dark:shadow-sm md:hidden">
          <Search />
          <input
            value={searchInput}
            onChange={(e) =>
              setFilters({ ...filters, searchInput: e.target.value })
            }
            placeholder="Search a task by task name or assignee..."
            className="px-[10px] py-[5px] w-[400px] rounded-md text-[14px] outline-none dark:bg-dark-light md:w-[300px]"
          />
        </div>
        <div className="flex mt-[-15px] sm:mt-[5px]">
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
      <div className="hidden mt-[20px] shadow-xl p-[5px] rounded-md dark:bg-dark-light dark:shadow-white dark:shadow-sm md:block">
        <Search />
        <input
          value={searchInput}
          onChange={(e) =>
            setFilters({ ...filters, searchInput: e.target.value })
          }
          placeholder="Search a task by task name or assignee..."
          className="px-[10px] py-[5px] w-[400px] rounded-md text-[14px] outline-none dark:bg-dark-light md:w-[300px] xs:w-[250px]"
        />
      </div>
    </>
  );
};
