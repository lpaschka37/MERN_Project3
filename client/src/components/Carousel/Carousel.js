// https://www.npmjs.com/package/react-responsive-carousel
const React = require("react");
const ReactDOM = require("react-dom");
const { Carousel } = require("react-responsive-carousel");

const DemoCarousel = React.createClass({
  render() {
    return (
      <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
        <div>
          <img src="assets/1.jpeg" />
          <p className="queso">Queso 1</p>
        </div>
        <div>
          <img src="assets/2.jpeg" />
          <p className="queso">Queso 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="queso">Queso 3</p>
        </div>
        <div>
          <img src="assets/4.jpeg" />
          <p className="queso">Queso 4</p>
        </div>
        <div>
          <img src="assets/5.jpeg" />
          <p className="queso">Queso 5</p>
        </div>
        <div>
          <img src="assets/6.jpeg" />
          <p className="queso">Queso 6</p>
        </div>
      </Carousel>
    );
  }
});
ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));

// Don't forget to include the css in your page
// <link rel="stylesheet" href="carousel.css"/>
// Begin DemoSliderControls
//

// npm install react-responsive-carousel --save
