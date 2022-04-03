import { useEffect, useRef } from "react";
import p5 from "p5";

function sketch(p) {
  p.setup = function () {
    p.createCanvas(this.windowWidth, 800);
    p.colorMode(this.HSB);
    p.smooth();
    p.noStroke();
    p.noLoop();
  };

  p.draw = function () {
    // p.background(220);

    p.background(0);
    p.translate(p.width / 2, p.height / 2);
    p.noFill();
    p.stroke(255);
    p.strokeWeight(0.1);
    p.scale(20);
    p.beginShape();
    for (let t = 0; t < this.TWO_PI; t += 0.01) {
      let x = 5 * this.pow(this.sin(t), 3);
      let y = -(4 * this.cos(t) - 2 * this.cos(2 * t) - this.cos(3 * t));
      p.vertex(x, y);
    }
    p.endShape(this.CLOSE);

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

function Heart() {
  const p5ContainerRef = useRef();

  useEffect(() => {
    const p5Instance = new p5(sketch, p5ContainerRef.current);
    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div className="Heart" ref={p5ContainerRef} />;
}

export default Heart;
