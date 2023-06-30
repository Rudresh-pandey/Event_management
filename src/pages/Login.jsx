import { useContext, useState } from "react";
import "./register.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

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
      <div className="page">
        <div className="logo">
          <Link to={"/"}>Event Cafe</Link>
        </div>
        <form action="" className="form" onSubmit={loginUser}>
          <h1>Welcome back !</h1>

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
          <p className="already">
            don&apos;t have an account?{" "}
            <Link to={"/registration"}>Create account</Link>{" "}
          </p>
        </form>
      </div>
      <div className="side">
        <div>
          <h1>Welcome Back , Login to Proceed your work</h1>
        </div>
        <img src="BackGround.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
