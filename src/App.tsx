import { BrowserRouter, Route, Routes } from "react-router-dom";
import Payroll from "./Payroll";

import { ROUTES } from "./routes";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <div className="flex h-100 bg-white w-1/6">
          <Sidebar />
        </div>
        <div className="flex w-5/6 bg-gray-100">
          <main>
            <Routes>
              <Route path={ROUTES.Payroll} element={<Payroll />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
