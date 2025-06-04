import FormInput from "./FormInput";
import { states } from "../config/states";
import confetti from "canvas-confetti";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../features/modal/modalSlice";
import { updateField, resetForm } from "../features/form/formSlice";
import { addEmployee } from "../features/employee/employeeSlice";
import Modal from "react-simple-modal-by-vassili-langlois";

export default function Form() {
  // Dispatch
  const dispatch = useDispatch();

  // Selectors
  const isOpen = useSelector((state) => state.modal.isOpen);
  const form = useSelector((state) => state.form);

  // Function to handle the classic inputs changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    dispatch(updateField({ field: id.replace("-", ""), value }));
  };

  // Function to handle the select inputs changes
  const handleSelectChange = (e) => {
    const { id, value } = e.target;
    dispatch(updateField({ field: id, value }));
  };

  // Function to handle the submission of the form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatches to  modify the state
    dispatch(addEmployee({ ...form }));
    dispatch(openModal());
    dispatch(resetForm());

    // Confettis effect
    confetti({
      particleCount: 100,
      angle: 45,
      spread: 70,
      origin: { x: 0, y: 0.7 },
      zIndex: 999,
    });
    confetti({
      particleCount: 100,
      angle: 135,
      spread: 70,
      origin: { x: 1, y: 0.7 },
      zIndex: 999,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="create-employee">
        <FormInput
          content="First Name"
          htmlFor="firstName"
          type="text"
          id="firstName"
          value={form.firstName}
          onChange={handleChange}
        />
        <FormInput
          content="Last Name"
          htmlFor="lastName"
          type="text"
          id="lastName"
          value={form.lastName}
          onChange={handleChange}
        />
        <FormInput
          content="Date of Birth"
          htmlFor="dateOfBirth"
          type="date"
          id="dateOfBirth"
          value={form.dateOfBirth}
          onChange={handleChange}
          required
        />
        <FormInput
          content="Start Date"
          htmlFor="startDate"
          type="date"
          id="startDate"
          value={form.startDate}
          onChange={handleChange}
        />

        <div className="address">
          <h3>Address</h3>
          <FormInput
            content="Street"
            htmlFor="street"
            type="text"
            id="street"
            value={form.street}
            onChange={handleChange}
          />
          <FormInput
            content="City"
            htmlFor="city"
            type="text"
            id="city"
            value={form.city}
            onChange={handleChange}
          />

          <label htmlFor="state">State</label>
          <select id="state" value={form.state} onChange={handleSelectChange}>
            <option value="">Select State</option>
            {states.map((st) => (
              <option key={st.abbreviation} value={st.abbreviation}>
                {st.name}
              </option>
            ))}
          </select>

          <FormInput
            content="Zip Code"
            htmlFor="zipCode"
            type="number"
            id="zipCode"
            value={form.zipCode}
            onChange={handleChange}
          />
        </div>

        <label htmlFor="department">Department</label>
        <select
          id="department"
          value={form.department}
          onChange={handleSelectChange}
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

        <Modal isOpen={isOpen} onClose={() => dispatch(closeModal())}>
          Employee Created!
        </Modal>
      </form>
    </>
  );
}
