"use strict";

function button() {
  return 'button';
}

class Slider {
  constructor(width, height, count) {
    this.width = width;
    this.height = height;
    this.count = count;
  }
  nextSlide() {
    console.log('Moving forward');
  }
  prevSlide() {
    console.log('Moving back');
  }
  whoAmI() {
    console.log(this.width, this.height, this.count);
  }
}

/* 
const slider = new Slider(600, 400, 5),
      sliderTwo = new Slider(500, 300, 4);
slider.whoAmI();
sliderTwo.whoAmI();
slider.nextSlide();
*/

class AutoSlider extends Slider {
  constructor(width, height, count, auto) {
    super(width, height, count);
    this.auto = auto;
  }
  play() {
    console.log("Autoplay: ".concat(this.auto));
  }
}

/* const slider = new AutoSlider(600, 700, 4, true);
slider.whoAmI();
slider.play();
*/

export {button};
export default Slider;