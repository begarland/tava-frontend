import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../routes";
import Payroll from "../../pages/Payroll";
import EmployeeList from "../../pages/EmployeeList";
import EmployeeEdit from "../../pages/EmployeeEdit";
import EmployeeNew from "../../pages/EmployeeNew";

const MainContent = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path={ROUTES.Payroll} element={<Payroll />} />
          <Route path={ROUTES.Employees} element={<EmployeeList />} />
          <Route path={`${ROUTES.Employees}/:id`} element={<EmployeeEdit />} />
          <Route path={`${ROUTES.Employees}/new`} element={<EmployeeNew />} />
        </Routes>
      </main>
    </>
  );
};

export default MainContent;
