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
		}
	}
`;

export const ButtonSubmit = styled.button`
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
	margin-top: 6px;
	border-radius: 6px;
	font-size: 17px;
`;
