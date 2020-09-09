import styled from "styled-components";

export const ChatViewContainer = styled.div`
	width: 70%;
`;
export const ToolBar = styled.div`
	width: 100%;
	font-size: 15px;
	color: white;
	padding: 18px;
	background: #0028ff;
	font-weight: Bold;
	font-weight: 500;
	letter-spacing: 1px;
`;
export const ChatContent = styled.div`
	margin: 1rem 0;
`;
export const Message = styled.div`
	&.friend {
		display: flex;

		justify-content: flex-end;
		margin-right: 25px;
	}
	&.sender {
		margin-left: 25px;
	}
	span {
		background: blue;
		display: inline-block;
		padding: 8px;
		color: white;
		border-radius: 6px;

		max-width: 60%;
	}
`;
