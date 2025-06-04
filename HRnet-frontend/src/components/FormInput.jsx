import PropTypes from "prop-types";

export default function FormInput({
  content,
  htmlFor,
  type,
  id,
  value,
  onChange,
  required,
}) {
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

FormInput.propTypes = {
  content: PropTypes.node,
  htmlFor: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.func,
};
