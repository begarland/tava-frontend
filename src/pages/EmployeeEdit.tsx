import { useLocation } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm/EmployeeForm";
import { data } from "../server/data";
import { Employee } from "../types";

const fetchEmployee = (id: number) => {
  return data.find((datum) => datum.id === id);
};

const EmployeeEdit = () => {
  const { pathname } = useLocation();

  let defaultValues: Employee | undefined = {} as Employee;

  if (pathname && Number(pathname.split("/")[2])) {
    defaultValues = fetchEmployee(Number(pathname.split("/")[2]));
  }

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-3">Edit Employee</h1>
      <EmployeeForm defaultValues={defaultValues} />
    </div>
  );
};

export default EmployeeEdit;
