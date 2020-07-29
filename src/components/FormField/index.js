import React from "react";

function FormField({ value, onChange, name, label }) {
  return (
    <div>
      <label>
        {label}:
        <input type="text" name={name} value={value} onChange={onChange} />
      </label>
    </div>
  );
}
export default FormField;
