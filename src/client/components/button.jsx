import React, { PropTypes } from "react";
const Button = ({ action, actionLabel }) => <button onClick = {action}>{actionLabel}</button>;

Button.propType = {
  action: PropTypes.func.isRequired,
  actionLabel: PropTypes.string.isRequired,
};

export default Button;
