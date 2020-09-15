import React, { useState } from "react";
import { db, auth } from "../../firebase/firebase";
import { Container, ButtonSubmit } from "./newChat.style";

const NewChatComponents = ({ submitNewChatFn, goToChatFn }) => {
	const [userName, setUserName] = useState("");
	const [message, setMessage] = useState("");
	const buildDocKey = () =>
		[auth.currentUser.email, userName].sort().join(":");

	const userExists = async () => {
		const UserSnapShot = await db.collection("users").get();
		const exists = await UserSnapShot.docs
			.map((_user) => _user.data().email)
			.includes(userName);
		return exists;
	};
	const chatExists = async () => {
		const docKey = buildDocKey();
		const chat = await db.collection("chats").doc(docKey).get();
		return chat.exists;
	};

	const submit = async (e) => {
		e.preventDefault();
		const key = buildDocKey();
		const user = await userExists();
		if (user) {
			const chat = await chatExists();
			chat
				? goToChatFn(key, message)
				: submitNewChatFn({ sendTo: userName, msg: message });
		}
	};
	return (
		<Container>
			<h2>Send A Message!</h2>
			<form onSubmit={submit}>
				<label htmlFor="new-chat-username">
					Enter Your Friend's Email
				</label>
				<input
					required
					id="new-chat-username"
					onChange={(e) => setUserName(e.target.value)}
				/>

				<label htmlFor="new-chat-username">Enter Your Message</label>
				<textarea
					required
					id="new-chat-message"
					onChange={(e) => setMessage(e.target.value)}
				/>

				<ButtonSubmit type="submit" onClick={() => submit}>
					Send
				</ButtonSubmit>
			</form>
		</Container>
	);
};

export default NewChatComponents;
