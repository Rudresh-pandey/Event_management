import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";
import Header from "../component/Header";

function AccoutPage() {
  const { ready, user } = useContext(UserContext);

  if (!ready) {
    return "loading...";
  }
  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div>
      <Header />
      <p>account page {user.name}</p>
    </div>
  );
}

export default AccoutPage;
