import styled from "styled-components";

export const Container = styled.main`
	width: 55%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	h2 {
		text-align: center;
	}
	form {
		display: flex;
		flex-direction: column;
		width: 71%;
		margin: 0 auto;
		margin-top: 9px;
		label {
			margin: 4px 0 7px;
		}
		input {
			margin: 4px 0 7px;
			height: 31px;
			outline: none;
			padding: 4px;
		}
		textarea {
			resize: none;
			min-height: 106px;
			overflow: auto;
			padding: 6px;
			outline: none;
		}
	}
`;

export const ButtonSubmit = styled.button`
	background: #0f4c75;
	border: none;
	color: white;
	font-weight: Bold;
	width: 100%;
	letter-spacing: 1px;
	display: flex;
	height: 50px;
	justify-content: center;
	align-items: center;
	border-radius: 6px;
	font-size: 17px;
	margin-top: 15px;
`;
