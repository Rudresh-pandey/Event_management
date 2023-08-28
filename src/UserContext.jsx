import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  const [eventCreated, setEventCreated] = useState(null);
  const [events, setEvents] = useState([]);
  const [query, setQuery] = useState([]);
  const [filterItem, setFilterItem] = useState("");
  useEffect(() => {
    // window.location.reload();
    const fetchData = async () => {
      if (!user) {
        await axios.get("/profile").then(({ data }) => {
          setUser(data);
          setReady(true);
        });
      }
      await axios.get("/events").then(({ data }) => {
        setEvents(data);
      });
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        ready,
        eventCreated,
        setEventCreated,
        events,
        query,
        setQuery,
        filterItem,
        setFilterItem,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
