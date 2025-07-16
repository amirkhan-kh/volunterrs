import React from 'react'
import { useRef, useState } from "react";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './intro.css'; 
import { SliderContent } from '@/db/slide';
const HistoryVolunterr:React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '90px',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: (i: number) => (
      <div className="custom-dot-wrapper bg-amber-500">
        <div className={`custom-dot ${activeIndex === i ? 'active' : ''}`} />
      </div>
    ),
    beforeChange: (_: number, next: number) => setActiveIndex(next),
    dotsClass: "slick-dots custom-dots",
  };
  const sliderContent = SliderContent()
  return (
   <div className="container  mx-auto px-2 py-2 relative min-h-[500px]">

      <Slider ref={sliderRef} {...settings}>
        {sliderContent.map((item, index) => (
          <div key={index} className="slide-item  py-4">
            <div className="rounded-lg overflow-hidden transition-all duration-300 ease-in-out custom-slide">
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover h-[500px] rounded-lg"
              />
              <div className="py-5 text-left">
                <h2 className="text-[38px] font-bold mb-2">{item.title}</h2>
                <p className="text-sm text-[#000000]">{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex items-center justify-end gap-2 mb-4  px-28  translate-y-[-70px]">
        <button  onClick={() => sliderRef.current?.slickPrev()}><MdKeyboardArrowLeft size={32} /></button>
        <button onClick={() => sliderRef.current?.slickNext()}><MdKeyboardArrowRight size={32} /></button>
      </div>
    </div>
  
  )
}

export default HistoryVolunterr
