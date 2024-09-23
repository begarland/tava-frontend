import { Employee } from "../types";
import { AppContext } from "../App";
import { useContext } from "react";

export const useCreateEmployee = () => {
  const { setError } = useContext(AppContext);

  const requestOptions = {
    method: "POST",
    redirect: "follow",
  };

  const createEmployee = (valuesToUpdate: Employee) => {
    return fetch(`${import.meta.env.VITE_BACKEND}/employees`, {
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
    createEmployee,
  };
};
