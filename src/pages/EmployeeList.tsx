// import EmployeeTable from "../components/EmployeeTable/EmployeeTable";
import { useGetEmployees } from "../api/getEmployees";
import { useNavigate } from "react-router-dom";
import React from "react";
import Select from "react-select";
import EmployeeTableHtml from "../components/EmployeeTable/EmployeeTableHtml";

const EmployeeList = () => {
  const { employees, setRefreshEmployees } = useGetEmployees();
  const navigate = useNavigate();

  const departments = new Set<string>([]);
  employees?.map((employee) => departments.add(employee.department));

  const [filterBy, setFilterBy] = React.useState<string>("");

  const [filterDepartment, setFilterDepartment] = React.useState<
    { value: string; label: string }[]
  >([]);
  const [filterStatus, setFilterStatus] = React.useState<
    {
      value: string;
      label: string;
    }[]
  >([]);

  let filteredEmployees = employees.filter((employee) =>
    JSON.stringify(employee).toLowerCase().includes(filterBy.toLowerCase())
  );

  if (filterDepartment.length) {
    filteredEmployees = filteredEmployees.filter((emp) =>
      filterDepartment.map((val) => val?.value).includes(emp.department)
    );
  }

  if (filterStatus?.length) {
    filteredEmployees = filteredEmployees.filter((emp) =>
      filterStatus.map((val) => val?.value).includes(emp.status)
    );
  }

  return (
    <div className="w-[83vw] min-h-screen p-4">
      <div className="flex w-100 gap-4 mb-4 items-center">
        <input
          className="text-black w-5/12 rounded p-2 border border-gray-300"
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
        />
        <Select
          className="w-4/12"
          options={
            Array.from(departments).map((dept) => {
              return { label: dept, value: dept };
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
            }) as any
          }
          isMulti={true}
          value={filterDepartment}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e) => setFilterDepartment(e as any)}
        />
        <Select
          className="w-2/12"
          isMulti={true}
          options={
            [
              { label: "active", value: "active" },
              { label: "inactive", value: "inactive" },
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ] as any
          }
          value={filterStatus}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e) => setFilterStatus(e as any)}
        />

        <div className="w-1/12 flex justify-end">
          <button
            className="bg-red-700 text-white font-bold p-3 rounded"
            onClick={() => navigate("/employees/new")}
          >
            New
          </button>
        </div>
      </div>
      {Array.from(departments).map((dept) => {
        if (filteredEmployees.filter((emp) => emp.department === dept).length) {
          return (
            <div
              className="rounded bg-white dark:bg-gray-950 dark:text-white p-4 mb-8"
              key={dept}
            >
              <h1 className="font-bold text-lg mb-3">{dept}</h1>
              {
                <EmployeeTableHtml
                  employees={filteredEmployees.filter(
                    (emp) => emp.department === dept
                  )}
                  setRefreshEmployees={setRefreshEmployees}
                />
              }
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default EmployeeList;
