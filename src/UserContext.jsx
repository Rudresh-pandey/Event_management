import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  const [eventCreated, setEventCreated] = useState(null);
  useEffect(() => {
    // window.location.reload();
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
        setReady(true);
      });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, ready, eventCreated, setEventCreated }}
    >
      {children}
    </UserContext.Provider>
  );
}
