import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="upper">
          <div className="display">
            <h1>Event Cafe</h1>
            <p>
              &quot;Bringing Together the Finest Minds and Moments in
              Events&quot;
            </p>
          </div>
          <div className="footerlinks">
            <div className="footerlink">
              <h3>Events</h3>
              <Link to={"/sports"}>Sports</Link>
              <Link to={"/community"}>Community</Link>
              <Link to={"/concert"}>Concerts</Link>
              <Link to={"/conference"}>Conference</Link>
            </div>
            <div className="footerlink">
              <h3>Account</h3>
              <Link to={"/login"}>Login</Link>
              <Link to={"/registration"}>Register</Link>
            </div>
            <div className="footerlink">
              <h3>User</h3>
              <Link to={"/account"}>Portfolio</Link>
              <Link to={"/account/createdevs"}>Events Created</Link>
              <Link to={"/account/events"}>Events Joined</Link>
            </div>
            <div className="footerlink">
              <h3>Contact</h3>
              <Link>eventcafedevs05@gmail.com</Link>
              <p>(+91) 8282428</p>
            </div>
          </div>
        </div>
        <div className="lower">
          <p>Event Cafe © 2023. All Rights Reserved</p>
          <div>
            <i className="fa fa-facebook-square"></i>
            <i className="fa fa-github-square"></i>
            <i className="fa fa-linkedin-square"></i>
            <i className="fa fa-twitter-square"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
