import React from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import { Analytics } from "@vercel/analytics/react";

export const AppContext = React.createContext<{
  refreshEmployees: boolean;
  setRefreshEmployees: (val: boolean) => void;
  error: string | null;
  setError: (val: string) => void;
}>({
  refreshEmployees: true,
  setRefreshEmployees: () => null,
  error: null,
  setError: () => null,
});

console.log(`${import.meta.env.VITE_BACKEND}`);

export default function App() {
  const [refreshEmployees, setRefreshEmployees] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  const setErrorWithTimeout = (message: string) => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 5000);
  };

  return (
    <>
      <Analytics />
      <BrowserRouter>
        <AppContext.Provider
          value={{
            refreshEmployees,
            setRefreshEmployees,
            error,
            setError: setErrorWithTimeout,
          }}
        >
          <div className="flex min-h-screen">
            <div className="h-100 bg-white dark:bg-gray-950 w-1/6 hidden sm:block dark:text-white">
              <Sidebar />
            </div>
            <div className="flex w-screen sm:w-5/6 bg-gray-100 dark:bg-gray-900 dark:text-white overflow-scroll">
              <MainContent />
            </div>
            {error ? (
              <div className="fixed right-3 top-3 w-11/12 sm:w-96 h-32 bg-white dark:bg-gray-800 dark:text-white rounded p-3 border-2 border-white">
                <span
                  className="absolute right-0 top-0"
                  onClick={() => setError(null)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="sr-only">Close</span>
                </span>
                <div className="mt-2 font-bold">{error}</div>
              </div>
            ) : null}
          </div>
        </AppContext.Provider>
      </BrowserRouter>
    </>
  );
}
