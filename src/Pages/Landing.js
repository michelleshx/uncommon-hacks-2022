import { useEffect, useRef } from "react";
import "../Styles/Landing.css";
import logo from "../logo.svg";

import LoginButton from "../Components/LoginButton";

function Landing() {
  return (
    <div className="Landing">
      <div className="box">
        <img src={logo} />
        <p className="subtitle">yet another social media app</p>
      </div>
      <div className="box">
        <LoginButton />
      </div>
    </div>
  );
}

export default Landing;
