import styled from "styled-components";

export const MessageFieldContainer = styled.div`
	position: absolute;
	bottom: 0;
	width: 85%;
	display: flex;
	transform: translateX(-50%);
	left: 50%;

	border-radius: 20px;
	border: 1px solid #0f4c75;
	margin-bottom: 6px;
	align-items: center;
	padding: 1px;
	justify-content: space-between;
	input {
		/*		flex-basis: 95%;
*/
		padding: 0 6px;
		height: 38px;
		border-radius: 20px;
		padding: 0 1rem;
		border: none;
		outline: none;
	}
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		/*		flex-basis: 5%;
/*
	border-radius: 20px;
*/
		/*		padding: 0 1rem;
*/
		border: none;

		font-size: 22px;
		background: transparent;
		color: #0f4c75;
		outline: none;
	}
	@media (max-width: 650px) {
		width: 91%;
	}
`;
