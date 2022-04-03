import { useEffect, useRef } from "react";
import ScrollArt from "../Components/ScrollArt";
import Like from "../Components/Likes";

function Post() {
  return (
    <div className="Post">
      {/* <ScrollArt /> */}
      <Like />
      {/* <ScrollArt /> */}
    </div>
  );
}

export default Post;
