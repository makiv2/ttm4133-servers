import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonComponent from "./components/Button";

import { Link } from "react-router-dom";

export default function App() {
  return (
    <nav>
      <Link style={{ color: "black" }} to="/lab0">
        <ButtonComponent name="Lab 0"></ButtonComponent>
      </Link>
      <Link style={{ color: "black" }} to="/lab1">
        <ButtonComponent name="Lab 1"></ButtonComponent>
      </Link>
      <Link style={{ color: "black" }} to="/lab2">
        <ButtonComponent name="Lab 2"></ButtonComponent>
      </Link>
      <Link style={{ color: "black" }} to="/lab3">
        <ButtonComponent name="Lab 3"></ButtonComponent>
      </Link>
      <Link style={{ color: "black" }} to="/lab4">
        <ButtonComponent name="Lab 4"></ButtonComponent>
      </Link>
    </nav>
  );
}

//export default App;
