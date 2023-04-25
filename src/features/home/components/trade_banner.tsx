import React from 'react'
import Slider from "react-slick";
import Slide1 from '../../../assets/static/images/slide1.png';
import Slide2 from '../../../assets/static/images/slide2.png';

interface IBanner{
  image: string;
  alt: string;
}

const banners = [
  {
    image: Slide1,
    alt: 'Trade your shibber'
  },
  {
    image: Slide2,
    alt: 'Trade your Coin'
  }
];

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

export default function tradeBanner() {
  return (
    <div className="trade">
      <div className="inner_wp">
        <div className="container">
          <Slider {...settings}>
            {
              banners.map(slide => <TradeBanner image={slide.image} alt={slide.alt} key={slide.alt} />)
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

const TradeBanner = ({image, alt}:IBanner )=> {
  return <div className='trade__banner'>
    <img src={image} alt={alt} />
  </div>

}
