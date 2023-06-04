import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <>
      <div className="navbar">
        <div className="left">
          <img id="logo" src="logo1.jpg" alt="" />
          <Link className="link" to={"/sports"}>
            sports
          </Link>
          <Link className="link" to={"/concert"}>
            concert
          </Link>
          <Link className="link" to={"/virtual"}>
            virtual
          </Link>
          <Link className="link" to={"/community"}>
            community
          </Link>
          <Link className="link" to={"/conference"}>
            conference
          </Link>
        </div>
        <div className="right">
          <Link id="createEV" to={"/create"}>
            Create an Event
          </Link>

          <img id="notify" src="bellicon.png" alt="" />

          <Link to={"/user/:id"}>
            <img id="userimg" src="user4.png" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
