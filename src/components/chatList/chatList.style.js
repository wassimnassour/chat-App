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
	padding: 8px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	${({ selected }) => selected && { background: "#e3e3e3" }}
	.contact {
		display: flex;
		flex-direction: column;
	}
	.Notifications {
		color: red;
		font-size: 25px;
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
