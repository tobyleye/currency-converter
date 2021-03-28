import PropTypes from "prop-types";
import * as React from "react";
import "./screen.css";

const validPositions = ["top", "left", "right", "bottom"];

function Screen({
  children,
  active,
  position = "bottom",
  bgColor = "antiquewhite",
}) {
  let getClassName = React.useMemo(() => {
    let classNames = [
      "screen",
      `screen--${position}`,
      active ? "screen--active" : "",
    ];
    return classNames.join(" ").trim();
  }, [active, position]);

  return (
    <div style={{ background: bgColor }} className={getClassName}>
      {children}
    </div>
  );
}

Screen.propTypes = {
  children: PropTypes.element,
  position: PropTypes.oneOf(validPositions),
};

export { Screen };
