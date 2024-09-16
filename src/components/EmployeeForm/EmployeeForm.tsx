import { useForm, SubmitHandler } from "react-hook-form";

type Department = "Management";

type Inputs = {
  firstName: string;
  lastName: string;
  startDate: Date;
  department: Department;
  quote: string;
};

const Required = () => (
  <span className="text-red-700 font-semibold">* Required</span>
);

const inputStyle =
  "border border-1 border-gray-300 active:border-red-700 active:border-2 rounded text-base";
const labelStyle = "text-gray-700";
const DEPTS = ["Engineering", "Management", "Operations", "Food Services"];

const EmployeeForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const save = () => {
    console.log(watch("firstName")); // watch input value by passing the name of it
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3 p-5 w-[500px] shadow-md bg-white rounded">
        <div className="flex flex-col">
          <label className={labelStyle}>First Name</label>
          <input
            className={inputStyle}
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <Required />}
        </div>
        <div className="flex flex-col">
          <label className={labelStyle}>Last Name</label>
          <input
            className={inputStyle}
            {...register("lastName", { required: true })}
          />
          {errors.lastName && <Required />}
        </div>

        <div className="flex flex-col">
          <label className={labelStyle}>Start Date</label>
          <input
            className={inputStyle}
            type="date"
            {...register("startDate", { required: true })}
          />
          {errors.startDate && <Required />}
        </div>

        <div className="flex flex-col">
          <label className={labelStyle}>Department</label>
          <select
            className={inputStyle}
            {...register("department", { required: true })}
          >
            {DEPTS.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          {errors.department && <Required />}
        </div>

        <div className="flex flex-col">
          <label className={labelStyle}>Quote</label>
          <textarea
            className={inputStyle}
            {...register("quote", { required: true })}
          />
          {errors.quote && <Required />}
        </div>

        <div>
          <button
            className="text-white font-bold bg-red-700 px-5 py-3 rounded"
            onClick={save}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default EmployeeForm;
