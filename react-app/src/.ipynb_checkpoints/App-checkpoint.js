import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonComponent from "./components/Button";

import { Link } from "react-router-dom";



export default function App() {
  return (
    <nav>
      <div style={{height: '95vh'}}className="d-flex justify-content-center align-items-center">
        <Link style={{ color: "black" }} to="/lab0">
          <ButtonComponent name="Lab 0 - Tutorial"></ButtonComponent>
        </Link>
        <Link style={{ color: "black" }} to="/lab1">
          <ButtonComponent name="Lab 1 - Cellular Coverage"></ButtonComponent>
        </Link>
        <Link style={{ color: "black" }} to="/lab2">
          <ButtonComponent name="Lab 3 - LTE Connection Setup"></ButtonComponent>
        </Link>
        <Link style={{ color: "black" }} to="/lab3">
          <ButtonComponent name="Lab 5 - LTE Handover"></ButtonComponent>
        </Link>
        <Link style={{ color: "black" }} to="/lab4">
          <ButtonComponent name="Lab 6 - Freqeuncy Reuse"></ButtonComponent>
        </Link>
      </div>
    </nav>
  );
}

//export default App;
