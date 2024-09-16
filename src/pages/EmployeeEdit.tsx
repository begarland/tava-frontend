import { useLocation } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm/EmployeeForm";

const EmployeeEdit = () => {
  const { pathname } = useLocation();

  // get data for employee X from server
  // display in form

  console.log(pathname);

  return (
    <>
      <EmployeeForm />
    </>
  );
};

export default EmployeeEdit;
