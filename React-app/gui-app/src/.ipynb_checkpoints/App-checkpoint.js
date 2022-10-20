import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom"



export default function App() {

  return (
    
    <nav>
        <Link style={{ color: "black" }} to="/lab0">Lab0</Link>
        <Link style={{ color: "black", }} to="/lab1">Lab1</Link>
        <Link style={{ color: "black", }} to="/lab2">Lab2</Link>
        <Link style={{ color: "black", }} to="/lab3">Lab3</Link>
        <Link style={{ color: "black", }} to="/lab4">Lab4</Link>
    </nav>

  )
}

//export default App;
