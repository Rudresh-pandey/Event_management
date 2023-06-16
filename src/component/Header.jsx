import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";

function Header() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  async function logoutUser() {
    try {
      await axios.post("/logout");
      setUser(null);
      navigate("/");
      // <Navigate to={"/"} />;
      // window.location.reload();
    } catch (err) {
      alert("something not working , try later");
    }
  }

  return (
    <>
      <div className="navbar">
        <div className="left">
          <Link to={"/"}>
            <img id="logo" src="logo1.jpg" alt="" />
          </Link>
          <Link className="link" to={"/sports"}>
            Sports
          </Link>
          <Link className="link" to={"/concert"}>
            Concert
          </Link>
          <Link className="link" to={"/virtual"}>
            Virtual
          </Link>
          <Link className="link" to={"/community"}>
            Community
          </Link>
          <Link className="link" to={"/conference"}>
            Conference
          </Link>
        </div>
        <div className="right">
          <Link id="createEV" to={"/create"}>
            Create an Event
          </Link>
          {user ? (
            <>
              <i className="fa fa-bell fa-lg"></i>
              <div className="dropdown">
                <Link className="dropbtn" to={"/account"}>
                  <i className="fa fa-user fa-2x"></i>
                  <p>{user.name}</p>
                </Link>
                <div className="dropdown-content">
                  <Link to={"/account"}>Portfolio</Link>
                  <Link to={"/account/events"}>Events joined</Link>
                  <Link to={"/account/createdevs"}>Events Created</Link>
                  <Link onClick={logoutUser}>Log out</Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to={"/registration"}>sign up</Link>
              <Link to={"/login"}>login</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
