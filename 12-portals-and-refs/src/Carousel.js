import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel flex flex-row justify-center">
        <img
          src={images[active]}
          alt="animal"
          className="object-contain mr-10"
        />
        <div className="carousel-smaller flex flex-col">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={
                index === active
                  ? "active rounded-full w-24 h-24 border-2 border-violet-500"
                  : "rounded-full  w-24 h-24 opacity-70"
              }
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
