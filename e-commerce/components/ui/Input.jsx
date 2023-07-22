import React from "react";

function Input(props) {
  const { type, errorMessage, touched, placeholder, ...inputProps } = props;
  return (
    <div>
      <label className="relative block cursor-text w-full">
        <input
          type={type}
       
          className={`${touched && errorMessage ? "border-primary" : "border-secondary"} h-14 w-full peer border outline-none px-4 pt-2 bg-slate-100 `}
          required
          {...inputProps}
        />
        <span className="absolute top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs transition-all">
            {placeholder}
          </span>
      </label>
      {touched && <span className="text-xs text-primary">{errorMessage}</span>}
    </div>
  );
}

export default Input;
