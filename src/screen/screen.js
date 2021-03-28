import PropTypes from "prop-types";
import "./screen.css";

const validPositions = ["top", "left", "right", "bottom"];

function Screen({ children, position = "bottom" }) {
  return <div className={`screen screen--${position}`}>{children}</div>;
}

Screen.propTypes = {
  children: PropTypes.element,
  position: PropTypes.oneOf(validPositions),
};

export { Screen };
