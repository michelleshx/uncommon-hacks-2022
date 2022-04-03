import { useEffect, useRef } from "react";
import p5 from "p5";

function sketch(p) {
  p.setup = function () {
    p.createCanvas(this.windowWidth, 800);
    p.stroke(255); // Set line drawing color to white
    p.y = p.height;
    p.frameRate(60);
  };

  p.draw = function () {
    // p.background(220);

    p.background(0); // Set the background to black
    //p.y = 100;
    // p.y = p.y - 15;
    // if (p.y < 0) {
    //   p.y = p.height;
    // }
    p.line(0, p.y, p.width, p.y, 100);
    // DRAW W MOUSE
    // if (this.mouseIsPressed) {
    //   p.fill(0);
    // } else {
    //   p.fill(255);
    // }
    // p.ellipse(this.mouseX, this.mouseY, 20, 20);

    // SPHERE
    // p.background(205, 105, 94);
    // p.rotateY(this.millis() / 1000);
    // p.sphere(40);
  };
}

function ScrollArt() {
  const p5ContainerRef = useRef();

  useEffect(() => {
    const p5Instance = new p5(sketch, p5ContainerRef.current);
    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div className="ScrollArt" ref={p5ContainerRef} />;
}

export default ScrollArt;
