import React, { useState, useEffect } from "react";
import { DashBoardContainer, DashBoardWrapper } from "./dashboard.style";
import { ChatList, ChatView } from "../index";
import { auth, db } from "../../firebase/firebase";
const Dashboard = ({ history }) => {
	const [email, setEmail] = useState(null);
	const [reciverHasRead, setReciverHasReadl] = useState(false);
	const [newChatFormVisible, setNewChatFormVisible] = useState(false);
	const [chats, setChats] = useState(null);
	const [selectedChat, setSelectedChat] = useState(null);

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
						setEmail(_usr.email);
						setChats(chats);
					});
			}
		});
	}, []);
	console.log(chats);

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
							<ChatView
								userEmail={email}
								selectedChat={selectedChat}
								chat={chats}
							/>
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
