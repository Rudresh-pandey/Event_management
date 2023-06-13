import { useState } from "react";
import "./register.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function loginUser(e) {
    e.preventDefault();
    try {
      await axios.post("/login", {
        email,
        password,
      });
      alert("login successful");
      setRedirect(true);
    } catch (err) {
      alert("something not working , try later");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="container">
      <h2>Login</h2>
      <form action="" className="form" onSubmit={loginUser}>
        <input
          type="email"
          placeholder="youremail@gmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
