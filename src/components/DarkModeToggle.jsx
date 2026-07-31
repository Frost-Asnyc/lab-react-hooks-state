import React from "react";

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <button onClick={onToggle} aria-pressed={darkMode}>
      Toggle {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
};

export default DarkModeToggle;
