import { useEffect, useRef } from "react";
import ScrollArt from "../Components/ScrollArt";
import Like from "../Components/Likes";
import LogoutButton from "../Components/LogoutButton";

function Feed() {
  return (
    <div className="Feed">
      {/* <ScrollArt /> */}
      <Like />
      {/* <ScrollArt /> */}
      <LogoutButton />
    </div>
  );
}

export default Feed;
