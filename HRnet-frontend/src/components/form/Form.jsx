import { useState } from "react";
import FormInput from "./FormInput";
import Modal from "./Modal";
import { states } from "../../data/states";
import confetti from "canvas-confetti";

export default function Form() {
  const initialFormState = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  };

  const [form, setForm] = useState(initialFormState);

  //const inputsReset = () => setForm(initialFormState);

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    const employee = {
      firstName: form.firstName,
      lastName: form.lastName,
      dateOfBirth: form.dateOfBirth,
      startDate: form.startDate,
      street: form.street,
      city: form.city,
      state: form.state,
      zipCode: form.zipCode,
      department: form.department,
    };

    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));

    //inputsReset();

    setShowModal(true);

    // Depuis la gauche vers la droite
    confetti({
      particleCount: 100,
      angle: 45,
      spread: 70,
      origin: { x: 0, y: 0.7 },
    });

    // Depuis la droite vers la gauche
    confetti({
      particleCount: 100,
      angle: 135,
      spread: 70,
      origin: { x: 1, y: 0.7 },
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="create-employee">
        <FormInput
          content="First Name"
          htmlFor="first-name"
          type="text"
          id="first-name"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        />

        <FormInput
          content="Last Name"
          htmlFor="last-name"
          type="text"
          id="last-name"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />

        <FormInput
          content="Date of Birth"
          htmlFor="date-of-birth"
          type="date"
          id="date-of-birth"
          value={form.dateOfBirth}
          onChange={(e) => setForm({ ...form, dateOfBirth: e.target.value })}
          required
        />

        <FormInput
          content="Start Date"
          htmlFor="start-date"
          type="date"
          id="start-date"
          value={form.startDate}
          onChange={(e) => setForm({ ...form, startDate: e.target.value })}
        />

        <div className="address">
          <h3>Address</h3>
          <FormInput
            content="Street"
            htmlFor="street"
            type="text"
            id="street"
            value={form.street}
            onChange={(e) => setForm({ ...form, street: e.target.value })}
          />
          <FormInput
            content="City"
            htmlFor="city"
            type="text"
            id="city"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          />

          <label htmlFor="state">State</label>
          <select
            id="state"
            value={form.state}
            onChange={(e) => setForm({ ...form, state: e.target.value })}
          >
            <option value={form.state}>Select State</option>
            {states.map((st) => (
              <option key={st.abbreviation} value={st.abbreviation}>
                {st.name}
              </option>
            ))}
          </select>

          <FormInput
            content="Zip Code"
            htmlFor="zip-code"
            type="number"
            id="zip-code"
            value={form.zipCode}
            onChange={(e) => setForm({ ...form, zipCode: e.target.value })}
          />
        </div>

        <label htmlFor="department">Department</label>
        <select
          id="department"
          value={form.department}
          onChange={(e) => setForm({ ...form, department: e.target.value })}
        >
          <option value="">Select Department</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Legal">Legal</option>
        </select>

        <button className="button-save" type="submit">
          Save
        </button>

        {showModal && (
          <Modal
            content={"Employee Created!"}
            onClose={() => setShowModal(false)}
          ></Modal>
        )}
      </form>
    </>
  );
}
