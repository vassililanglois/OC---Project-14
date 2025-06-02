import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import EmployeeList from "./pages/EmployeeList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </>
  );
}

export default App;
