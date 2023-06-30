import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EventsJoined() {
  const [joinedEvents, setJoinedEvents] = useState([]);
  const navigate = useNavigate();
  const colors = [
    "#408ABF",
    "#5140BF",
    "#BF7540",
    "#40BF82",
    "#4045BF",
    "#9640BF",
    "#BF407D",
    "#BF4040",
    "#40B8BF",
    "#FFD159",
  ];
  useEffect(() => {
    // const loadData = async () => {
    //   const { data } = await axios.get("/eventsjoined");
    //   console.log(data);
    //   setJoinedEvents(data);
    // };
    // loadData();
    axios.get("/eventsjoined").then((response) => {
      setJoinedEvents(response.data);
    });
  }, []);

  //   console.log(joinedEvents);

  return (
    <div className="events" style={{ minHeight: "100vh" }}>
      {joinedEvents?.length > 0 &&
        joinedEvents.map((event, index) => {
          const color = colors[Math.floor(Math.random() * 10)];
          return (
            <div
              key={index}
              className="event"
              style={{ backgroundColor: color }}
              onClick={() => navigate(`/events/${event._id}`)}
            >
              {/* <EventCard event={event} /> */}
              <div
                style={{
                  display: "flex",
                  flex: 3,
                  padding: "10px 10px",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <h3>{event.title}</h3>
                <i
                  style={{
                    color: "white",
                    fontSize: "18px",
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                  }}
                  className="fa fa-external-link"
                ></i>
                <i
                  className="fa fa-calendar-check-o"
                  style={{
                    padding: "8px 8px",
                    background: "black",
                    color: "white",
                    borderRadius: "5px",
                    fontSize: "18px",
                    position: "absolute",
                    right: "10px",
                    bottom: "-15px",
                  }}
                ></i>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 7,
                  backgroundColor: "white",
                  borderBottom: "1px solid black",
                  borderRight: "1px solid black",
                  borderLeft: "1px solid black",
                  padding: "10px 10px",
                  gap: "1rem",
                }}
              >
                <div>{event.startDate}</div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    style={{
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    {event.title}
                  </p>
                  <p
                    style={{
                      fontSize: "1.1em",
                      fontWeight: "bold",
                    }}
                  >
                    {event.price === 0 ? `FREE` : `₹${event.price}`}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "small",
                    }}
                  >
                    DESCRIPTION
                  </p>
                  <p style={{ fontWeight: "bold" }}>
                    {event.description > 10
                      ? event.description.substring(0, 10) + "..."
                      : event.description}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flex: 2,
                  background: "black",
                  color: "white",
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                View Details
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default EventsJoined;
