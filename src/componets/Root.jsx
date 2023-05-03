import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Home from "./Home";

function Root() {
  return (
    <div>
      <Header />

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
