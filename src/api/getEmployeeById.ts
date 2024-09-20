import React from "react";
import { Employee } from "../types";

export const useGetEmployee = (id: number) => {
  const [employee, setEmployee] = React.useState<Employee | undefined>();
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const getEmployee = (id: number) => {
    return fetch(
      `${import.meta.env.VITE_BACKEND}/employees/${id}`,
      requestOptions as RequestInit
    )
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => console.error(error));
  };

  React.useEffect(() => {
    getEmployee(id).then((data) => {
      setEmployee(JSON.parse(data as string));
    });
    // componentDidMount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    employee,
  };
};
