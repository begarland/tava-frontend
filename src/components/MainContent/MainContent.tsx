import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../routes";
import Payroll from "../../pages/Payroll";
import EmployeeList from "../../pages/EmployeeList";

const MainContent = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path={ROUTES.Payroll} element={<Payroll />} />
          <Route path={ROUTES.Employees} element={<EmployeeList />} />
        </Routes>
      </main>
    </>
  );
};

export default MainContent;
