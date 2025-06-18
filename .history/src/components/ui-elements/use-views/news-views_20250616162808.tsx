import React, { useRef } from "react";
import { PiCalendarBold } from "react-icons/pi";
import { useViewCounter } from "@/hooks/use-view-counter";
import { GrFormView } from "react-icons/gr";

interface NewsCardProps {
  id: number;
  img: string;
  titleNews: string;
  desc: string;
  dataCalendar: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, id: number) => void;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  id,
  img,
  titleNews,
  desc,
  dataCalendar,
  onClick,
}) => {
  const { ref, viewCount } = useViewCounter();
  const reff = useRef<HTMLAnchorElement | null>(null);


  return (
    <a
      href={`/single-page/${id}`}
      onClick={(e) => onClick(e, id)}
      className="w-[285px] sm:w-[345px] bg-white shadow rounded-lg p-2 relative"
      ref={reff}
    >
      <img
        src={img}
        alt=""
        className="w-full h-[200px] object-cover rounded-md mb-4"
      />

      <div className="mb-3">
        <h3 className="font-semibold text-2xl mb-2">{titleNews}</h3>
        <p className="text-gray-600 text-sm mb-2">{desc}</p>
      </div>

      <div className="flex items-center text-sm absolute top-[178px] left-[130px] sm:left-[190px] w-36 bg-white py-1 px-5 rounded-sm text-[#6495ED] text-[14px]">
        <PiCalendarBold className="mr-1" />
        <p>{dataCalendar}</p>
      </div>

      <p className="text-gray-500 text-sm mt-3 flex" ref={ref} ><GrFormView /> {viewCount}</p>
    </a>
  );
};
