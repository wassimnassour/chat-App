import React from "react";
import { Link } from "react-router-dom";
import { SignUpContainer, SignUpWrapper, InputContainer } from "./signUp.style";
const SignUp = () => {
  return (
    <SignUpContainer>
      <SignUpWrapper>
        <h1>Sign Up</h1>
        <form>
          <InputContainer>
            <label>FullName:</label>
            <input type="email" />
          </InputContainer>
          <InputContainer>
            <label>Email:</label>
            <input type="email" />
          </InputContainer>
          <InputContainer>
            <label>Password:</label>
            <input type="email" />
          </InputContainer>
        </form>
        <button type="submit">Sign Up</button>
        <span>
          if you have account <Link to="/signin">SignIn</Link>
        </span>
      </SignUpWrapper>
    </SignUpContainer>
  );
};

export default SignUp;
