import { useContext } from "react";
import { Employee } from "../types";
import { AppContext } from "../App";

export const useUpdateEmployee = () => {
  const requestOptions = {
    method: "PATCH",
    redirect: "follow",
  };
  const { setError } = useContext(AppContext);

  const updateEmployee = (id: number, valuesToUpdate: Employee) => {
    return fetch(`${import.meta.env.VITE_BACKEND}/employees/${id}`, {
      ...requestOptions,
      body: JSON.stringify(valuesToUpdate),
    } as RequestInit)
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => {
        console.error(error);
        setError("An error has occurred creating employee. Try again later.");
      });
  };

  return {
    updateEmployee,
  };
};
