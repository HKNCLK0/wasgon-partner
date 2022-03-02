import React from "react";

const Box = (props) => {
  return (
    <div
      className={`${props.className} bg-white shadow-lg flex gap-4 items-center py-8 rounded-xl`}
    >
      {props.children}
    </div>
  );
};

export default Box;
