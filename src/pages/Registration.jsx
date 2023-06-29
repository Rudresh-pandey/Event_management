import { useState } from "react";
import "./register.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(e) {
    e.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert("sign up successfully , now Login");
    } catch (err) {
      alert("error while sign up , email already in use OR try later");
    }
  }

  return (
    <div className="formpage">
      <div className="page">
        <div className="logo">
          <Link to={"/"}>Event Cafe</Link>
        </div>
        <form action="" className="form" onSubmit={registerUser}>
          <h1>Create an account</h1>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
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

          <button type="submit">Create account</button>
          <p className="already">
            Already have an account? <Link to={"/login"}>Login</Link>{" "}
          </p>
        </form>
      </div>
      <div className="side">
        <div>
          <h1>Create Your account inorder to access the events</h1>
        </div>
        <img src="BackGround.png" alt="" />
      </div>
    </div>
  );
}

export default Registration;
