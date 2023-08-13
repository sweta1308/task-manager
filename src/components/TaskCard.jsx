export const TaskCard = ({ task }) => {
  const { name, priority, assignee, startDate, type } = task;
  return (
    <>
      <div className="bg-white w-[350px] my-[20px] py-[15px] px-[30px] text-left rounded-md shadow-md">
        <div className="flex justify-between">
          <h2 className="font-bold">{name}</h2>
          <div>
            {priority === "High" ? (
              <i
                className="fa-solid fa-circle-exclamation"
                style={{ color: "#ff0000" }}
              ></i>
            ) : priority === "Medium" ? (
              <i
                className="fa-solid fa-arrow-up"
                style={{ color: "#ffea00" }}
              ></i>
            ) : (
              ""
            )}
          </div>
        </div>

        <p className="text-[14px]">Assigned By: {assignee}</p>
        <p className="text-[14px]"> Type: Complete {type}</p>
        <p className="text-[12px] border-2 w-fit px-[7px] rounded-2xl mt-[10px]">
          <i className="fa-solid fa-list-check text-[12px]"></i> Default Task
          List
        </p>
        <p className="text-[12px] border-2 w-fit px-[7px] rounded-2xl bg-gray-200 mt-[15px]">
          {startDate}
        </p>
      </div>
    </>
  );
};

// assignee
// :
// "Alice"
// effortSpent
// :
// 1280
// endDate
// :
// "2023-06-15"
// id
// :
// 1
// name
// :
// "Task 1"
// priority
// :
// "High"
// startDate
// :
// "2023-05-03"
// status
// :
// "Ready"
// summary
// :
// "Summary for Task 1"
// type
// :
// "Design"
