import React from "react";
import { PropTypes } from "prop-types";

const renderField = ({
  input,
  label,
  placeholder,
  disabled,
  type,
  meta: { touched, error }
}) => {
  let containerClass = "row form-group";

  if (touched && error) {
    containerClass = containerClass + " has-error";
  }

  return (
    <div className={containerClass}>
      <label htmlFor={input.name} className="col-sm-2 col-form-label">
        {label}
      </label>
      <div className="col-sm-10">
        <input
          {...input}
          disabled={disabled}
          name={input.name}
          placeholder={placeholder}
          type={type}
          className="form-control"
        />
        {touched && error && <span className="help-inline">{error}</span>}
      </div>
    </div>
  );
};

renderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  meta: PropTypes.object
};

export default renderField;
