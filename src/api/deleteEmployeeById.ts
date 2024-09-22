import { useGetEmployees } from "./getEmployees";

export const useDeleteEmployee = () => {
  const { setRefreshEmployees } = useGetEmployees();

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
      .catch((error) => console.error(error));
  };

  return {
    deleteEmployee,
  };
};
