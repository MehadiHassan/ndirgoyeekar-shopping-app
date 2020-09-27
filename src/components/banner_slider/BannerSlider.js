import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImageOne from "../../asset/images/home-slider-image-one.jpg";
import SliderImageTwo from "../../asset/images/home-slider-image-two.jpg";
import SliderImageThree from "../../asset/images/home-slider-image-three.jpg";
import './BannerSlider.scss';

const BannerSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div className="slider-section">
          <Slider {...settings}>
            <div>
              <img className="slide-image" src={SliderImageOne} alt="one" />
            </div>
            <div>
              <img className="slide-image" src={SliderImageTwo} alt="two" />
            </div>
            <div>
              <img
                className="slide-image"
                src={SliderImageThree}
                alt="three"
              />
            </div>
          </Slider>
        </div>
    );
};

export default BannerSlider;