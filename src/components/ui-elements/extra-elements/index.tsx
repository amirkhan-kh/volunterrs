import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
export const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div className="arrow left-arrow " onClick={onClick}>
    <MdKeyboardArrowLeft size={32} />
  </div>
);
export const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div className="arrow right-arrow w-[32px]" onClick={onClick}>
    <MdKeyboardArrowRight size={32} />
  </div>
);
import { Input } from "@/components/ui/input";
import './_teams.scss';
import { regions } from "@/db/org-btns";
import gold from '../../../../public/voluntermedia/volunter-images/gold1.svg'
import silver from '../../../../public/voluntermedia/volunter-images/silver.svg'
import { team } from "@/db/team";
const RatingStars = ({ rating }: { rating: number }) => {
  const maxStars = 4;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  return (
    <div className="flex items-center w-full">
      {[...Array(fullStars)].map((_, index) => (
        <img
          key={index}
          src={gold}
          alt="star"
          className="w-[22px] h-8 mx-[-6px] "
        />
      ))}
      {hasHalfStar && (
        <img
          src={silver}
          alt="half-star"
          className="w-[22px] h-8 mx-[-6px]"
        />
      )}

      {[...Array(maxStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
        <img
          key={index}
          src={silver}
          alt="empty-star"
          className="w-[22px] h-8 mx-[-6px]"
        />
      ))}
    </div>
  );
};
export const SearchTeamRegion: React.FC = () => {
  
  return (
    <div className="container mx-auto py-20 p-4 lg:p-24">
      <div className="relative mb-6">
        <Input
          placeholder="Volontyor ismi va familiyasi"
          className="px-20 py-6 text-[#2F508C] font-semibold text-[18px] placeholder:text-[#2F508C] border-transparent shadow-[0px_2px_6px_rgba(99,99,99,0.2)]"
        />
        <CiSearch
          className="absolute top-[10px] left-4 "
          color="#2F508C"
          size={32}
        />
      </div>
      <div className="w-full overflow-x-auto no-scrollbar">
        
        <div className="flex gap-3 px-2 py-2 min-w-max">
          {regions.map((_, i) => (
            <button
              key={i}
              className="whitespace-nowrap px-6 py-2  h-16 shadow-[0px_2px_8px_rgba(99,99,99,0.2)] rounded-[6px] focus:bg-[#6495ED] focus:text-white text-[20px] font-medium"
            >
              {_.nameRegion}
            </button>
          ))}
        </div>
      </div>
      <div className="py-16 ">
        {[0, 1, 2].map((rowIndex) => (
          <div key={rowIndex} className="overflow-x-auto no-scrollbar mb-6 ">
            <div className="flex gap-x-6 py-1 w-max">
              {team.slice(rowIndex * 5, rowIndex * 5 + 5)
                .map((item, i) => (
                  <div key={i}
                    className="bg-white shadow-[0px_2px_8px_rgba(99,99,99,0.2)] transition-transform duration-[800ms] ease-in-out hover:shadow-[0px_3px_12px_rgba(99,99,99,0.2)] rounded-[8px] h-[400px] relative  overflow-hidden"
                  >
                    <img src={item.img} alt=""
                      className="w-full object-cover rounded-[8px] m-0 h-[326px] mb-6  transition-transform duration-[800ms] ease-in-out hover:scale-102 "
                    />
                    <p className="text-center font-semibold text-[18px] text-[#2F2E2E]">
                      {item.nameVolunterr}
                    </p>
                    <span className="absolute end-2 bottom-[42px]">
                      <RatingStars rating={item.rating} />
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
