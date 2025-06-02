export const employeeTableColumns = [
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
