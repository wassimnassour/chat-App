import React, { useState } from "react";
import {
  SignUpContainer,
  SignUpWrapper,
  InputContainer,
} from "../signup/signUp.style";
import { auth } from "../../firebase/firebase";
import { Link } from "react-router-dom";

const SignIn = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (email.length > 0 && password.length > 0) {
      console.log(email, password);
      auth
        .signInWithEmailAndPassword(email, password)
        .then(() => history.push("/dashboard"))
        .catch((err) => setError(err.message));
    } else {
      setError("something went wrong ");
    }
  };
  return (
    <SignUpContainer>
      <SignUpWrapper>
        <h1>Sign In</h1>
        <form>
          {error ? (
            <div>
              <span className="danger">{error}</span>
            </div>
          ) : null}
          <InputContainer>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputContainer>
        </form>
        <button type="submit" onClick={() => submit()}>
          Sign In
        </button>
        <span>
          if you have don't have account <Link to="/signup">Sign Up</Link>
        </span>
      </SignUpWrapper>
    </SignUpContainer>
  );
};

export default SignIn;
