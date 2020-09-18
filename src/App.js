import React, { useEffect } from "react";
import { auth } from "./firebase/firebase";
import "./App.css";

function App({ history }) {
	useEffect(() => {
		auth.onAuthStateChanged(async (_usr) => {
			//check if user alerady singin
			if (!_usr) {
				history.push("/signin");
			} else {
				history.push("/dashboard");
			}
		});
	}, [history]);

	return <></>;
}

export default App;
