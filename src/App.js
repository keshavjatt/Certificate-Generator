import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddCandidate from "./candidates/AddCandidate";
import PrintForm from "./pages/PrintForm";

export default function App() {
  return (
    <>
      <ToastContainer />
      <HashRouter>
        <Routes>
          <Route path="/" exact element={<AddCandidate />}></Route>
          <Route path="/print" exact element={<PrintForm />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}
