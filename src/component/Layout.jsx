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
            <div className="int">
              <div className="int1">
                <p className="preheading">100+ EVENTS ORGANISED</p>
                <p className="heading">The Gateways for Events</p>
                <p className="subheading">
                  &quot;Bringing Together the Finest Minds and Moments in
                  Events&quot;
                </p>
                <h3>create, promote, and join a wide range of events</h3>
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
            <div>
              <img src={img} alt="" className="eventimg" />
            </div>
          </div>
          <div className="search">
            <div className="searchInputs">
              <input
                type="text"
                placeholder=" &nbsp;🔍 &nbsp;Events, Organiser, Keyword"
              />

              <input type="text" placeholder=" &nbsp;🎯 &nbsp;Anywhere" />
              <input type="text" placeholder=" &nbsp;📅 &nbsp;Anytime" />
              <button>Search</button>
            </div>
            <div className="recommendbtn">
              <button>Today</button>
              <button>Tomorrow</button>
              <button>This week</button>
              <button>Sports</button>
              <button>Community</button>
            </div>
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
