import { Employee } from "../types";

export const useCreateEmployee = () => {
  const requestOptions = {
    method: "PATCH",
    redirect: "follow",
  };

  const createEmployee = (valuesToUpdate: Employee) => {
    return fetch(`${import.meta.env.VITE_BACKEND}/employees`, {
      ...requestOptions,
      body: JSON.stringify(valuesToUpdate),
    } as RequestInit)
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => console.error(error));
  };

  return {
    createEmployee,
  };
};
