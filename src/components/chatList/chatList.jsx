import React, { useState, useEffect } from "react";
import Avatar from "react-avatar";
import { MdNotifications, MdAddCircle } from "react-icons/md";

import {
	ChatListContainer,
	List,
	SignoutButton,
	NewMessageButton,
	ListUsers,
} from "./chatList.style";
import { auth, db } from "../../firebase/firebase";
const ChatList = ({
	newChatBtnFn,
	SelectedChatFn,
	chats,
	userEmail,
	selectedChatIndex,
}) => {
	const [Chats, setChats] = useState([]);

	const userIsSender = (chat) =>
		chat.messages[chat.messages.length - 1].sender !== userEmail;

	useEffect(() => {
		const getDataWithFullName = async () => {
			chats.map(async (chat) => {
				const Email = chat.users.filter(
					(user) => user !== userEmail
				)[0];
				const userData = await db.collection("users").doc(Email).get();
				const userName = await userData.data().fullName;
				async function setData(chat, userName) {
					await setChats((prevState) => [
						...prevState,
						{ ...chat, fullName: userName },
					]);
				}
				setData(chat, userName);
			});
		};

		getDataWithFullName();
	}, []);
	return (
		<ChatListContainer selectedChatIndex={selectedChatIndex}>
			{Chats ? (
				<>
					<NewMessageButton onClick={newChatBtnFn}>
						New chat <MdAddCircle />
					</NewMessageButton>
					<ListUsers>
						{Chats.map((chat, _index) => {
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
