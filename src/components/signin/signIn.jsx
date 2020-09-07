import React from "react";
import {
  SignUpContainer,
  SignUpWrapper,
  InputContainer,
} from "../signup/signUp.style";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <SignUpContainer>
      <SignUpWrapper>
        <h1>Sign In</h1>
        <form>
          <InputContainer>
            <label>Email:</label>
            <input type="email" />
          </InputContainer>
          <InputContainer>
            <label>Password:</label>
            <input type="email" />
          </InputContainer>
        </form>
        <button type="submit">Sign In</button>
        <span>
          if you have don't have account <Link to="/signup">Sign Up</Link>
        </span>
      </SignUpWrapper>
    </SignUpContainer>
  );
};

export default SignIn;
