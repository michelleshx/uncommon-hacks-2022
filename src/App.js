import "./App.css";
import { useEffect, useRef } from "react";

import ScrollArt from "./Components/ScrollArt";
import Post from "./Pages/Post";
// import p5 from "p5";

// function sketch(p) {
//   p.setup = function () {
//     p.createCanvas(400, 400);
//     p.background(0);
//     p.circle(200, 200, 400);
//   };

//   p.draw = function () {

//   };
// }

function App() {
  // const p5ContainerRef = useRef();

  // useEffect(() => {
  //   // On component creation, instantiate a p5 object with the sketch and container reference
  //   const p5Instance = new p5(sketch, p5ContainerRef.current);

  //   // On component destruction, delete the p5 instance
  //   return () => {
  //     p5Instance.remove();
  //   };
  // }, []);

  return (
    <div className="App">
      <Post />
      {/* <ScrollArt />
      <ScrollArt /> */}
      {/* <ScrollArt /> */}
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
