import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes";
import { NotFound } from "./screens";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      {routes.map((page) => (
        <Route path={page.path} element={page.element} />
      ))}
    </Routes>
  );
};

export default App;
