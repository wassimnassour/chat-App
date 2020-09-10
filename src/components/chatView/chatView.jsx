import React, { useEffect } from "react";
import {
	ChatViewContainer,
	ToolBar,
	ChatContent,
	Message,
} from "./chatView.style";
const ChatView = ({ chat, userEmail, selectedChat }) => {
	useEffect(() => {
		const container = document.getElementById("chatview-container");
		if (container) {
			container.scrollTo(0, container.scrollHeight);
		}
	}, [chat, selectedChat]);
	return (
		<>
			{selectedChat !== null ? (
				<ChatViewContainer>
					<ToolBar>
						{
							chat[selectedChat].users.filter(
								(_usr) => _usr !== userEmail
							)[0]
						}
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
