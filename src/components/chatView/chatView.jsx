import React from "react";
import {
	ChatViewContainer,
	ToolBar,
	ChatContent,
	Message,
} from "./chatView.style";
const ChatView = ({ chat, userEmail, selectedChat }) => {
	return (
		<>
			{selectedChat !== null ? (
				<ChatViewContainer>
					<ToolBar>
						Your conversation with:{" "}
						{
							chat[selectedChat].users.filter(
								(_usr) => _usr !== userEmail
							)[0]
						}
					</ToolBar>
					<ChatContent>
						{chat[selectedChat].messages.map((_msg) => (
							<Message
								className={
									_msg.sender === userEmail
										? "sender"
										: "friend"
								}
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
