import { Employee } from "../types";

export const useUpdateEmployee = () => {
  const requestOptions = {
    method: "PATCH",
    redirect: "follow",
  };

  const updateEmployee = (id: number, valuesToUpdate: Employee) => {
    return fetch(`${import.meta.env.VITE_BACKEND}/employees/${id}`, {
      ...requestOptions,
      body: JSON.stringify(valuesToUpdate),
    } as RequestInit)
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => console.error(error));
  };

  return {
    updateEmployee,
  };
};
