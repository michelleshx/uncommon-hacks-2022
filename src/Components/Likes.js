import { useEffect, useRef } from "react";
import p5 from "p5";

function sketch(p) {
  let heart1; // Declare objects
  let heart2;
  let heart3;
  let heart4;

  p.setup = function () {
    p.createCanvas(this.windowWidth, 800);

    // p.frameRate(10);

    // heart = new Heart();
    //

    heart1 = new Heart();
    heart2 = new Heart();
    heart3 = new Heart();
    heart4 = new Heart();
  };

  p.draw = function () {
    // p.background(50);

    // heart.display();

    // this.fill("red");
    // this.ellipse(65.5, 66.6, 21, 19);
    // this.ellipse(85.5, 66.6, 21, 19);
    // this.triangle(96, 70, 75, 92, 55, 70);

    //p.mouseOver((p.d = 10));

    //heart1.move();
    heart1.display();
    // heart2.move();
    heart2.display();
    heart3.move();
    heart3.display();
    // heart4.move();
    heart4.display();
  };

  // class Heart {
  //   constructor() {
  //     this.x = 100;
  //     this.y = 100;
  //   }
  //   display() {
  //     this.fill("red");
  //     this.ellipse(65.5, 66.6, 21, 19);
  //     this.ellipse(85.5, 66.6, 21, 19);
  //     this.triangle(96, 70, 75, 92, 55, 70);
  //   }
  // }

  // Heart class
  class Heart {
    constructor() {
      this.x = p.random(p.width);
      this.y = p.random(p.height);
      this.diameter = p.random(10, 30);
      this.speed = 1;
      p.fill("red");
      p.smooth();
      p.noStroke();
      this.scale = 50;
    }

    move() {
      // s = p.cos(this.a) * 2;
      this.scale(this.scale + 1);
      // fill(51);
      // rect(0, 0, 50, 50)
      // this.x += p.random(-this.speed, this.speed);
      // this.y += p.random(-this.speed, this.speed);
    }

    display() {
      p.ellipse(this.x + 65.5, this.y + 66.6, 21, 19);
      p.ellipse(this.x + 85.5, this.y + 66.6, 21, 19);
      p.triangle(
        this.x + 96,
        this.y + 70,
        this.x + 75,
        this.y + 92,
        this.x + 55,
        this.y + 70
      );
    }
  }
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
