import React from "react";
import RenderField from "./render_field";
import { Field, reduxForm } from "redux-form";
import { I18n, Translate as T } from "react-redux-i18n";
import { PropTypes } from "prop-types";

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = "Please enter your username.";
  }

  if (!values.password) {
    errors.password = "Please enter your password.";
  }

  return errors;
};

class LoginForm extends React.Component {
  render() {
    const { handleSubmit, loggingIn } = this.props;

    return (
      <div className="authentication-form">
        <div className="header">{this.props.error}</div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              <T value="form.login.title" />
            </legend>
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
                  disabled={loggingIn}
                >
                  {loggingIn ? (
                    <i className="fa fa-spinner fa-spin" />
                  ) : (
                    <T value="form.login.login" />
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

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loggingIn: PropTypes.bool,
  error: PropTypes.object
};

export default reduxForm({ form: "login-form", validate })(LoginForm);
