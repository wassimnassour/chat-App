import styled from "styled-components";

export const ChatViewContainer = styled.div`
	width: 100%;

	height: 100%;
`;
export const ToolBar = styled.div`
	width: 100%;
	font-size: 15px;
	color: white;
	/*	padding: 18px;
*/
	background: #0028ff;
	font-weight: Bold;
	font-weight: 500;
	letter-spacing: 1px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const ChatContent = styled.div`
	margin: 1rem 0;
	overflow-y: scroll;
	height: 73%;
	overflow-x: hidden;
`;
export const Message = styled.div`
	&.friend {
		display: flex;

		justify-content: flex-end;
		margin: 6px 0;
		margin-right: 35px;
	}
	&.sender {
		margin: 6px 0;
		margin-left: 35px;
	}
	span {
		background: #3d5bf9;
		display: inline-block;
		padding: 8px;
		color: white;
		border-radius: 6px;

		max-width: 50%;
	}
`;
