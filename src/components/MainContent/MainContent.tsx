import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../routes";
import Payroll from "../../Payroll";

const MainContent = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path={ROUTES.Payroll} element={<Payroll />} />
        </Routes>
      </main>
    </>
  );
};

export default MainContent;
