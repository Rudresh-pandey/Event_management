import { useState } from "react";
import "./register.css";
import axios from "axios";

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
    <div className="container">
      <h2>Sign up</h2>
      <form action="" className="form" onSubmit={registerUser}>
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

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Registration;
