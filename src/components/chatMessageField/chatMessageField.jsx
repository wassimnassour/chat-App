import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import { MessageFieldContainer } from "./chatMessageField.style";
const ChatMessageField = ({ msgSubmitFn }) => {
	const [message, setMessage] = useState("");
	const submit = (message) => {
		msgSubmitFn(message);
		setMessage("");
	};
	function typing(event) {
		console.log(event.keyCode);
		console.log("its work");
	}

	return (
		<MessageFieldContainer>
			<input
				type="text"
				placeholder="Type Your message "
				value={message}
				onChange={(e) => {
					setMessage(e.target.value);
				}}
				onKeyDown={(event) => event.keyCode === 13 && submit(message)}
			/>
			<button onClick={(e) => submit(e, message)}>
				<MdSend />
			</button>
		</MessageFieldContainer>
	);
};

export default ChatMessageField;
