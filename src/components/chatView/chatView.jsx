import React, { useEffect } from "react";
import { MdBackspace } from "react-icons/md";

import {
	ChatViewContainer,
	ToolBar,
	ChatContent,
	Message,
} from "./chatView.style";
const ChatView = ({ chat, userEmail, selectedChat, SetOpenFn }) => {
	useEffect(() => {
		const container = document.getElementById("chatview-container");
		if (container) {
			container.scrollTo(0, container.scrollHeight);
		}
	}, [chat, selectedChat]);
	return (
		<>
			{selectedChat !== null ? (
				<ChatViewContainer selectedChat={selectedChat}>
					<ToolBar>
						<button onClick={() => SetOpenFn()}>
							<MdBackspace />
						</button>
						<span>
							{
								chat[selectedChat].users.filter(
									(_usr) => _usr !== userEmail
								)[0]
							}
						</span>
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
