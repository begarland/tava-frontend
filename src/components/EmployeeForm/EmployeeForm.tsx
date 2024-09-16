import { useForm, SubmitHandler } from "react-hook-form";

type Department = "Management";

type Inputs = {
  firstName: string;
  lastName: string;
  startDate: Date;
  department: Department;
  quote: string;
};

const EmployeeForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("firstName")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3 p-5 w-[500px] shadow-md">
        <div className=" flex flex-col">
          <label>First Name</label>
          <input {...register("firstName", { required: true })} />
          {errors.firstName && <span>This field is required</span>}
        </div>
        <div className=" flex flex-col">
          <label>Last Name</label>
          <input {...register("lastName", { required: true })} />
          {errors.lastName && <span>This field is required</span>}
        </div>

        <div className=" flex flex-col">
          <label>Start Date</label>
          <input type="date" {...register("startDate", { required: true })} />
          {errors.startDate && <span>This field is required</span>}
        </div>

        <div className=" flex flex-col">
          <label>Department</label>
          <select {...register("department", { required: true })}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          {errors.department && <span>This field is required</span>}
        </div>

        <div className=" flex flex-col">
          <label>Quote</label>
          <textarea {...register("quote", { required: true })} />
          {errors.quote && <span>This field is required</span>}
        </div>
      </div>
    </form>
  );
};

export default EmployeeForm;
