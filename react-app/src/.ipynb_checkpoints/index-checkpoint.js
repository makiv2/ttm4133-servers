import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AddProvider } from './context/AddContext';
import { ClickProvider } from "./context/ClickContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Lab0 from './pages/lab0';
import Lab1 from './pages/lab1';
import Lab2 from './pages/lab2';
import Lab3 from './pages/lab3';
import Lab4 from './pages/lab4';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddProvider>
      <ClickProvider>
        <Router>
          <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/lab0' element={<Lab0 />} />
            <Route path='/lab1' element={<Lab1 />} />
            <Route path='/lab2' element={<Lab2 />} />
            <Route path='/lab3' element={<Lab3 />} />
            <Route path='/lab4' element={<Lab4 />} />
          </Routes>
        </Router>
      </ClickProvider>
    </AddProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
