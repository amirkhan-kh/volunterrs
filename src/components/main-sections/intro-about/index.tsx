import React, { useRef, useState } from "react";
import { IoPauseOutline, IoPlayOutline } from "react-icons/io5";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { RxExitFullScreen } from "react-icons/rx";

import "./_style.scss";
const IntroVolunterr: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState(0);
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
    if (videoRef.current) {
      const duration = videoRef.current.duration;
      videoRef.current.currentTime = (duration * newValue) / 100;
    }
  };
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      const percent = (current / duration) * 100;
      setValue(percent);
    }
  };
  return (
    <>
      <div id="aboutIntro" className="px-4 py-20 lg:py-10">
        <div className="container mx-auto px-0 lg:px-[60px]">
          <h2 className="text-4xl mb-8">Biz birgalikda Valantyormiz !</h2>
          <div className=" mx-auto relative">
            <video
              className="w-full h-[330px] sm:h-[500px] rounded-lg object-cover aspect-video"
              ref={videoRef}
              onTimeUpdate={handleTimeUpdate}
            >
              <source
                src="/videos/football.mp4"
                type="video/mp4"
                className="w-full"
              />
            </video>
            <span className="absolute top-48 left-[600px]">
              <button
                onClick={togglePlay}
                className="text-3xl text-[#FFFFFF] border-2 border-white rounded-full p-2"
              >
                {isPlaying ? <IoPauseOutline /> : <IoPlayOutline />}
              </button>
            </span>
            <div className="w-full absolute bottom-10 px-4">
              <input
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={handleChange}
                className="w-full custom-range"
                style={{ "--value": `${value}%` } as React.CSSProperties}
              />
              <div className="flex items-center justify-between">
                <button
                  className="text-3xl text-[#FFFFFF]"
                  onClick={togglePlay}
                >
                  {isPlaying ? <IoPauseOutline /> : <IoPlayOutline />}
                </button>
                <button
                  onClick={toggleModal}
                  className="absolute top-4 right-4 text-white text-3xl"
                >
                  {showModal ? (
                    <MdOutlineCloseFullscreen />
                  ) : (
                    <RxExitFullScreen />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="w-full h-[100vh] bg-[rgba(0,0,0,0.94)] absolute top-0 py-[60px]">
          <div>
            <video
              className="w-full h-[500px] rounded-lg object-cover aspect-video"
              ref={videoRef}
              onTimeUpdate={handleTimeUpdate}
            >
              <source
                src="/videos/football.mp4"
                type="video/mp4"
                className="w-full"
              />
            </video>
            <span className="absolute top-80 left-[600px]">
              <button
                onClick={togglePlay}
                className="text-3xl text-[#FFFFFF] border-2 border-white rounded-full p-2"
              >
                {isPlaying ? <IoPauseOutline /> : <IoPlayOutline />}
              </button>
            </span>
            <div className="w-full absolute bottom-40 px-4">
              <input
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={handleChange}
                className="w-full custom-range"
                style={{ "--value": `${value}%` } as React.CSSProperties}
              />
              <div className="flex items-center justify-between">
                <button
                  className="text-3xl text-[#FFFFFF]"
                  onClick={togglePlay}
                >
                  {isPlaying ? <IoPauseOutline /> : <IoPlayOutline />}
                </button>
                <button
                  onClick={toggleModal}
                  className="absolute  right-4 text-white text-3xl z-50"
                >
                  {showModal ? (
                    <MdOutlineCloseFullscreen />
                  ) : (
                    <RxExitFullScreen />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IntroVolunterr;
