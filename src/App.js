import React from "react";
import Rating from "./Routs/Rating";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Thanks from "./Routs/Thanks";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <div className="app-container">
              <div className="component-container">
                <Rating />
              </div>
            </div>
          }
        />
        <Route
          path="/thanks"
          element={
            <div className="app-container">
              <div className="component-container">
                <Thanks />
              </div>
            </div>
          }
        />
        <Route path="*" element={<h1>Error 401 page not found</h1>} />
      </Routes>
    </BrowserRouter>
   
  );
};

export default App;
