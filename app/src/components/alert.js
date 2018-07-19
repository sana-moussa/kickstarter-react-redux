import React from "react";

class AlertTemplate extends React.Component {
  render() {
    const { alert, dismiss } = this.props;

    return (
      <div>
        <div
          className={`alert alert-dismissible alert-${alert.options.type}`}
          role="alert"
          key={alert.id}
        >
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={dismiss(alert)}
          >
            <span aria-hidden="true">×</span>
          </button>
          <div>
            {alert.message}
            {alert.options.parameters &&
              alert.options.parameters.map((param, index) => {
                return <span key={index}>{param}</span>;
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default AlertTemplate;
