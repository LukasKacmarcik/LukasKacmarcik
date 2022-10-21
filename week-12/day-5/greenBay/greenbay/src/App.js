import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/views/home/Home";
import Layout from "./components/layout/Layout";
import RegistrationForm from "./components/views/regform/RegistrationForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<RegistrationForm />} />
      </Route>
    </Routes>
  );
}

export default App;
