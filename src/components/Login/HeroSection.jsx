import React from "react";
import Slider from "react-slick";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mx-10 h-full">
      <Slider className="h-full" {...settings}>
        <div className="bg-gray-100 rounded-xl h-96">
          <h1 className="text-xl font-bold text-center">Slider 1</h1>
        </div>
        <div className="bg-gray-100 rounded-xl h-96">
          <h1 className="text-xl font-bold text-center">Slider 2</h1>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSection;
