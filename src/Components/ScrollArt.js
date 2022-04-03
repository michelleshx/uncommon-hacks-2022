import { useEffect, useRef } from "react";
import p5 from "p5";

function sketch1(p) {
  p.setup = function () {
    p.createCanvas(this.windowWidth - 112, 800);
    p.background(0);
    p.y = p.height;
    p.frameRate(60);
  };

  p.drawScene1 = function () {
    p.stroke(255);
    p.y = p.y - 10;
    if (p.y < 0) {
      p.y = p.height;
    }
    p.line(0, p.y, p.width, p.y, 100);
  };

  p.drawHeart = function () {
    let moveX = 0;
    let moveY = 615;
    p.fill("red");
    p.noStroke();

    p.ellipse(65.5 + moveX, 66.6 + moveY, 21, 19);
    p.ellipse(85.5 + moveX, 66.6 + moveY, 21, 19);
    p.triangle(
      96 + moveX,
      70 + moveY,
      75 + moveX,
      92 + moveY,
      55 + moveX,
      70 + moveY
    );
  };

  // NUMBERS
  p.drawNumbers = function () {
    p.frameRate(20);
    p.fill(255);
    p.textSize(24);
    p.text(p.int(p.random(500000)), 115, 698);
  };

  p.draw = function () {
    p.background(0);
    p.drawScene1();
    p.drawHeart();
    p.drawNumbers();
  };
}

function ScrollArt() {
  const p5ContainerRef = useRef();

  useEffect(() => {
    const p5Instance = new p5(sketch1, p5ContainerRef.current);
    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div className="ScrollArt" ref={p5ContainerRef} />;
}

export default ScrollArt;
