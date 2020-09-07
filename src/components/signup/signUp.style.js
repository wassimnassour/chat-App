import styled from "styled-components";

export const SignUpContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
export const SignUpWrapper = styled.div`
  width: 350px;
  height: 400px;
  box-shadow: 0 0 2px 0 #6f6f6fcc;
  padding: 2rem;
  h1 {
    font-size: 24px;
    text-align: center;
  }
  form {
    margin: 44px 0 20px;
  }
  button {
    background: #041b46f0;
    border: none;
    width: 100%;
    margin: 0 auto;
    color: white;
    font-size: 20px;
    padding: ;
    padding: 10px;

    display: flex;
    justify-content: center;

    border-radius: 5px;
  }
  span {
    margin: 23px 0 10px;
    display: block;
    a {
      text-decoration: none;
      color: #122850;
      font-weight: bold;
    }
  }
`;
export const InputContainer = styled.div`
  margin: 12px 0;
  display: flex;
  flex-direction: column;
  label {
    margin: 7px 0 3px;
  }
`;
