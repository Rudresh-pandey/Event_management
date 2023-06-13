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

          <div className="Events">
            <h3>Event Recommendation</h3>
            <div className="bottom">
              <div className="filter">
                <p>filers</p>
                <div className="loc">
                  <h4>Location</h4>
                  <label htmlFor="online">
                    <input type="checkbox" />
                    <span>Online</span>
                  </label>
                  <label htmlFor="offline">
                    <input type="checkbox" />
                    <span>Offline</span>
                  </label>
                </div>
                <div className="status">
                  <h4>Status</h4>
                  <label htmlFor="upcoming">
                    <input type="checkbox" />
                    <span>Upcoming</span>
                  </label>
                  <label htmlFor="open">
                    <input type="checkbox" />
                    <span>Open</span>
                  </label>
                  <label htmlFor="ended">
                    <input type="checkbox" />
                    <span>Ended</span>
                  </label>
                </div>
                <div className="price">
                  <h4>Price</h4>
                  <label htmlFor="paid">
                    <input type="checkbox" />
                    <span>Paid</span>
                  </label>
                  <label htmlFor="free">
                    <input type="checkbox" />
                    <span>Free</span>
                  </label>
                </div>
              </div>

              <div className="evInfo">
                <div className="ev"></div>
                <div className="ev"></div>
                <div className="ev"></div>
              </div>
            </div>
            <div className="EvArray"></div>
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
