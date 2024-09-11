import EmployeeTable from "../components/EmployeeTable/EmployeeTable";
import { data } from "../server/data";

const EmployeeList = () => {
  //   const departments = data.map((employee) => employee.department);

  return (
    <div className="w-[83vw] min-h-screen p-4">
      {/* {data.map()} */}
      <div>
        {/* <h2>{title}</h2> */}
        <EmployeeTable employees={data} />
      </div>
    </div>
  );
};

export default EmployeeList;
