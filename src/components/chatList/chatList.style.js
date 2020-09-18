import styled, { css } from "styled-components";

export const ChatListContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;
	position: relative;
	border-right: 1px solid #62626233;
	background: #0f4c75;

	@media (max-width: 800px) {
		width: 43%;
	}
	@media (max-width: 650px) {
		${({ selectedChatIndex }) =>
			selectedChatIndex !== null
				? { display: "none" }
				: { width: "100%" }}
	}
`;
export const List = styled.li`
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid #fffbfb17;
	padding: 12px 0px 12px 5px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	${({ selected }) => selected && { background: "#156296cf" }}}
	.contact {
		display: flex;
		align-items: center;
		width: 88%;

		.user {
			display: flex;
			flex-direction: column;
			font-weight: bold;
			.Name {
				font-weight: bold;
				margin: 4px 0;
				color: white;
				    word-break: break-word;
			}
			.last_message {
				font-weight: 400;

				color: #d1d8d8;
			}
		}
		.avatar {
			height: 60px;
			margin-right: 12px;
		}
	}
	.Notifications {
		color: red;
		font-size: 25px;
		padding: 0 6px 0;
	}
`;
export const ListUsers = styled.div`
	overflow-y: auto;
	overflow-x: hidden;
`;

const Button = css`
	border: none;
	color: white;
	font-weight: Bold;
	width: 100%;
	letter-spacing: 1px;
	display: flex;
	height: 50px;
	justify-content: center;
	align-items: center;
	background: transparent;
`;
export const SignoutButton = styled.button`
	${Button}
	position: absolute;
	bottom: 0;
	left: 0;
	border-top: 1px solid gray;
	background: #0f4c75;
	z-index: 12;
`;
export const NewMessageButton = styled.button`
	${Button}
	border-bottom:1px solid gray;
`;
