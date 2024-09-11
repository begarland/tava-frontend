import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";
import { ROUTES } from "../../routes";

const Sidebar = () => {
  return (
    <>
      <nav>
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <NavLink
            className={"underline text-blue-800 mt-8"}
            to={ROUTES.Payroll}
          >
            Payroll
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
