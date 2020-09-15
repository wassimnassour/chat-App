import React, { useEffect, useState } from "react";
import { MdBackspace } from "react-icons/md";
import { db } from "../../firebase/firebase";
import {
	ChatViewContainer,
	ToolBar,
	ChatContent,
	Message,
} from "./chatView.style";
const ChatView = ({ chat, userEmail, selectedChat, SetOpenFn }) => {
	const [userName, setUserName] = useState(null);
	useEffect(() => {
		// scroll to last message
		const container = document.getElementById("chatview-container");
		if (container) {
			container.scrollTo(0, container.scrollHeight);
		}
		// get a name of freind
		const getNameOfFriend = async () => {
			if (selectedChat !== null) {
				const emailOfFriend = chat[selectedChat].users.filter(
					(_usr) => _usr !== userEmail
				)[0];

				const name = await db
					.collection("users")
					.doc(emailOfFriend)
					.get();

				await setUserName(name.data().fullName);
			} else {
				setUserName(null);
			}
		};
		getNameOfFriend();
	}, [chat, selectedChat]);

	return (
		<>
			{selectedChat !== null ? (
				<ChatViewContainer selectedChat={selectedChat}>
					<ToolBar>
						<button onClick={() => SetOpenFn()}>
							<MdBackspace />
						</button>
						<span>{userName}</span>
					</ToolBar>
					<ChatContent id="chatview-container">
						{chat[selectedChat].messages.map((_msg, _index) => (
							<Message
								className={
									_msg.sender === userEmail
										? "sender"
										: "friend"
								}
								key={_index}
							>
								<span>{_msg.message}</span>
							</Message>
						))}
					</ChatContent>
				</ChatViewContainer>
			) : null}
		</>
	);
};

export default ChatView;
