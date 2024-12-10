import { useState } from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  const slides = [
    { src: assets.banner1 },
    { src: assets.banner2 },
    { src: assets.banner3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].src})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-300"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-300"
      >
        ❯
      </button>
    </div>
  );
};

export default Hero;