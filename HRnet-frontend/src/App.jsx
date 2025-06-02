import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EmployeeList from "./pages/EmployeeList";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
