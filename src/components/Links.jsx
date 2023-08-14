export const Links = () => {
  return (
    <>
      <div className="flex w-[700px] justify-between mt-[40px] text-[18px] text-gray-500 md:w-[600px] md:text-[16px] sm:hidden">
        <p>Overview</p>
        <p className="text-black border-b-4 border-[#10b981] font-semibold">
          Tasks
        </p>
        <p>Milestones</p>
        <p>Timesheets</p>
        <p>Files</p>
        <p>Discussions</p>
        <p>Activity Feed</p>
      </div>
      <div className="text-black border-b-4 border-[#10b981] font-semibold text-[20px] hidden sm:block mt-[30px]">
        Tasks
      </div>
    </>
  );
};
