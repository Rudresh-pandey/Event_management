import { Link } from "react-router-dom";
import "./header.css";
import { useContext } from "react";
import { UserContext } from "../UserContext";

function Header() {
  const { user } = useContext(UserContext);
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
              <img id="notify" src="bellicon.png" alt="" />

              <Link to={"/account"} id="user">
                <img id="userimg" src="user4.png" alt="" />
                <p>{user.name}</p>
              </Link>
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
