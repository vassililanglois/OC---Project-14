function FormInput({ content, htmlFor, type, id, value, onChange, required }) {
  return (
    <div className="form-input">
      <label htmlFor={htmlFor}>{content}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default FormInput;
