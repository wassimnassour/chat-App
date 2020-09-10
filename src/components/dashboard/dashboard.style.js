import styled from "styled-components";

export const DashBoardContainer = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: #eeeeeea6;
	.messages-container {
		width: 70%;
		position: relative;
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
`;
