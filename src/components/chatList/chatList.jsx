import React from "react";
import {
	ChatListContainer,
	List,
	SignoutButton,
	NewMessageButton,
} from "./chatList.style";
import { auth } from "../../firebase/firebase";

const ChatList = ({
	newChatBtnFn,
	SelectedChatFn,
	chats,
	userEmail,
	selectedChatIndex,
}) => {
	console.log(chats);
	return (
		<ChatListContainer>
			{chats ? (
				<>
					<NewMessageButton onClick={newChatBtnFn}>
						New chate
					</NewMessageButton>
					{chats.map((chat, _index) => (
						<div
							key={_index}
							onClick={() => SelectedChatFn(_index)}
						>
							<List selected={selectedChatIndex === _index}>
								<span>
									{
										chat.users.filter(
											(user) => user !== userEmail
										)[0]
									}
								</span>
								<span>
									{chat.messages[
										chat.messages.length - 1
									].message.substring(0, 20) + "...."}
								</span>
							</List>
						</div>
					))}
				</>
			) : (
				<NewMessageButton onClick={newChatBtnFn}>
					New chate
				</NewMessageButton>
			)}
			<SignoutButton onClick={() => auth.signOut()}>
				Sign out
			</SignoutButton>
		</ChatListContainer>
	);
};

export default ChatList;
