import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Ad from '../components/Ad'
import '../Styles/About.css'
const About = () => {
  return (
    <div className='about'>
      <Navbar/>
    <div className="about-container">
      <h1>About ShopStudio</h1>
      <p className="about-description">
        Welcome to ShopStudio, your go-to online store for electronics and more! Our mission is to provide customers with the best shopping experience by offering high-quality products at unbeatable prices.
      </p>
      <p className="about-description">
        We started as a small startup, driven by a passion for innovation and a desire to make shopping more accessible and enjoyable for everyone. Over the years, we have grown into a trusted brand known for reliability and exceptional customer service.
      </p>
      <p className="about-description">
        Thank you for choosing ShopStudio. We look forward to serving you and making your shopping experience exceptional.
      </p>
      <p className="about-team">Happy Shopping!<br />The ShopStudio Team</p>
    </div>
    <Ad/>
    <Footer/>
    </div>
  );
};

export default About;
