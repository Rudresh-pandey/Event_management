import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "./eventDetail.css";
import { UserContext } from "../UserContext";

function EventDetail() {
  const [event, setEvent] = useState();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const params = useParams();

  async function registerIntoEvent() {
    if (confirm(`confirm your registration to : ${event.title} ?`)) {
      if (!user) {
        return navigate("/login");
      }
      await axios.post("/joinEvent", {
        event: event._id,
      });
      alert(
        `REGISTERED into ${event.title} , event will start from ${event.startDate}`
      );
    }
  }

  useEffect(() => {
    axios.get(`/events/${params.eventid}`).then(({ data }) => {
      // console.log(params.eventid);
      setEvent(data);
      // console.log(data);
      // console.log(event);
    });
  }, []);

  return (
    <div>
      <Header />
      <div style={{ padding: "50px 8%", alignItems: "flex-start" }}>
        {event && (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div
              className="eventinfo"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <h1
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontFamily: "Poppins,sans-serif",
                  }}
                >
                  {event.title}
                </h1>
                <p>{event.location}</p>
                <button
                  className="registernow-btn"
                  style={{
                    padding: "10px 15px",
                    width: "max-content",
                    marginTop: "2rem",
                    color: "white",
                    border: "none",
                    fontWeight: "bold",
                  }}
                  onClick={registerIntoEvent}
                >
                  Register now
                </button>
                <p style={{ marginTop: "20px" }}>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>
                    Event Starts on :
                  </span>{" "}
                  {event.startDate}
                </p>
              </div>
              <div
                style={{
                  padding: "15px 15px",
                  height: "15rem",
                  width: "20rem",
                  background: "black",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid white",
                    paddingBottom: "15px",
                  }}
                >
                  <p>
                    <span style={{ fontWeight: "bold" }}> End Date :</span>{" "}
                    {event.endDate}
                  </p>
                  <i
                    className="fa fa-calendar-check-o"
                    style={{ fontSize: "18px", cursor: "pointer" }}
                  ></i>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 0",
                  }}
                >
                  <p>{event.mode}</p>
                  <p> {event.price === 0 ? `FREE` : `₹ ${event.price}`}</p>
                </div>
                <p>Participants : {event.participants}</p>
                <h3>
                  {" "}
                  <small>by-</small> {event.organizer}
                </h3>
              </div>
            </div>

            <p>DESCRIPTION</p>
            <h3>
              {event.description} <br />{" "}
              <span style={{ fontSize: "medium", fontWeight: "normal" }}>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, tempora veritatis debitis laborum, labore
                voluptas iusto eos repudiandae odio sunt earum voluptates eum
                quis eligendi temporibus dolor, sequi adipisci corporis.
              </span>
            </h3>
            <h3>REQUIREMENTS :</h3>

            <p style={{ fontWeight: "bold" }}>{event.requirements}</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default EventDetail;
