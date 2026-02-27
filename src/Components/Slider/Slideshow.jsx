import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slideshow.css';
import Homeimage1 from './homebanner1.png';
import Homeimage2 from './homebanner2.png';
import Homeimage3 from './homebanner3.png';
import Homeimage4 from './homebanner4.png';
import Homeimage5 from './homebanner5.png';

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 400,
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        <div>
          <img src={Homeimage1} alt="Home_Image 1" className="slideshow-image" />
        </div>
        <div>
          <img src={Homeimage2} alt="Home_Image 2" className="slideshow-image" />
        </div>
        <div>
          <img src={Homeimage3} alt="Home_Image 3" className="slideshow-image" />
        </div>
        <div>
          <img src={Homeimage4} alt="Home_Image 4" className="slideshow-image" />
        </div>
        <div>
          <img src={Homeimage5} alt="Home_Image 5" className="slideshow-image" />
        </div>
      </Slider>
    </div>
  );
};

export default Slideshow;
