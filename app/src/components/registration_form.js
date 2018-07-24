import React from "react";
import RenderField from "./render_field";
import { Field, reduxForm } from "redux-form";
import { I18n, Translate as T } from "react-redux-i18n";
import { PropTypes } from "prop-types";

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.username) {
    errors.username = "Required";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

class RegistrationForm extends React.Component {
  render() {
    const { handleSubmit, isRegistering } = this.props;

    return (
      <div className="registration-form">
        <div className="header">{this.props.error}</div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              <T value="form.registration.title" />
            </legend>
            <Field
              label={I18n.t("form.email")}
              name="email"
              type="email"
              component={RenderField}
              placeholder={I18n.t("form.email")}
            />
            <Field
              label={I18n.t("form.username")}
              name="username"
              type="text"
              component={RenderField}
              placeholder={I18n.t("form.username")}
            />
            <Field
              label={I18n.t("form.password")}
              name="password"
              type="password"
              component={RenderField}
              placeholder={I18n.t("form.password")}
            />
            <div className="row form-check">
              <div className="col-sm-10 offset-sm-2">
                <button
                  type="submit"
                  className="btn btn-secondary"
                  disabled={isRegistering}
                >
                  {isRegistering ? (
                    <i className="fa fa-spinner fa-spin" />
                  ) : (
                    <T value="form.registration.register" />
                  )}
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

RegistrationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isRegistering: PropTypes.bool,
  error: PropTypes.object
};

export default reduxForm({ form: "registration-form", validate })(
  RegistrationForm
);
