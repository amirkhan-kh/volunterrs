import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { sliderContent } from "@/db/slide";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./intro.css";
const Intro: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const [centerPadding, setCenterPadding] = useState("90px");
  useEffect(() => {
    const handleResize = () => {
      switch (true) {
        case window.innerWidth < 440:
          setCenterPadding("10px");
          break;
        case window.innerWidth < 640:
          setCenterPadding("40px");
          break;
        case window.innerWidth < 768:
          setCenterPadding("34px");
          break;
        case window.innerWidth < 1024:
          setCenterPadding("50px");
          break;
        default:
          setCenterPadding("90px");
          break;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: (i: number) => (
      <div className="custom-dot-wrapper">
        <div className={`custom-dot ${activeIndex === i ? "active" : ""}`} />
      </div>
    ),
    beforeChange: (_: number, next: number) => setActiveIndex(next),
    dotsClass: "slick-dots custom-dots",
  };
  return (
    <div className="container  mx-auto px-1 lg:px-4 py-2 relative  z-10 min-h-[500px]">
      {/*   slayderlar */}
      <Slider ref={sliderRef} {...settings}>
        {sliderContent.map((item, index) => (
          <div key={index} className=" slide-item p-0 py-4">
            <div className="rounded-lg overflow-hidden transition-all duration-300 ease-in-out custom-slide">
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover h-[500px] rounded-lg"
              />
              <div className="py-5 text-left">
                <h2 className="text-[17px] sm:text-[28px] md:text-[38px] font-semibold md:font-bold mb-2">
                  {item.title}
                </h2>
                <p className=" text-[10px] pr-10 sm:text-[12px] font-bold sm:font-semibold md:text-sm text-[#000000]">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/*  buttonlar */}
      <div className="flex items-center justify-center sm:justify-between mb-4 px-4 sm:px-20  translate-y-[-30px] sm:translate-y-[-70px]">
        <span className="hidden sm:block "></span>
        <div className="flex items-center gap-2 ">
          <button onClick={() => sliderRef.current?.slickPrev()}>
            <MdKeyboardArrowLeft size={32} />
          </button>
          <button onClick={() => sliderRef.current?.slickNext()}>
            <MdKeyboardArrowRight size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
