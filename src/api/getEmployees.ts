import React, { useContext } from "react";
import { Employee } from "../types";
import { AppContext } from "../App";

export const useGetEmployees = () => {
  const { refreshEmployees, setRefreshEmployees, setError } =
    useContext(AppContext);
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
      .catch((error) => {
        setRefreshEmployees(false);
        console.error(error);
        setError("An error has occurred fetching employees. Try again later.");
      });
  };

  React.useEffect(() => {
    getEmployees().then((data) => {
      setEmployees(JSON.parse(data as string));
    });
    // componentDidMount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (refreshEmployees) {
      getEmployees().then((data) => {
        setEmployees(JSON.parse(data as string));
        setRefreshEmployees(false);
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshEmployees]);

  return {
    employees,
    refreshEmployees,
    setRefreshEmployees,
  };
};
