import EmployeeTable from "../components/EmployeeTable/EmployeeTable";
import { useGetEmployees } from "../api/getEmployees";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const { employees } = useGetEmployees();
  const navigate = useNavigate();

  const departments = new Set<string>([]);
  employees?.map((employee) => departments.add(employee.department));

  return (
    <div className="w-[83vw] min-h-screen p-4">
      <div className="flex w-100 justify-end mb-4">
        <button
          className="bg-red-700 text-white font-bold p-3 rounded"
          onClick={() => navigate("/employees/new")}
        >
          New
        </button>
      </div>
      {Array.from(departments).map((dept) => {
        return (
          <div
            className="rounded bg-white dark:bg-gray-950 dark:text-white p-4 mb-8"
            key={dept}
          >
            <h1 className="font-bold text-lg mb-3">{dept}</h1>
            <EmployeeTable
              employees={employees.filter((emp) => emp.department === dept)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default EmployeeList;
