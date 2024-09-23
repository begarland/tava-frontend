import React, { useContext } from "react";
import { Employee } from "../types";
import { AppContext } from "../App";

export const useGetEmployee = (id: number) => {
  const { setError } = useContext(AppContext);

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
      .catch((error) => {
        console.error(error);
        setError("An error has occurred creating employee. Try again later.");
      });
  };

  React.useEffect(() => {
    getEmployee(id).then((data) => {
      setEmployee(JSON.parse(data as string)[0]);
    });
    // componentDidMount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    employee,
  };
};
