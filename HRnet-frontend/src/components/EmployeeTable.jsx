import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { mockData } from "../data/mockData";

// Colonnes
const columns = [
  {
    name: "First Name",
    selector: (row) => row.firstName,
    sortable: true,
    id: "firstName",
  },
  { name: "Last Name", selector: (row) => row.lastName, sortable: true },
  { name: "Start Date", selector: (row) => row.startDate, sortable: true },
  { name: "Department", selector: (row) => row.department, sortable: true },
  { name: "Date of Birth", selector: (row) => row.dateOfBirth, sortable: true },
  { name: "Street", selector: (row) => row.street },
  { name: "City", selector: (row) => row.city },
  { name: "State", selector: (row) => row.state },
  { name: "Zip Code", selector: (row) => row.zipCode },
];

export default function EmployeeTable() {
  const [employees, setEmployees] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("employees");
    const parsedLocalData = localData ? JSON.parse(localData) : [];

    const combinedData = [...mockData, ...parsedLocalData];

    setEmployees(combinedData);
  }, []);

  useEffect(() => {
    const filtered = employees.filter((emp) =>
      Object.values(emp)
        .join(" ")
        .toLowerCase()
        .includes(filterText.toLowerCase())
    );
    setFilteredEmployees(filtered);
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
