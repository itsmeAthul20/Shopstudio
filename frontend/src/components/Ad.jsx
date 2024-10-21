import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/Ad.css'

const AdCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const ads = [
    { id: 1, image: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d0e281a0cfa9c139.jpg?q=20' },
    { id: 2, image: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/08e2bf21a32dc0f5.jpeg?q=20' },
    { id: 3, image: 'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ea29e0f2d38ad590.jpeg?q=20' },
  ];

  return (
    <div className="ad-carousel">
      <Slider {...settings}>
        {ads.map((ad) => (
          <div key={ad.id}>
            <img src={ad.image} alt={`Ad ${ad.id}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AdCarousel;
