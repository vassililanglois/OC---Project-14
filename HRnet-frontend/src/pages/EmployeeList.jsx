import { Link } from "react-router-dom";
import EmployeeTable from "../components/EmployeeTable";

function Employees() {
  return (
    <>
      <div className="employee-list">
        <EmployeeTable />
        <Link className="nav-button" to="/">
          Home
        </Link>
      </div>
    </>
  );
}

export default Employees;
