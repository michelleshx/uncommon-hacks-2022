import "../Styles/Feed.css";
import ScrollArt from "./ScrollArt";

function Feed() {
  const renderFeed = () => {
    return [...Array(5)].map((i) => (
      <div className="post">
        <ScrollArt key={i} />{" "}
      </div>
    ));
  };

  return <div className="Feed">{renderFeed()}</div>;
}

export default Feed;
