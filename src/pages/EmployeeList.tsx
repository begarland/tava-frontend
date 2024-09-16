import EmployeeTable from "../components/EmployeeTable/EmployeeTable";
import { data } from "../server/data";

const EmployeeList = () => {
  const employees = data;
  const departments = new Set<string>();

  employees.map((employee) => departments.add(employee.department));

  return (
    <div className="w-[83vw] min-h-screen p-4">
      {Array.from(departments).map((dept) => {
        return (
          <div className="rounded bg-white dark:bg-gray-950 dark:text-white p-4 mb-8">
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
