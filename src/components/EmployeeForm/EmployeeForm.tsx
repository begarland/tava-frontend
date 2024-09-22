import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { Employee } from "../../types";
import { format } from "date-fns";
import { useUpdateEmployee } from "../../api/updateEmployeeById";
import { useCreateEmployee } from "../../api/createEmployee";

type Inputs = {
  firstName: string;
  lastName: string;
  dateStarted: string;
  department: string;
  status: string;
  quote: string;
};

const Required = () => (
  <span className="text-red-700 font-semibold">* Required</span>
);

const inputStyle =
  "border border-1 border-gray-300 active:border-red-700 active:border-2 rounded text-base text-black";
const labelStyle = "text-gray-700";
const DEPTS = ["Engineering", "Management", "Operations", "Food Services"];

const EmployeeForm: React.FC<{ defaultValues?: Employee | undefined }> = ({
  defaultValues,
}) => {
  let formattedDate = format(new Date(), "yyyy-MM-dd");

  if (defaultValues && defaultValues.dateStarted) {
    formattedDate = format(
      new Date(defaultValues?.dateStarted as string),
      "yyyy-MM-dd"
    );
  }

  const formattedValues = {
    ...defaultValues,
    dateStarted: formattedDate,
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: formattedValues });
  const navigate = useNavigate();

  const { createEmployee } = useCreateEmployee();
  const { updateEmployee } = useUpdateEmployee();

  const save = () => {
    if (defaultValues?.id) {
      const vals = getValues();
      updateEmployee(defaultValues?.id, vals as Employee);
    } else {
      const vals = getValues();
      createEmployee(vals as Employee);
    }
    navigate(ROUTES.Employees);
  };

  return (
    <form onSubmit={handleSubmit(save)}>
      <div className="flex flex-col gap-3 p-5 w-[500px] shadow-md bg-white rounded">
        <div className="flex flex-col">
          <label className={labelStyle}>First Name</label>
          <input
            className={inputStyle}
            {...register("firstName", {
              required: true,
            })}
          />
          {errors.firstName && <Required />}
        </div>
        <div className="flex flex-col">
          <label className={labelStyle}>Last Name</label>
          <input className={inputStyle} {...register("lastName")} />
          {errors.lastName && <Required />}
        </div>

        <div className="flex flex-col">
          <label className={labelStyle}>Start Date</label>
          <input
            className={inputStyle}
            type="date"
            {...register("dateStarted")}
          />
          {errors.dateStarted && <Required />}
        </div>

        <div className="flex flex-col">
          <label className={labelStyle}>Department</label>
          <select className={inputStyle} {...register("department")}>
            {DEPTS.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          {errors.department && <Required />}
        </div>

        <div className="flex flex-col">
          <label className={labelStyle}>Status</label>
          <select className={inputStyle} {...register("status")}>
            <>
              <option key="active" value="active">
                active
              </option>
              <option key="inactive" value="inactive">
                inactive
              </option>
            </>
          </select>
          {errors.department && <Required />}
        </div>

        <div className="flex flex-col">
          <label className={labelStyle}>Quote</label>
          <textarea className={inputStyle} {...register("quote")} />
          {errors.quote && <Required />}
        </div>

        <div>
          <button
            className="text-white font-bold bg-red-700 px-5 py-3 rounded"
            // onClick={save}
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default EmployeeForm;
