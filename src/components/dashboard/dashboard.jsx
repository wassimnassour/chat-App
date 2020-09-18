import React, { useState, useEffect } from "react";
import { BoxLoading } from "react-loadingg";
import {
	DashBoardContainer,
	DashBoardWrapper,
	ChatContainer,
} from "./dashboard.style";
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
	const [chats, setChats] = useState([]);
	const [selectedChat, setSelectedChat] = useState(null);
	const [media, setMedia] = useState(null);

	useEffect(() => {
		auth.onAuthStateChanged(async (_usr) => {
			//check if user alerady singin
			if (!_usr) {
				history.push("/signin");
			} else {
				//fetch all converstions of a user
				await db
					.collection("chats")
					.where("users", "array-contains", _usr.email)
					.onSnapshot(async (res) => {
						const chats = await res.docs.map((_doc) => _doc.data());
						setEmail(_usr.email);
						setChats(chats);
					});
			}
		});

		//add Event Listener for Media querie
		const mq = window.matchMedia("(max-width: 500px)");
		mq.addEventListener("change", WidthChange);
		WidthChange(mq);
		// media query change
		function WidthChange(mq) {
			if (mq.matches) {
				setMedia(true);
				setNewChatFormVisible(false);
			} else {
				setMedia(false);
				setNewChatFormVisible(true);
			}
		}
		return () => {
			//remove EventListener
			mq.removeEventListener("change", WidthChange);
		};
	}, [history]);

	//select a chat
	const selectedChatList = async (chatIndex) => {
		await setSelectedChat(chatIndex);
		setNewChatFormVisible(false);
		await MessageRead(chatIndex);
	};

	//for show New message components
	const newChatBtnClicked = () => {
		setNewChatFormVisible(!newChatFormVisible);
	};
	// build Doc Id
	const buildDocKey = (friend) => [email, friend].sort().join(":");

	//if user See Message
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
	//submit Message
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
	//if i alerady tolk to this friend
	const goToChat = async (docKey, msg) => {
		const usersInChat = docKey.split(":");
		const chat = chats.find((_chat) =>
			usersInChat.every((_user) => _chat.users.includes(_user))
		);
		setNewChatFormVisible(false);
		await setSelectedChat(chats.indexOf(chat));
		await msgSubmit(msg, chats.indexOf(chat));
	};

	//New Friend Chat

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
	// for Back to list Of users
	const SetConversitionOpen = () => {
		setSelectedChat(null);
	};

	// hidde Newchat Component
	const toggelNewMessageComponent = () => {
		setNewChatFormVisible(false);
	};
	return (
		<>
			{email ? (
				<DashBoardContainer>
					<DashBoardWrapper>
						{newChatFormVisible && media ? null : (
							<ChatList
								newChatBtnFn={newChatBtnClicked}
								SelectedChatFn={selectedChatList}
								chats={chats}
								userEmail={email}
								selectedChatIndex={selectedChat}
							/>
						)}
						{newChatFormVisible ? null : (
							<ChatContainer selectedChatIndex={selectedChat}>
								<ChatView
									userEmail={email}
									selectedChat={selectedChat}
									chat={chats}
									SetConversitionOpenFn={SetConversitionOpen}
								/>
								{selectedChat !== null ? (
									<ChatMessageField
										msgSubmitFn={msgSubmit}
										MessageReadFn={MessageRead}
										selectedChat={selectedChat}
									/>
								) : null}
							</ChatContainer>
						)}
						{newChatFormVisible ? (
							<NewChatComponents
								toggelNewMessageComponentFn={
									toggelNewMessageComponent
								}
								submitNewChatFn={submitNewChat}
								goToChatFn={goToChat}
								newChatFormVisible={newChatFormVisible}
							/>
						) : null}
					</DashBoardWrapper>
				</DashBoardContainer>
			) : (
				<BoxLoading CircleToBlockLoading color="#0f4c75" />
			)}
		</>
	);
};

export default Dashboard;
