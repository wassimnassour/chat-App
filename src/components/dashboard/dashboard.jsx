import React, { useState, useEffect } from "react";
import { BoxLoading } from "react-loadingg";
import { DashBoardContainer, DashBoardWrapper } from "./dashboard.style";
import {
	ChatList,
	ChatView,
	ChatMessageField,
	NewChatComponents,
} from "../index";
import { auth, db } from "../../firebase/firebase";
const firebase = require("firebase");

const Dashboard = ({ history }) => {
	const [email, setEmail] = useState(null);
	const [newChatFormVisible, setNewChatFormVisible] = useState(true);
	const [chats, setChats] = useState(null);
	const [selectedChat, setSelectedChat] = useState(null);

	useEffect(() => {
		auth.onAuthStateChanged(async (_usr) => {
			if (!_usr) {
				history.push("/signin");
			} else {
				await db
					.collection("chats")
					.where("users", "array-contains", _usr.email)
					.onSnapshot(async (res) => {
						const chats = await res.docs.map((_doc) => _doc.data());
						setChats(chats);
						setEmail(_usr.email);
					});
			}
		});
	}, [history]);
	const selectedChatList = async (chatIndex) => {
		await setSelectedChat(chatIndex);
		setNewChatFormVisible(false);
		await MessageRead(chatIndex);
	};
	const newChatBtnClicked = () => {
		setNewChatFormVisible(!newChatFormVisible);
	};

	const buildDocKey = (friend) => [email, friend].sort().join(":");

	const MessageRead = (selectedChat) => {
		const key = buildDocKey(
			chats[selectedChat].users.filter((_usr) => _usr !== email)[0]
		);

		const userSender =
			chats[selectedChat].messages[
				chats[selectedChat].messages.length - 1
			].sender !== email;
		if (userSender) {
			db.collection("chats").doc(key).update({
				reciverHasRead: true,
			});
		}
	};

	const msgSubmit = (msg, index) => {
		const key = buildDocKey(
			chats[index].users.filter((_usr) => _usr !== email)[0]
		);

		if (msg.length > 0) {
			db.collection("chats")
				.doc(key)
				.update({
					messages: firebase.firestore.FieldValue.arrayUnion({
						sender: email,
						message: msg,
						timestamp: Date.now(),
					}),
					reciverHasRead: false,
				});
		}
	};

	const goToChat = async (docKey, msg) => {
		const usersInChat = docKey.split(":");
		const chat = chats.find((_chat) =>
			usersInChat.every((_user) => _chat.users.includes(_user))
		);
		setNewChatFormVisible(false);
		await setSelectedChat(chats.indexOf(chat));
		await msgSubmit(msg, chats.indexOf(chat));
	};

	const submitNewChat = async (chatObj) => {
		const docKey = buildDocKey(chatObj.sendTo);
		await db
			.collection("chats")
			.doc(docKey)
			.set({
				messages: [
					{
						sender: email,
						message: chatObj.msg,
					},
				],
				users: [email, chatObj.sendTo],
				reciverHasRead: false,
			});
		setNewChatFormVisible(!newChatFormVisible);
		if (chats.length > 0) {
			setSelectedChat(chats.length - 1);
		}
	};

	return (
		<>
			{email ? (
				<DashBoardContainer>
					<DashBoardWrapper>
						<ChatList
							newChatBtnFn={newChatBtnClicked}
							SelectedChatFn={selectedChatList}
							chats={chats}
							userEmail={email}
							selectedChatIndex={selectedChat}
						/>
						{newChatFormVisible ? null : (
							<div className="messages-container">
								<ChatView
									userEmail={email}
									selectedChat={selectedChat}
									chat={chats}
								/>
								{selectedChat !== null ? (
									<ChatMessageField
										msgSubmitFn={msgSubmit}
										MessageReadFn={MessageRead}
										selectedChat={selectedChat}
									/>
								) : null}
							</div>
						)}
						{newChatFormVisible ? (
							<NewChatComponents
								submitNewChatFn={submitNewChat}
								goToChatFn={goToChat}
							/>
						) : null}
					</DashBoardWrapper>
				</DashBoardContainer>
			) : (
				<BoxLoading CircleToBlockLoading color="#0028ff" />
			)}
		</>
	);
};

export default Dashboard;
