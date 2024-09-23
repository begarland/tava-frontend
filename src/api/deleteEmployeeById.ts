import { useContext } from "react";
import { AppContext } from "../App";

export const useDeleteEmployee = () => {
  const { setRefreshEmployees, setError } = useContext(AppContext);

  const requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };

  const deleteEmployee = (id: number) => {
    return fetch(
      `${import.meta.env.VITE_BACKEND}/employees/${id}`,
      requestOptions as RequestInit
    )
      .then((response) => response.text())
      .then((result) => {
        setRefreshEmployees(true);
        return result;
      })
      .catch((error) => {
        console.error(error);
        setError("An error has occurred deleting employee. Try again later.");
      });
  };

  return {
    deleteEmployee,
  };
};
