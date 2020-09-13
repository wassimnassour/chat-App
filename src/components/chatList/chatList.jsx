import React from "react";
import {
	ChatListContainer,
	List,
	SignoutButton,
	NewMessageButton,
} from "./chatList.style";
import { MdNotifications, MdAddCircle } from "react-icons/md";
import { auth } from "../../firebase/firebase";
import { CustomButton } from "../index";
const ChatList = ({
	newChatBtnFn,
	SelectedChatFn,
	chats,
	userEmail,
	selectedChatIndex,
}) => {
	const userIsSender = (chat) =>
		chat.messages[chat.messages.length - 1].sender !== userEmail;
	return (
		<ChatListContainer>
			{chats ? (
				<>
					<NewMessageButton onClick={newChatBtnFn}>
						New chat <MdAddCircle />
					</NewMessageButton>
					{chats.map((chat, _index) => (
						<div
							key={_index}
							onClick={() => {
								SelectedChatFn(_index);
							}}
						>
							<List selected={selectedChatIndex === _index}>
								<div className="contact">
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
								</div>
								<span>
									{userIsSender(chat) &&
									chat.reciverHasRead === false ? (
										<MdNotifications className="Notifications" />
									) : null}
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
			<SignoutButton onClick={() => auth.signOut()} className="signOut">
				Sign out
			</SignoutButton>
		</ChatListContainer>
	);
};

export default ChatList;
