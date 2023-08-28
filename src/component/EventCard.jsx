import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

function EventCard() {
  const navigate = useNavigate();

  const { events, query, filterItem } = useContext(UserContext);

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
    "#4036BF",
  ];
  return (
    <>
      <div className="events">
        {events.length > 0 && query ? (
          // query[0](
          events
            .filter((event) => {
              // console.log(query[0], query[1]);

              if (
                (query[0] === undefined &&
                  query[1] === undefined &&
                  query[2] === undefined &&
                  query[3] === undefined) ||
                (query[0] === "" &&
                  query[1] === "" &&
                  query[2] === "" &&
                  query[3] === "")
              ) {
                return event;
              }
              // filter results
              else if (filterItem === "all") {
                return event;
              } else if (event.price === 0 && filterItem === "free") {
                return event;
              } else if (event.type.toLowerCase() === filterItem) {
                return event;
              }
              // search results
              else if (event.title.toLowerCase() === query[0]) {
                return event;
              } else if (event.location.toLowerCase() === query[1]) {
                return event;
              } else if (event.startDate == query[2]) {
                return event;
              }
            })
            .map((event, index) => {
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
                        {event.description.length > 130
                          ? event.description.substring(0, 130) + " ..."
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
                    <Link>REGISTER INTO EVENT</Link>
                  </div>
                </div>
              );
            })
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default EventCard;
