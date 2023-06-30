import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";

function Header() {
  const [hamMenu, setHamMenu] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const { user, setUser, setQuery } = useContext(UserContext);
  const navigate = useNavigate();
  async function logoutUser() {
    try {
      await axios.post("/logout");
      navigate("/");
      setUser(null);
      // <Navigate to={"/"} />;
      // window.location.reload();
    } catch (err) {
      alert("something not working , try later");
    }
  }
  function openmenu() {
    setHamMenu(!hamMenu);
  }

  function searchEvent() {
    // console.log(searchInput);
    setQuery([searchInput]);
  }

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to={"/"}>Event Cafe</Link>
        </div>

        {user ? (
          <div className="urls">
            <div className="hidemenu">
              <Link className="link" to={"/"}>
                Home
              </Link>
              <Link className="link" to={"/events"}>
                Events
              </Link>
            </div>
            <div className={hamMenu ? "user-links open" : "user-links"}>
              <Link className="link" to={"/"}>
                Home
              </Link>
              <Link className="link" to={"/events"}>
                Events
              </Link>

              <div className={hamMenu ? "nothidelink" : "hidelink"}>
                <Link to={"/account"}>Portfolio</Link>
                <Link to={"/account/events"}>Events joined</Link>
                <Link to={"/account/createdevs"}>Events Created</Link>
                <Link onClick={logoutUser}>Log out</Link>
              </div>
            </div>

            <div className="searching">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button onClick={searchEvent}>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        ) : (
          <div className="urls">
            <div className={hamMenu ? "url-links open" : "url-links"}>
              <Link className="link" to={"/"}>
                Home
              </Link>
              <Link className="link" to={"/events"}>
                Events
              </Link>
              <div id="log-reg">
                <Link to={"/login"}>Log in</Link>
                <Link to={"/registration"}>Register</Link>
              </div>
            </div>
            <div className="searching">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
              />
              <button onClick={searchEvent}>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        )}

        <div>
          {/* <Link id="createEV" to={"/create"}>
            Create an Event
          </Link> */}
          {user ? (
            <div>
              <div className="dropdown">
                {/* <i className="fa fa-bell fa-lg"></i> */}
                <Link className="dropbtn" to={"/account"}>
                  <i className="fa fa-user fa-2x"></i>
                </Link>
                <div
                  className={hamMenu ? "fa fa-close" : "fa fa-bars"}
                  id="user-icon"
                  onClick={openmenu}
                ></div>
              </div>
            </div>
          ) : (
            <div className="right">
              <div id="logreg">
                <Link to={"/login"}>Log in</Link>
                <Link to={"/registration"}>Register</Link>
              </div>
              <div
                className={hamMenu ? "fa fa-close" : "fa fa-bars"}
                id="menu-icon"
                onClick={openmenu}
              ></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
