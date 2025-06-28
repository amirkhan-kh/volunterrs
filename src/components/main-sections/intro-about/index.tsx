import React, { useRef, useState } from "react";
import { IoPauseOutline, IoPlayOutline } from "react-icons/io5";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { RxExitFullScreen } from "react-icons/rx";
import "./_style.scss";
import { useTranslation } from "react-i18next";

const IntroVolunterr: React.FC = () => {
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState("00:00");
  const [totalTime, setTotalTime] = useState("00:00");
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const { t } = useTranslation("WhatVoluneersLang");

  const handlePlayPause = (video: HTMLVideoElement | null) => {
    if (!video) return;
    if (video.paused) {
      video.play();
       setIsPlaying(true);
    } else {
      video.pause();
       setIsPlaying(false);
    }
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>, video: HTMLVideoElement | null) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
    if (video) {
      const duration = video.duration;
      video.currentTime = (duration * newValue) / 100;
    }
  };

  const handleTimeUpdate = (video: HTMLVideoElement | null) => {
    if (video) {
      const current = video.currentTime;
      const duration = video.duration;
      const percent = (current / duration) * 100;
      setValue(percent);
      setCurrentTime(formatTime(current));
      setTotalTime(formatTime(duration));
    }
  };


  const openModal = () => {
    setShowModal(true);
    mainVideoRef.current?.pause();
    modalVideoRef.current?.play();
  };

  const closeModal = () => {
    setShowModal(false);
    modalVideoRef.current?.pause();
  };

  return (
    <>
      <div id="aboutIntro" className="px-4 py-20 lg:py-10 ">
        <div className="container mx-auto px-0 lg:px-[60px]">
          <h2 className="text-4xl mb-8">{t("title")}</h2>
          <div className="mx-auto relative ">
            <video
              ref={mainVideoRef}
              onTimeUpdate={() => handleTimeUpdate(mainVideoRef.current)}
              className="w-full h-[500px] rounded-lg object-contain aspect-video"
            >
              <source src="/videos/video_2020-09-12_16-03-13.mp4" type="video/mp4" />
            </video>

            <span className="absolute top-48 left-[600px]">
              <button
                onClick={() => handlePlayPause(mainVideoRef.current)}
                className="text-3xl text-white border-2 border-white rounded-full p-2"
              >
                {isPlaying ? <IoPauseOutline /> : <IoPlayOutline />}

              </button>
            </span>

            <div className="w-full absolute px-50">
               <div className="flex items-center justify-between">
                <span className="text-white">{currentTime}</span>
                <span className="text-white">{totalTime}</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={(e) => handleRangeChange(e, mainVideoRef.current)}
                className="w-full custom-range"
                style={{ "--value": `${value}%` } as React.CSSProperties}
              />
              <div className="flex items-center justify-between">
                <button
                  className="text-3xl text-white"
                  onClick={() => handlePlayPause(mainVideoRef.current)}
                >
                 {isPlaying ? <IoPauseOutline /> : <IoPlayOutline />}
                </button>
                <button
                  onClick={openModal}
                  className="text-white text-3xl"
                >
                  <RxExitFullScreen />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="w-[100vw] h-[100vh] overflow-hidden bg-[rgba(0,0,0,0.8)] backdrop-blur-sm fixed top-0 left-0 z-50 flex items-center justify-center">
          <div className="relative  h-full py-8">
            <video
              ref={modalVideoRef}
              onTimeUpdate={() => handleTimeUpdate(modalVideoRef.current)}
              className="w-full h-[500px] rounded-lg object-contain aspect-video"
            >
              <source src="/videos/video_2020-09-12_16-03-13.mp4" type="video/mp4" />
            </video>

            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <button
                onClick={() => handlePlayPause(modalVideoRef.current)}
                className="text-3xl text-white border-2 border-white rounded-full p-2"
              >
                {modalVideoRef.current?.paused ? <IoPlayOutline /> : <IoPauseOutline />}
              </button>
            </span>

            <div className="absolute bottom-10 w-full">
              <div className="flex items-center justify-between">
                <span className="text-white">{currentTime}</span>
                <span className="text-white">{totalTime}</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={(e) => handleRangeChange(e, modalVideoRef.current)}
                className="w-full custom-range"
                style={{ "--value": `${value}%` } as React.CSSProperties}
              />
              <div className="flex items-center justify-between px-4">
                <button
                  className="text-3xl text-white"
                  onClick={() => handlePlayPause(modalVideoRef.current)}
                >
                  {modalVideoRef.current?.paused ? <IoPlayOutline /> : <IoPauseOutline />}
                </button>
                <button
                  onClick={closeModal}
                  className="text-white text-3xl"
                >
                  <MdOutlineCloseFullscreen />
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
