import "./numberpad.css";
import * as React from "react";

export default function NumberPad({ value, onSubmit, onChange }) {
  const concat = (key) => {
    let newValue = value + key;
    newValue = newValue.replace(/(^[0-9]+\.?(\d{1,2})?)(.*)/, (_, p1) => p1);
    onChange(newValue);
  };
  const deleteLastDigit = () => {
    onChange(value.slice(0, -1));
  };

  const onKeyDown = (e) => {
    const { key, keyCode } = e;
    const numkeys = ["0", ".", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (numkeys.includes(key)) {
      concat(key);
    } else if (keyCode === 8) {
      deleteLastDigit();
    } else if (keyCode === 13) {
      onSubmit(value);
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <div className="number-pad">
      <div className="number-pad__screen" onClick={deleteLastDigit}>
        {value}
        <span className="number-pad__cursor"></span>
      </div>
      <div className="number-pad__buttons">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0"].map((key) => {
          return (
            <button onClick={() => concat(key)} key={key}>
              <span>{key}</span>
            </button>
          );
        })}
        <button onClick={onSubmit}>
          <span>submit</span>
        </button>
      </div>
    </div>
  );
}
