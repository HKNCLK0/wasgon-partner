import React from "react";
import { Link, useLocation } from "react-router-dom";

import { businessBarButtonData } from "../Data";

const LeftBar = () => {
  const page = useLocation();

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg font-semibold px-2">Hesabım</h1>
      {businessBarButtonData.map((buton) => {
        return (
          <Link
            key={buton.id}
            to={buton.to}
            className={`${
              buton.to === page.pathname ? "bg-gray-100" : ""
            } px-2 flex items-center gap-1 py-2 transition-colors duration-300 group hover:bg-gray-100 font-medium text-sm rounded`}
          >
            <buton.iconName
              className={`transition-colors duration-300 group-hover:text-blue-800 ${
                buton.to === page.pathname ? "text-blue-800" : ""
              }`}
              size={16}
            />
            {buton.name}
          </Link>
        );
      })}
    </div>
  );
};

export default LeftBar;
