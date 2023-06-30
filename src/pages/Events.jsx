import Header from "../component/Header";
import SearchBar from "../component/SearchBar";

import "../component/layout.css";

import EventCard from "../component/EventCard";
import Footer from "../component/Footer";

function Events() {
  return (
    <>
      <div>
        <Header />
        <div className="hero" style={{ minHeight: "100vh" }}>
          <SearchBar />
          <EventCard />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Events;
