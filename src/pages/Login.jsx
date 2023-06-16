import { useContext, useState } from "react";
import "./register.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  async function loginUser(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      setUser(data);
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
    <div className="formpage">
      <h2 className="">Login</h2>
      <form action="" className="form" onSubmit={loginUser}>
        <input
          type="email"
          placeholder="youremail@gmail.com"
          className=""
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
