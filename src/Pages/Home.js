import { useEffect, useRef } from "react";
import "../Styles/Home.css";
import LogoutButton from "../Components/LogoutButton";
import Profile from "../Components/Profile";
import Feed from "../Components/Feed";
import logo from "../logo.svg";

function Home() {
  return (
    <div className="Home">
      <div className="nav">
        <img className="home-logo" src={logo} />
        <div className="profile">
          <Profile />
          <LogoutButton />
        </div>
      </div>
      <Feed />
    </div>
  );
}

export default Home;
