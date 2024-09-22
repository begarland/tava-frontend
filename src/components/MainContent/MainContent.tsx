import { Route, Routes, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import Payroll from "../../pages/Payroll";
import EmployeeList from "../../pages/EmployeeList";
import EmployeeEdit from "../../pages/EmployeeEdit";
import EmployeeNew from "../../pages/EmployeeNew";
import React from "react";

const MainContent = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path={ROUTES.Payroll} element={<Payroll />} />
          <Route path={ROUTES.Employees} element={<EmployeeList />} />
          <Route path={`${ROUTES.Employees}/:id`} element={<EmployeeEdit />} />
          <Route path={`${ROUTES.Employees}/new`} element={<EmployeeNew />} />
          <Route path={`/`} element={<NavToEmployees />} />
        </Routes>
      </main>
    </>
  );
};

export default MainContent;

const NavToEmployees = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate(`${ROUTES.Employees}`);
  });

  return <></>;
};
