import React, { useState, useEffect } from "react";
import { DashBoardContainer, DashBoardWrapper } from "./dashboard.style";
import { ChatList, ChatView, ChatMessageField } from "../index";
import { auth, db } from "../../firebase/firebase";
const firebase = require("firebase");
const Dashboard = ({ history }) => {
	const [email, setEmail] = useState(null);
	const [newChatFormVisible, setNewChatFormVisible] = useState(false);
	const [chats, setChats] = useState(null);
	const [selectedChat, setSelectedChat] = useState(null);
	const [id, setId] = useState(null);

	const newChat = () => {
		console.log("newChat");
	};
	const selectedChatList = async (chatIndex) => {
		await setSelectedChat(chatIndex);
		await MessageRead(chatIndex);
	};
	const newChatBtnClicked = () => {
		console.log("newChatBtnClicked");
	};

	const MessageRead = (selectedChat) => {
		const userSender =
			chats[selectedChat].messages[
				chats[selectedChat].messages.length - 1
			].sender !== email;
		if (userSender) {
			db.collection("chats").doc(id).update({
				reciverHasRead: true,
			});
		}
	};
	const msgSubmit = (msg) => {
		if (msg.length > 0) {
			db.collection("chats")
				.doc(id)
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

	useEffect(() => {
		auth.onAuthStateChanged(async (_usr) => {
			if (!_usr) {
				history.push("/signin");
			} else {
				await db
					.collection("chats")
					.where("users", "array-contains", _usr.email)
					.onSnapshot(async (res) => {
						const chats = async () => {
							await res.docs.map((_doc) => {
								setChats([_doc.data()]);
								setId(_doc.id);
							});
						};
						chats();
						setEmail(_usr.email);
					});
			}
		});
	}, [history]);

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
					</DashBoardWrapper>
				</DashBoardContainer>
			) : (
				"Loading"
			)}
		</>
	);
};

export default Dashboard;
