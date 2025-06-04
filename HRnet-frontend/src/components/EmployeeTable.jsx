import { useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { employeeTableColumns as columns } from "../config/employeeTableColumns";

export default function EmployeeTable() {
  // Selector
  const employees = useSelector((state) => state.employee.list);

  // useState for the searchbar
  const [filterText, setFilterText] = useState("");

  // useMemo to filter employees
  const filteredEmployees = useMemo(() => {
    // Return all the employees when there is no keyword in the searchbar
    if (!filterText) return employees;

    const lowerFilter = filterText.toLowerCase();

    return employees.filter((emp) =>
      Object.values(emp).join(" ").toLowerCase().includes(lowerFilter)
    );
  }, [filterText, employees]);

  return (
    <div className="container">
      <div className="data-table-header">
        <h1>Current Employees</h1>
        <input
          className="data-table-searchbar"
          type="text"
          placeholder="Search an employee..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      <div className="data-table">
        <DataTable
          columns={columns}
          data={filteredEmployees}
          pagination
          highlightOnHover
          dense
          defaultSortFieldId="firstName"
          defaultSortAsc={true}
          noDataComponent={
            <div className="no-match">
              <strong>No employees match your search.</strong>
              <div>Please try adjusting your filters or keywords.</div>
            </div>
          }
        />
      </div>
    </div>
  );
}
