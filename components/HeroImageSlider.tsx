// components/HeroImageSlider.tsx

import React from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

// Install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

interface HeroImage {
  src: string;
  alt: string;
}

const images: HeroImage[] = [
  { src: '/images/yukira.PNG', alt: 'Header 1' },
  { src: '/images/DSC05508.jpeg', alt: 'Header 2' },
  { src: '/images/DSC05509.jpeg', alt: 'Header 3' },
];

const HeroImageSlider: React.FC = () => {
  return (
    <Swiper navigation autoplay={{ delay: 5000 }} loop className='w-full'>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image.src}
            alt={image.alt}
            className='w-full object-cover h-96'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroImageSlider;
