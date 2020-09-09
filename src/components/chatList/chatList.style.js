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
	${({ selected }) => selected && { background: "#e3e3e3" }}
`;

const Button = css`
	background: #0028ff;
	border: none;
	color: white;
	padding: 18px;
	font-weight: Bold;
	width: 100%;
	letter-spacing: 1px;
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
