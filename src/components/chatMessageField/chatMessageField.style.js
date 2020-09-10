import styled from "styled-components";

export const MessageFieldContainer = styled.div`
	position: absolute;
	bottom: 0;
	width: 80%;
	display: flex;
	transform: translateX(-50%);
	left: 50%;

	border-radius: 20px;
	border: 1px solid #0028ffc4;
	margin-bottom: 6px;
	align-items: center;
	padding: 1px;

	input {
		flex-basis: 95%;
		height: 45px;
		border-radius: 20px;
		padding: 0 1rem;
		border: none;
	}
	button {
		flex-basis: 5%;
		border-radius: 20px;
		padding: 0 1rem;
		border: none;

		font-size: 22px;
		background: transparent;
		color: #0028ff;
	}
`;
