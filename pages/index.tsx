import React from 'react';
import Header from '../components/Header';
import HeroImageSlider from '../components/HeroImageSlider';
import SocialMediaFeeds from '../components/SocialMediaFeeds';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroImageSlider />
      <SocialMediaFeeds />
    </div>
  );
};

export default Home;
