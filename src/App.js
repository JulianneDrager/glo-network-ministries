import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Screen from "./Components/Screen/Screen";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/tmp/glo" element={<Screen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
