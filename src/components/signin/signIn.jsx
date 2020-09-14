import React, { useState, useEffect } from "react";
import { BoxLoading } from "react-loadingg";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(async (_usr) => {
      console.log(_usr);

      if (_usr) {
        history.push("/dashboard");
      } else {
        setLoading(false);
      }
    });
  }, [history]);

  const submit = () => {
    if (email.length > 0 && password.length > 0) {
      setLoading(true);

      auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          history.push("/dashboard");
        })
        .catch((err) => {
          setLoading(false);

          setError(err.message);
        });
    } else {
      setLoading(false);
      setError("something went wrong ");
    }
  };

  return (
    <SignUpContainer>
      {!loading ? (
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
      ) : (
        <BoxLoading CircleToBlockLoading color="#0028ff" />
      )}
    </SignUpContainer>
  );
};

export default SignIn;
