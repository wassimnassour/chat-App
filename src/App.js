import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { SignUp, SignIn, Dashboard } from "./components/index";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Route path="/signup" component={SignUp} />
			<Route path="/signin" component={SignIn} />
			<Route path="/dashboard" component={Dashboard} />
		</BrowserRouter>
	);
}

export default App;
