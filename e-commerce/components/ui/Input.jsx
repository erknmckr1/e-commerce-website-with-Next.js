import React from "react";

function Input(props) {
  const { type, errorMessage, touched, placeholder, ...inputProps } = props;
  return (
    <div>
      <label className="relative block cursor-text w-full">
        <input
          type={type}
          placeholder={placeholder}
          className={`${touched && errorMessage ? "border-primary" : "border-secondary"} h-14 w-full border outline-none px-4 pt-2 `}
          required
          {...inputProps}
          
        />
      </label>
      {touched && <span className="text-xs text-primary">{errorMessage}</span>}
    </div>
  );
}

export default Input;
