import React, { useState, useEffect } from "react";
import {
	ChatListContainer,
	List,
	SignoutButton,
	NewMessageButton,
} from "./chatList.style";
import { MdNotifications, MdAddCircle } from "react-icons/md";
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
		<ChatListContainer>
			{Chats ? (
				<>
					<NewMessageButton onClick={newChatBtnFn}>
						New chat <MdAddCircle />
					</NewMessageButton>
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
									<span>{chat.fullName}</span>
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
						);
					})}
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
