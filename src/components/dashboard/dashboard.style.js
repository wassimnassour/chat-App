import styled from "styled-components";

export const DashBoardContainer = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: #eeeeeea6;
`;

export const ChatContainer = styled.div`
	width: 70%;
	position: relative;

	@media (min-width: 650px) and (max-width: 800px) {
		width: 64%;
	}
	@media (min-width: 500px) and (max-width: 650px) {
		width: 60%;
	}
	@media (max-width: 500px) {
		${({ selectedChatIndex }) =>
			selectedChatIndex !== null
				? { width: "100%" }
				: { display: "none" }};
	}
`;

export const DashBoardWrapper = styled.div`
	background: #fff;
	width: 78%;
	height: 78%;
	border-radius: 16px;
	max-width: 1100px;
	box-shadow: 0 0 15px 1px #6464646e;
	display: flex;
	overflow: hidden;
	position: relative;

	@media (max-width: 1000px) {
		width: 90%;
	}
	@media (max-width: 700px) {
		width: 95%;
		border-radius: 8px;
	}
	@media (max-width: 550px) {
		width: 100%;
		margin: 6px;
		border-radius: 0;
	} ;
`;
