import React from "react";
import { Employee } from "../types";

export const useGetEmployees = () => {
  const [employees, setEmployees] = React.useState<Employee[]>([]);
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const getEmployees = () => {
    return fetch(
      `${import.meta.env.VITE_BACKEND}/employees`,
      requestOptions as RequestInit
    )
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => console.error(error));
  };

  React.useEffect(() => {
    getEmployees().then((data) => {
      setEmployees(JSON.parse(data as string));
    });
    // componentDidMount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    employees,
  };
};
