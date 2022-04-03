import { useEffect, useRef } from "react";
import p5 from "p5";

function sketch1(p) {
  let heartSize, heartOutline;
  let r = 0;
  let b = 255;
  let g = 255;

  p.setup = function () {
    p.createCanvas(400, 800);
    p.frameRate(20);
    p.y = p.height;
    p.size = 35;
  };

  p.drawScene1 = function () {
    p.strokeWeight(10);
    let c = p.color(255, 255, 255, 100);
    p.stroke(c);
    p.y = p.y - 15;
    if (p.y < 0) {
      p.y = p.height;
    }

    for (let i = 0; i < p.height * 2; i += 20) {
      p.line(0, p.y + i, p.width, p.y + i, 100);
    }
    for (let i = p.height; i >= 0; i -= 20) {
      p.line(0, p.y - 15 - i, p.width, p.y - 15 - i, 100);
    }
  };

  p.drawHeart1 = function () {
    let x = 60;
    let y = 730;
    heartSize = p.random(20, 25);
    heartOutline = p.random(4, 15);

    p.fill(255, 0, 0, 200);
    p.strokeWeight(heartOutline);
    p.stroke(255, 0, 0, 150);

    p.beginShape();
    p.vertex(x, y);
    p.bezierVertex(
      x - heartSize / 2,
      y - heartSize / 2,
      x - heartSize,
      y + heartSize / 3,
      x,
      y + heartSize
    );
    p.bezierVertex(
      x + heartSize,
      y + heartSize / 3,
      x + heartSize / 2,
      y - heartSize / 2,
      x,
      y
    );
    p.endShape(this.CLOSE);
  };

  // NUMBERS
  p.drawNumbers = function () {
    p.fill(255);
    p.textSize(24);
    p.noStroke();
    p.text(p.int(p.random(500000)), 95, 750);
  };

  p.draw = function () {
    r = p.map(this.mouseY, 0, 600, 0, 255);
    g = p.map(this.mouseX, 0, 600, 0, 255);
    b = p.map(this.mouseY, 0, 600, 255, 0);
    p.background(r, g, b);
    //for (let i = 0; i < p.height; i += 75) {
    p.drawScene1();
    //}
    p.drawHeart1();
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
