import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";

function EventDetail() {
  const [event, setEvent] = useState();
  const params = useParams();

  useEffect(() => {
    axios.get(`/events/${params.eventid}`).then(({ data }) => {
      // console.log(params.eventid);
      setEvent(data);
      // console.log(data);
      // console.log(event);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="hero">{event && <p>{event.title}</p>}</div>
    </>
  );
}

export default EventDetail;
