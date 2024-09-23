import { NavLink, useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";
import logoDark from "../../assets/logo-dark.png";
import { ROUTES } from "../../routes";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="fixed w-1/6">
        <div className="flex w-100 h-100 p-12">
          <img className="hidden dark:block  " src={logoDark} alt="logo" />
          <img className="block dark:hidden " src={logo} alt="logo" />
        </div>
        <div className="flex flex-col w-100 ps-3 pe-3">
          <NavLink
            className={`p-4 ps-8 rounded ${
              pathname === ROUTES.Payroll
                ? "bg-red-700 text-white font-bold"
                : ""
            } `}
            to={ROUTES.Payroll}
          >
            Payroll
          </NavLink>
          <NavLink
            className={`p-4 ps-8 rounded ${
              pathname.includes(ROUTES.Employees)
                ? "bg-red-700 text-white font-bold"
                : ""
            } `}
            to={ROUTES.Employees}
          >
            Employees
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
