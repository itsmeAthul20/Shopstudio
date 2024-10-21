import React from 'react';
import '../Styles/Ads.css';

const Ads = () => {
  return (
    <div className="ads-container">
      <iframe
        width="100%"
        height="auto"
        src="https://www.youtube.com/embed/nXOrBHaV5VU?autoplay=1&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Ads;
