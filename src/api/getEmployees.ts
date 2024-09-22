import React from "react";
import { Employee } from "../types";

export const useGetEmployees = () => {
  const [refreshEmployees, setRefreshEmployees] =
    React.useState<boolean>(false);
  const [employees, setEmployees] = React.useState<Employee[]>([]);
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  console.log("data is", employees);

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
    console.log("component did mount useGetEmployees");
    getEmployees().then((data) => {
      setEmployees(JSON.parse(data as string));
    });
    // componentDidMount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    console.log("component did update useGetEmployees", refreshEmployees);
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
