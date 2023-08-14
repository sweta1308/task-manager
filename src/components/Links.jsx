import { NavLink } from "react-router-dom";

export const Links = () => {
  const getStyles = ({ isActive }) => ({
    borderBottom: isActive ? "5px solid #10b981" : "",
    fontWeight: isActive ? "600" : "",
  });
  return (
    <>
      <div className="flex w-[200px] justify-between mt-[40px] text-[18px] px-[20px]">
        <NavLink to="/" style={getStyles}>
          Tasks
        </NavLink>
        <NavLink to="/metrics" style={getStyles}>
          Metrics
        </NavLink>
      </div>
    </>
  );
};
