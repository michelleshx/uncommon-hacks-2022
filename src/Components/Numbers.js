import { useEffect, useRef } from "react";
import p5 from "p5";

function sketch(p) {
  p.setup = function () {
    p.createCanvas(500, 150);
    p.frameRate(20);
  };

  p.draw = function () {
    p.background(0);
    p.fill(255);
    p.textSize(24);
    p.text(p.int(p.random(500000)), 100, 100);
  };
}

function Numbers() {
  const p5ContainerRef = useRef();

  useEffect(() => {
    const p5Instance = new p5(sketch, p5ContainerRef.current);
    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div className="Numbers" ref={p5ContainerRef} />;
}

export default Numbers;
