import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import { MessageFieldContainer } from "./chatMessageField.style";
const ChatMessageField = ({ msgSubmitFn, MessageReadFn, selectedChat }) => {
	const [message, setMessage] = useState("");
	//submit a message
	const submit = (message, selectedChat) => {
		msgSubmitFn(message, selectedChat);
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
				onKeyDown={(event) =>
					event.keyCode === 13 && submit(message, selectedChat)
				}
			/>
			<button
				onClick={(e) => {
					submit(message, selectedChat);
				}}
			>
				<MdSend />
			</button>
		</MessageFieldContainer>
	);
};

export default ChatMessageField;
