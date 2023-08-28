import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import "./eventscreated.css";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

function EventsCreated() {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [eventMode, setEventMode] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState("");
  const [requirements, setrequirements] = useState("");
  const [addedGuests, setAddedGuests] = useState([]);
  const [guestName, setGuestName] = useState("");
  const [guestPos, setGuestPos] = useState("");
  const [redirect, setRedirect] = useState("");
  const currGuests = {};
  const { eventCreated, setEventCreated } = useContext(UserContext);
  const [events, setEvents] = useState([]);

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

  function addMoreGuests(e) {
    e.preventDefault();
    if (guestName && guestPos) {
      currGuests.name = guestName;
      currGuests.pos = guestPos;
      setAddedGuests([...addedGuests, currGuests]);
    } else {
      alert("you need to fill details before adding more guests");
    }
    setGuestName("");
    setGuestPos("");
  }

  async function addNewEvent(e) {
    e.preventDefault();

    await axios
      .post("/add-new-event", {
        title,
        organizer,
        location,
        description,
        type,
        eventMode,
        requirements,
        startDate,
        endDate,
        price,
      })
      .then(({ data }) => {
        setEventCreated(data);
        // console.log(eventCreated);
      });
    setRedirect("/account/createdevs");
  }

  useEffect(() => {
    axios.get("/eventscreated").then(({ data }) => {
      setEvents(data);
    });
  }, []);

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="eventpage">
      {action !== "new" && (
        <>
          <div className="createbtn">
            <Link to={"/account/createdevs/new"}>
              <i className="fa fa-plus"></i>
              Create Event
            </Link>
          </div>
          {eventCreated && (
            <div>
              <p>{eventCreated.title}</p>
            </div>
          )}
          <div className="events">
            {events.length > 0 &&
              events.map((event, index) => {
                const color = colors[Math.floor(Math.random() * 10)];
                return (
                  <div
                    key={index}
                    className="event"
                    style={{ backgroundColor: color }}
                    onClick={() => navigate(`/events/${event._id}`)}
                  >
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
                          {event.description.length > 150
                            ? event.description.substring(0, 150) + "..."
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
              })}
          </div>
        </>
      )}
      {action === "new" && (
        <div className="eventform">
          <form action="" className="event-form" onSubmit={addNewEvent}>
            <h2>Title</h2>
            <input
              required
              type="text"
              placeholder="Event Name, Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <h2>Organizer Name</h2>
            <input
              required
              type="text"
              placeholder="Organizer / company name"
              value={organizer}
              onChange={(e) => setOrganizer(e.target.value)}
            />

            <h2>Event type</h2>
            <input
              required
              type="text"
              name="eventoptions"
              list="datalist-events"
              placeholder="event type like:"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <datalist id="datalist-events">
              <select name="eventoptions" id="">
                <option value="Sports" />
                <option value="Community" />
                <option value="Conference" />
                <option value="Virtual" />
                <option value="Concert" />
              </select>
            </datalist>
            <h2>Description</h2>
            <textarea
              required
              name=""
              id=""
              cols="30"
              rows="10"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <h2>Event mode</h2>
            <div className="modeselection">
              <div>
                <input
                  type="radio"
                  name="mode"
                  value="offline"
                  onChange={(e) => setEventMode(e.target.value)}
                />
                <label htmlFor="offline">Offline</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="mode"
                  value="online"
                  onChange={(e) => setEventMode(e.target.value)}
                />
                <label htmlFor="online">Online</label>
              </div>
            </div>
            <h2>requirements</h2>
            <textarea
              required
              name=""
              id="requirementss"
              cols="30"
              rows="10"
              value={requirements}
              onChange={(e) => setrequirements(e.target.value)}
            ></textarea>
            <h2>location</h2>
            <input
              required
              type="text"
              placeholder="address/ location/ url link for the event"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <div className="date">
              <div>
                <h3>Start Date</h3>
                <input
                  required
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div>
                <h3>End Date</h3>
                <input
                  required
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <div>
                <h3>Price</h3>
                <input
                  required
                  type="number"
                  list="pricelist"
                  autoComplete="off"
                  name="pricetype"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <datalist id="pricelist">
                  <select name="pricetype" id="">
                    <option value={0}></option>
                  </select>
                </datalist>
              </div>
            </div>

            <div>
              <h2>Guests</h2>
              <div className="guestdetail">
                <input
                  type="text"
                  placeholder="guest name"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="position"
                  value={guestPos}
                  onChange={(e) => setGuestPos(e.target.value)}
                />
                <button className="addmoreguests" onClick={addMoreGuests}>
                  <i className="fa fa-plus"></i>
                  <span>Add more Guests</span>
                </button>
              </div>
            </div>
            <button id="savebtn">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default EventsCreated;
