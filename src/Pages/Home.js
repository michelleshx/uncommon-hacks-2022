import { useEffect, useRef } from "react";
import "../Styles/Home.css";
import LogoutButton from "../Components/LogoutButton";
import Profile from "../Components/Profile";
import Feed from "../Components/Feed";

function Home() {
  return (
    <div className="Home">
      <div className="nav">
        <Profile />
        <LogoutButton />
      </div>
      <Feed />
    </div>
  );
}

export default Home;
