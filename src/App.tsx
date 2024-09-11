import { BrowserRouter } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <div className="flex h-100 bg-white w-1/6">
          <Sidebar />
        </div>
        <div className="flex w-5/6 bg-gray-100">
          <MainContent />
        </div>
      </div>
    </BrowserRouter>
  );
}
