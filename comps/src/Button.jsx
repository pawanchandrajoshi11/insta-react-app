import React from "react";
import PropTypes from "prop-types";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  if (primary && secondary) return <button>{children}</button>;
}

// Button.propTypes = {
//   checkVariationValue: (props) => {
     
//   },
// };

export default Button;
