import React from "react";
const Input = (props) => {
  return (
    <label className="gap-1 flex flex-col">
      <h1 className="text-sm font-semibold">{props.labelText}</h1>
      <input
        type={props.type}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        placeholder={props.placeholder}
        className="w-full border-2 outline-none transition-colors duration-300 hover:border-black focus:border-black border-blue-800 rounded-md px-2 py-2 text-sm font-medium"
      />
    </label>
  );
};

export default Input;
