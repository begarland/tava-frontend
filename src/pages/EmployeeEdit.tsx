import { useLocation } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm/EmployeeForm";
import { Employee } from "../types";
import { useGetEmployee } from "../api/getEmployeeById";
import Spinner from "../components/Spinner/Spinner";

const EmployeeEdit = () => {
  const { pathname } = useLocation();

  const { employee } = useGetEmployee(Number(pathname.split("/")[2]));

  let defaultValues: Employee | undefined = {} as Employee;

  if (employee) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    defaultValues = employee as any;
  }

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-3">Edit Employee</h1>
      {defaultValues && Object.keys(defaultValues).length ? (
        <EmployeeForm defaultValues={defaultValues} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default EmployeeEdit;
