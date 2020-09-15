import React from "react";
import Avatar from "react-avatar";
import { MdNotifications, MdAddCircle } from "react-icons/md";

import {
	ChatListContainer,
	List,
	SignoutButton,
	NewMessageButton,
	ListUsers,
} from "./chatList.style";
import { auth } from "../../firebase/firebase";
const ChatList = ({
	newChatBtnFn,
	SelectedChatFn,
	chats,
	userEmail,
	selectedChatIndex,
}) => {
	//check who send last message
	const userIsSender = (chat) =>
		chat.messages[chat.messages.length - 1].sender !== userEmail;

	return (
		<ChatListContainer selectedChatIndex={selectedChatIndex}>
			{chats ? (
				<>
					<NewMessageButton onClick={newChatBtnFn}>
						New chat <MdAddCircle />
					</NewMessageButton>
					<ListUsers>
						{chats.map((chat, _index) => {
							return (
								<List
									selected={selectedChatIndex === _index}
									key={_index}
									onClick={() => {
										SelectedChatFn(_index);
									}}
								>
									<div className="contact">
										<Avatar
											name={chat.fullName}
											size="45"
											round={true}
											className="avatar"
										/>
										<div className="user">
											<span className="Name">
												{chat.fullName}
											</span>
											<span className="last_message">
												{chat.messages[
													chat.messages.length - 1
												].message.substring(0, 25) +
													"...."}
											</span>
										</div>
									</div>
									<span>
										{userIsSender(chat) &&
										chat.reciverHasRead === false ? (
											<MdNotifications className="Notifications" />
										) : null}
									</span>
								</List>
							);
						})}
					</ListUsers>
				</>
			) : (
				<NewMessageButton onClick={newChatBtnFn}>
					New chate
				</NewMessageButton>
			)}
			<SignoutButton onClick={() => auth.signOut()} className="signOut">
				Sign out
			</SignoutButton>
		</ChatListContainer>
	);
};
export default ChatList;
