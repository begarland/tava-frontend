import { useState } from "react";
import { Employee } from "../../types";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { format } from "date-fns";

type OwnProps = {
  employees: Employee[];
};

const formatDataForTable = (employees: Employee[]) => {
  return employees.map((employee) => {
    return {
      ...employee,
    };
  });
};

const StatusBadge = (status: string) => {
  return (
    <div className="flex w-full h-full justify-start items-center">
      <span
        className={`${
          status === "active"
            ? "bg-green-800 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-800 dark:text-white"
            : "bg-yellow-600 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-600 dark:text-white"
        }`}
      >
        {status}
      </span>
    </div>
  );
};

const EmployeeTable: React.FC<OwnProps> = ({ employees }) => {
  const [rowData, setRowData] = useState(formatDataForTable(employees));

  console.log(rowData);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    {
      headerName: "Name",
      valueGetter: (p: { data: Employee }) =>
        `${p.data.firstName} ${p.data.lastName}`,
      //   filter: true,
    },
    {
      headerName: "Start Date",
      valueFormatter: (p: { data: Employee }) => {
        return `${format(new Date(p.data.dateStarted), "MMM do, yyyy")}`;
      },
      //   filter: true,
    },
    { field: "quote", flex: 4 },
    {
      field: "status",
      cellRenderer: (p: { data: Employee }) => StatusBadge(p.data.status),
    },
  ]);

  return (
    <div className="w-full h-96 ag-theme-quartz">
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs as never}
        rowSelection={"multiple"}
      />
    </div>
  );
};

export default EmployeeTable;
