import { useState } from "react";
import classes from "../../styles/SignUp.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import { useAuth } from "../contexts/AuthContext";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

import { Navigate, useNavigate } from "react-router-dom";
function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { signup } = useAuth();
  const history = useNavigate();

  async function handleSubmit() {
    //Does't work preventDefault()
    //event.preventDefault();
    //console.log(event);
    //console.log(username);
    //console.log(password);
    // console.log(password);
    // console.log(confirm_password);
    if (password !== confirm_password) {
      setError("Password does not match!");
    } else {
      try {
        setError("");
        setLoading(true);
        await signup(email, password, username);
        // history.push("/");
        history("/");
      } catch (err) {
        //console.log(err);
        switch (err.code) {
          case "auth/email-already-in-use":
            setError("Email already in use!");
            break;

          default:
            setError("Can not create account!");
        }
      }
    }
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    handleSubmit();
    setLoading(false);
  };
  const { currentUser } = useAuth();
  console.log(currentUser);
  //Loads two times. why? -----------------------------Problem?
  return !currentUser ? (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={classes.signup} onSubmit={handlesubmit}>
          <TextInput
            type="text"
            required
            placeholder="Enter Name"
            icon="person"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextInput
            type="mail"
            required
            placeholder="Enter Mail"
            icon="alternate_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            type="password"
            required
            placeholder="Enter Password"
            icon="lock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextInput
            type="password"
            required
            placeholder="Confirm password"
            icon="lock_clock"
            value={confirm_password}
            onChange={(e) => setConfirm_password(e.target.value)}
          />
          <Checkbox
            text="I agree to the terms and conditions"
            required
            value={agree}
            onChange={(e) => setAgree(e.target.value)}
          />
          <Button disabled={loading} type="submit">
            <span>Sign Up</span>
          </Button>
          {error && <p className="error">{error}</p>}
        </Form>
      </div>
    </>
  ) : (
    <Navigate to="/" />
  );
}

export default SignUp;
