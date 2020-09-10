import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import { MessageFieldContainer } from "./chatMessageField.style";
const ChatMessageField = ({ msgSubmitFn, MessageReadFn, selectedChat }) => {
	const [message, setMessage] = useState("");
	const submit = (message) => {
		msgSubmitFn(message);
		setMessage("");
	};

	return (
		<MessageFieldContainer>
			<input
				type="text"
				placeholder="Type Your message "
				value={message}
				onChange={(e) => {
					setMessage(e.target.value);
				}}
				onClick={() => MessageReadFn(selectedChat)}
				onKeyDown={(event) => event.keyCode === 13 && submit(message)}
			/>
			<button
				onClick={(e) => {
					submit(message);
				}}
			>
				<MdSend />
			</button>
		</MessageFieldContainer>
	);
};

export default ChatMessageField;
