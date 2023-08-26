import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import "./layout.css";
import SearchBar from "./SearchBar";
import EventCard from "./EventCard";

function Layout({ img }) {
  return (
    <>
      <div>
        <Header />
        <div className="hero">
          <div className="intro">
            <div className="int">
              <div className="int1">
                <p className="preheading">100+ EVENTS ORGANISED 🔥</p>
                <p className="heading">The Gateways for Events</p>
                <p className="subheading">
                  &quot;Bringing Together the Finest Minds and Moments in
                  Events&quot;
                </p>
                <h3 className="cpj">
                  create, promote, and join a wide range of events
                </h3>
              </div>
              <div className="int2">
                <div>
                  <Link to={"/account/createdevs"} className="evbtn c">
                    Create Events
                    <span className="fa fa-file-text-o"></span>
                  </Link>
                  <Link to={"/events"} className="evbtn b">
                    Browse Events
                    <span className="fa fa-external-link"></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="intro-img">
              <img src={img} alt="" className="eventimg" />
            </div>
          </div>
          <SearchBar />
          <div className="Events">
            <h3 style={{ marginTop: "2rem" }}>Event Recommendation</h3>
            <div className="bottom">
              <EventCard />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

Layout.propTypes = {
  img: PropTypes.string,
};

export default Layout;
