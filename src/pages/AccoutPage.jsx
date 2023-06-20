import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router-dom";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import "./account.css";
import axios from "axios";
import EventsCreated from "./EventsCreated";

function AccoutPage() {
  const [glink, setGlink] = useState("");
  const [tlink, setTlink] = useState("");
  const [wlink, setWlink] = useState("");
  const [llink, setLlink] = useState("");
  const [userpos, setUserPos] = useState("");
  const [disable, setDisable] = useState(true);
  const [hide, setHide] = useState(true);
  const { ready, user, setUser } = useContext(UserContext);
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

  function editInfo() {
    setGlink(user.github);
    setTlink(user.twitter);
    setWlink(user.website);
    setLlink(user.linkedin);
    setUserPos(user.position);
    setHide(false);
    setDisable(false);
  }

  async function saveInfo(e) {
    e.preventDefault();
    console.log(glink, tlink, wlink, llink);
    try {
      await axios
        .post("account/edit", {
          id: user._id,
          glink,
          tlink,
          wlink,
          llink,
          userpos,
        })
        .then(({ data }) => {
          setUser(data);
        });
      window.location.reload();
    } catch (err) {
      alert("error occoured");
    }
  }

  return (
    <>
      <Header />
      <div className="accountPage">
        {subpage === "profile" && (
          <div className="profile">
            <div className="bg"></div>

            <div className="user">
              <div className="userProfile">
                <div className="userImg">
                  <img src="man.png" alt="" />
                  <input type="file" />
                </div>
                {/* <i
                    className="fa fa-user-circle-o "
                    style={{ fontSize: "150px" }}
                  ></i> */}
                <div className="username">
                  <h1>Rudresh Pandey</h1>
                  <h3>{user.position || "Your Position"}</h3>
                </div>
                <div className="editInfo">
                  <button id="edit" onClick={editInfo}>
                    Edit
                  </button>
                  <button id="save" onClick={saveInfo} disabled={disable}>
                    Save
                  </button>
                </div>
              </div>
              <div className="userDetail">
                <div className="bio">
                  <h2>Personal info.</h2>
                  <div className="personalinfo">
                    <div className="person">
                      <div className="perInfo">
                        <label htmlFor="">
                          <small>First Name</small>
                          <p>Rudresh</p>
                        </label>
                        <label htmlFor="">
                          <small>Email address</small>
                          <p>rudreshpandey@gmail.com</p>{" "}
                        </label>
                      </div>
                      <div className="perInfo">
                        <label htmlFor="">
                          <small>Last Name</small> <p>Pandey</p>
                        </label>

                        <label htmlFor="">
                          <small>Phone</small>
                          <p>+91 89321911</p>
                        </label>
                      </div>
                    </div>
                    <label htmlFor="">
                      <small>Bio</small>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quia neque culpa sed ut molestias, praesentium
                        nobis nulla placeat, nesciunt, quisquam distinctio! Eos
                        officiis quia quaerat dicta nisi consectetur, veritatis
                        expedita minima placeat dolorum fuga quis et facere
                        quasi porro consequatur quam rerum a temporibus. Nostrum
                        hic dolorem alias error quaerat?
                      </p>
                    </label>
                  </div>
                </div>
                <div className="socials">
                  <h2>Social urls.</h2>
                  <div className="links">
                    <div className="link">
                      <label htmlFor="">
                        <small> Github </small> <br />
                        <div className="sociallink">
                          <label htmlFor="" hidden={hide}>
                            previous:
                          </label>
                          <input value={user.github} />
                        </div>
                        <div className="sociallink">
                          <label htmlFor="" hidden={hide}>
                            new :
                          </label>
                          <input
                            type="text"
                            value={glink}
                            hidden={hide}
                            onChange={(e) => {
                              setGlink(e.target.value);
                            }}
                          />
                        </div>
                      </label>
                      <label htmlFor="">
                        <small> LinkedIn</small>
                        <div className="sociallink">
                          <label htmlFor="" hidden={hide}>
                            previous:
                          </label>
                          <input value={user.linkedin} />
                        </div>
                        <div className="sociallink">
                          <label htmlFor="" hidden={hide}>
                            new :
                          </label>
                          <input
                            type="text"
                            value={llink}
                            hidden={hide}
                            onChange={(e) => {
                              setLlink(e.target.value);
                            }}
                          />
                        </div>
                      </label>
                    </div>
                    <div className="link">
                      <label htmlFor="">
                        <small> Twitter </small>
                        <br />
                        <div className="sociallink">
                          <label htmlFor="" hidden={hide}>
                            previous:
                          </label>
                          <input value={user.twitter} />
                        </div>
                        <div className="sociallink">
                          <label htmlFor="" hidden={hide}>
                            new :
                          </label>
                          <input
                            type="text"
                            value={tlink}
                            hidden={hide}
                            onChange={(e) => {
                              setTlink(e.target.value);
                            }}
                          />
                        </div>
                      </label>
                      <label htmlFor="">
                        <small> Website</small>
                        <br />
                        <div className="sociallink">
                          <label htmlFor="" hidden={hide}>
                            previous:
                          </label>
                          <input value={user.website} />
                        </div>
                        <div className="sociallink">
                          <label htmlFor="" hidden={hide}>
                            new :
                          </label>
                          <input
                            type="text"
                            value={wlink}
                            hidden={hide}
                            onChange={(e) => {
                              setWlink(e.target.value);
                            }}
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {subpage === "createdevs" && <EventsCreated />}
      </div>
    </>
  );
}

export default AccoutPage;
