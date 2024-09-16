import { useState } from "react";
import { Employee } from "../../types";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";

type OwnProps = {
  employees: Employee[];
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
  const [rowData] = useState(employees);

  const navigate = useNavigate();
  // Column Definitions: Defines the columns to be displayed.
  const [colDefs] = useState([
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
        onCellClicked={(p) => navigate(`${ROUTES.Employees}/${p?.data?.id}`)}
      />
    </div>
  );
};

export default EmployeeTable;
