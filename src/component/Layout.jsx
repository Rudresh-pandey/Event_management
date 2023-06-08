import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import "./layout.css";

function Layout({ img }) {
  return (
    <>
      <div>
        <Header />
        <div className="hero">
          <div className="intro">
            <div className="int1">
              <h1 className="heading">The Gateways for Events</h1>
              <p className="subheading">
                &quot;Bringing Together the Finest Minds and Moments in
                Events&quot;
              </p>
            </div>
            <div className="int2">
              <div className="quote">
                <h3>create, promote, and join a wide range of events</h3>
                <Link to={"/events"}>Browse Events</Link>
              </div>
              <div className="int-img">
                <img src={img} alt="" />
              </div>
            </div>
          </div>
          <div className="search">
            <div className="searchbar">
              <span>
                <img src="search.png" alt="" />
              </span>
              <input type="search" />
            </div>
            <button className="btn-search">Search Events</button>
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
