import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "../../styles/Login.module.css";
import Button from "../Button";
import { useAuth } from "../contexts/AuthContext";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();
  const history = useNavigate();

  async function handlesubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      history("/");
    } catch (err) {
      setError(err.code);
    }

    setLoading(false);
  }
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <Form className={classes.login} onSubmit={handlesubmit}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextInput
            type="password"
            placeholder="Enter password"
            icon="lock"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button type="submit" disabled={loading}>
            <span>Log in</span>
          </Button>

          {error && <p className="error">{error}</p>}
          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}

export default Login;
