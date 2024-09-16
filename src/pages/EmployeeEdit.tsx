import { useLocation } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm/EmployeeForm";

const EmployeeEdit = () => {
  return (
    <div className="p-8">
      <h1 className="">Edit Employee</h1>
      <EmployeeForm />
    </div>
  );
};

export default EmployeeEdit;
