import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyA07sf8pk82B8GOqC4j3cEwWAwncJpkF2U",
	authDomain: "chat-app-7f5ca.firebaseapp.com",
	databaseURL: "https://chat-app-7f5ca.firebaseio.com",
	projectId: "chat-app-7f5ca",
	storageBucket: "chat-app-7f5ca.appspot.com",
	messagingSenderId: "385627342549",
	appId: "1:385627342549:web:294c1ebc1c193e2945c45c",
	measurementId: "G-JW1D4EVD50",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
