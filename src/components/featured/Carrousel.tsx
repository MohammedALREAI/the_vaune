import React from "react";
import Slider from "react-slick";
import { SliderItem } from "../widget/sliderItem";

const Carrousel = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    { image: "/images/slide_one.jpg" },
    { image: "/images/slide_two.jpg" },
    { image: "/images/slide_three.jpg" },
  ];
  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight - 1}px`,
        overflow: "hidden",
        width: `100%`,

      }}>
      <Slider {...settings}>
        {images.map((x, index) => <SliderItem key={index} image={x.image} />)}
      </Slider>
    </div>
  );
};

export default Carrousel;
