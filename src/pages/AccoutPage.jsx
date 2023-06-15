import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router-dom";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import "./account.css";

function AccoutPage() {
  const { ready, user } = useContext(UserContext);
  let { subpage } = useParams();

  if (subpage === undefined) {
    subpage = "profile";
  }

  if (!ready) {
    return "loading...";
  }
  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }

  function linkClass(type = null) {
    let classes = "py-2 px-6";
    if (type === subpage) {
      classes += "  bg-orange-400 text-red-950 font-bold rounded-full";
    }
    return classes;
  }

  return (
    <>
      <Header />
      <div className="accountPage">
        <nav className="w-full flex justify-center mt-8 gap-8">
          <Link className={linkClass("profile")} to={"/account"}>
            Portfolio
          </Link>
          <Link className={linkClass("events")} to={"/account/events"}>
            Events Joined
          </Link>
          <Link className={linkClass("createdevs")} to={"/account/createdevs"}>
            Events Created
          </Link>
        </nav>
        {subpage === "profile" && (
          <div className="profile">
            <i className="fa fa-user-circle-o text-9xl"></i>
          </div>
        )}
      </div>
    </>
  );
}

export default AccoutPage;
