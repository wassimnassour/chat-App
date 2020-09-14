import styled, { css } from "styled-components";

export const ChatListContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 30%;
	position: relative;
	border-right: 1px solid #62626233;
`;
export const List = styled.li`
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid #62626233;
	padding: 12px 0px 12px 8px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	${({ selected }) => selected && { background: "#e3e3e3" }}
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
			}
			.last_message {
				font-weight: 400;
				color: #5c5d5d;
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

const Button = css`
	background: #0028ff;
	border: none;
	color: white;
	font-weight: Bold;
	width: 100%;
	letter-spacing: 1px;
	display: flex;
	height: 50px;
	justify-content: center;
	align-items: center;
`;
export const SignoutButton = styled.button`
	${Button}
	position: absolute;
	bottom: 0;
	left: 0;
`;
export const NewMessageButton = styled.button`
	${Button}
`;
