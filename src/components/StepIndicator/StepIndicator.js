import React from "react";
import "./StepIndicator.scss";

const StepIndicator = ({ pageNumber, pageOnChange }) => {
  return (
    <div className="step-indicator">
      {Array(5)
        .fill(null)
        .map((_, index) => {
          return (
            <span
              className={`step-dot  ${index === pageNumber ? "active" : ""}`}
              onClick={() => pageOnChange(index)}
            >
              <span className={`step-number`}>{index + 1}</span>
            </span>
          );
        })}
    </div>
  );
};

export default StepIndicator;
