import React from "react";
import { Link, Outlet } from "react-router-dom";

const MyAccaunt = () => {
  return (
    <div>
      <h1>MyAccaunt</h1>
      <Link to="download"> download </Link>
      <Outlet />
    </div>
  );
};

export default MyAccaunt;
