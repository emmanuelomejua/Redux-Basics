import Warning from "../warning/Warning";
import "./update.css";
import img from '../../assets/images.jpg'
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Update() {
  const user = useSelector((state=>state.user))
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete">Delete Account</button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src={img}
                  alt="Avater"
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={user.name}
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder="john@gmail.com"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button
              className="updateButton"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
