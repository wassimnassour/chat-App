import React, { useState, useEffect } from "react";
import { DashBoardContainer, DashBoardWrapper } from "./dashboard.style";
import { ChatList, ChatView, ChatMessageField } from "../index";
import { auth, db } from "../../firebase/firebase";
const firebase = require("firebase");
const Dashboard = ({ history }) => {
	const [email, setEmail] = useState(null);
	const [reciverHasRead, setReciverHasReadl] = useState(false);
	const [newChatFormVisible, setNewChatFormVisible] = useState(false);
	const [chats, setChats] = useState(null);
	const [selectedChat, setSelectedChat] = useState(null);
	const [id, setId] = useState(null);

	console.log(id);

	const newChat = () => {
		console.log("newChat");
	};
	const selectedChatList = (chatIndex) => {
		console.log(chatIndex);
		setSelectedChat(chatIndex);
	};
	const newChatBtnClicked = () => {
		console.log("newChatBtnClicked");
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
					receiverHasRead: false,
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
	}, []);

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
									<ChatMessageField msgSubmitFn={msgSubmit} />
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
