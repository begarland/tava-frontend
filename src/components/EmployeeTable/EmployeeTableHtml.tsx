import { useState } from "react";
import { useDeleteEmployee } from "../../api/deleteEmployeeById";
import Modal from "../Modal/Modal";
import { Employee } from "../../types";
import { format } from "date-fns";
import { ROUTES } from "../../routes";
import { useNavigate } from "react-router-dom";

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  return (
    <div className="flex w-full h-full justify-start items-center">
      <span
        className={`${
          status === "active"
            ? "bg-green-800 text-white text-xs font-medium me-2 px-2.5 py-0.5 capitalize rounded dark:bg-green-800 dark:text-white"
            : "bg-yellow-600 text-white text-xs font-medium me-2 px-2.5 py-0.5 capitalize rounded dark:bg-yellow-600 dark:text-white"
        }`}
      >
        {status}
      </span>
    </div>
  );
};

type OwnProps = {
  employees: Employee[];
  setRefreshEmployees: (val: boolean) => void;
};

const EmployeeTableHtml: React.FC<OwnProps> = ({
  employees,
  setRefreshEmployees,
}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [deleteModalData, setDeleteModalData] = useState<Employee | null>(null);
  const { deleteEmployee } = useDeleteEmployee();
  const navigate = useNavigate();

  return (
    <>
      <div>
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-600">
              <th className="text-gray-600 font-bold text-left p-2 w-1/12">
                Name
              </th>
              <th className="text-gray-600 font-bold text-left p-2 w-1/12">
                Start Date
              </th>
              <th className="text-gray-600 font-bold text-left p-2 w-2/12">
                Quote
              </th>
              <th className="text-gray-600 font-bold text-left p-2 w-1/12">
                Status
              </th>
              <th className="text-gray-600 font-bold text-center p-2 w-1/12">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr
                className="border border-gray-300 border-b-1 border-t-0 border-s-0 border-e-0 cursor-pointer"
                key={employee.id}
              >
                <td
                  className="p-2"
                  onClick={() => {
                    navigate(`${ROUTES.Employees}/${employee.id}`);
                  }}
                >
                  <span className="text-blue-800">{`${employee.firstName} ${employee.lastName}`}</span>
                </td>
                <td
                  className="p-2"
                  onClick={() => {
                    navigate(`${ROUTES.Employees}/${employee.id}`);
                  }}
                >
                  {formatDateStarted(employee)}
                </td>
                <td
                  className="p-2"
                  onClick={() => {
                    navigate(`${ROUTES.Employees}/${employee.id}`);
                  }}
                >
                  {employee.quote}
                </td>
                <td
                  className="p-2"
                  onClick={() => {
                    navigate(`${ROUTES.Employees}/${employee.id}`);
                  }}
                >
                  <StatusBadge status={employee.status} />
                </td>
                <td className="p-2">
                  <div
                    style={{ zIndex: 1000 }}
                    className="text-red-700 flex w-full h-full justify-center items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenDeleteModal(!openDeleteModal);
                      setDeleteModalData(employee);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openDeleteModal ? (
        <Modal
          title={"Delete Employee"}
          message={`Are you sure you want to delete ${deleteModalData?.firstName} ${deleteModalData?.lastName}?`}
          cancelCallback={() => {
            setDeleteModalData(null);
            setOpenDeleteModal(false);
          }}
          successCallback={() => {
            if (deleteModalData?.id) {
              deleteEmployee(deleteModalData?.id);
            }
            setOpenDeleteModal(false);
            setRefreshEmployees(true);
          }}
          successText="Delete"
        />
      ) : null}
    </>
  );
};

export default EmployeeTableHtml;

export const formatDateStarted = (employee: Employee) => {
  return `${format(new Date(employee?.dateStarted), "MMM do, yyyy")}`;
};
