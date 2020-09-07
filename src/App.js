import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { SignUp } from "./components/index";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/signup" component={SignUp} />
    </BrowserRouter>
  );
}

export default App;
