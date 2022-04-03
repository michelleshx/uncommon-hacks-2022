import { useEffect, useRef } from "react";
import "../Styles/Feed.css";
import ScrollArt from "./ScrollArt";
import Like from "./Likes";
import Numbers from "./Numbers";

function Feed() {
  const renderFeed = () => {
    return [...Array(5)].map((i) => <ScrollArt key={i} />);
  };

  return <div className="Feed">{renderFeed()}</div>;
}

export default Feed;
