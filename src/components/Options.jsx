import { useTask } from "../context/taskContext";

export const Options = () => {
  const {
    searchInput,
    setSearchInput,
    selectedType,
    setSelectedType,
    priority,
    setPriority,
  } = useTask();
  return (
    <>
      <div className="flex justify-between py-[20px] md:flex-col md:items-start md:gap-3 sm:pl-[30px]">
        <div className="flex items-center xs:text-[12px] xs:flex-col">
          <input
            placeholder={`Search by ${selectedType}`}
            className="p-[10px] mr-[10px] outline-none dark:bg-dark-mode"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <div className="xs:mt-[10px]">
            <label for="name">
              <input
                id="name"
                type="radio"
                name="type"
                value="name"
                checked={selectedType === "name"}
                onChange={(e) => setSelectedType(e.target.value)}
              />{" "}
              Name
            </label>
            <label for="assignee" className="m-[10px]">
              <input
                id="assignee"
                type="radio"
                name="type"
                value="assignee"
                checked={selectedType === "assignee"}
                onChange={(e) => setSelectedType(e.target.value)}
              />{" "}
              Assignee
            </label>
          </div>
        </div>

        <div className="flex text-[14px] border-2 border-gray-300 rounded-sm font-semibold md:w-fit">
          <p className="p-[10px]">Ungrouped</p>
          <p className="p-[10px] bg-white dark:bg-dark-mode">Users</p>
        </div>

        <div className="flex md:flex-col md:w-fit">
          <select
            className="px-[10px] md:py-[10px] cursor-pointer dark:bg-dark-mode"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="">Select for Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>
    </>
  );
};
