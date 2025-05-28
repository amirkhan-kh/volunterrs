import React from 'react'
import { useNavigate } from "react-router-dom";

import { GoArrowLeft } from "react-icons/go";
import { Input } from '@/components/ui/input';
import { bankApps } from '@/db/org-btns';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


const DonationPage: React.FC = () => {
    const navigate = useNavigate();

  return (
    <div className='py-10 px-2 lg:px-24'>
      <h3 className='flex items-center gap-9 font-medium text-2xl sm:text-3xl mb-14'>
        <GoArrowLeft onClick={() => navigate(-1)} className='w-14 sm:w-8'/>
        Inklyuziv yoshlarni qo’llab quvatlash uchun o’z hissangizni qo’shing
      </h3>
      <div className='bg-white py-16 px-2 lg:px-52 mb-4'>
        <h4 className='text-[#2F2E2E] text-3xl font-medium'>
          O’z hissangizni qo’shing
        </h4>
        <p className='text-[16px] mb-9'>
          Kerakli ma’lumotlarni kiriting
        </p>

        <div>
          <form>
            <p>F.I.SH</p>
            <Input placeholder='To’liq ismingizni kiriting'
              className='border border-[#6495ED] p-5 mb-8'
            />
            <p>Ehson miqdorini kiriting</p>
            <Input placeholder='O’z miqdoringizni kiriting'
              className='border border-[#6495ED] p-5 mb-8'
            />
            <p>To’lov usulini tanlang</p>

            <div className='grid grid-cols-2 w-full gap-x-4 sm:gap-x-40 '>
              {bankApps.map((item, i) => (
             <div
                key={i}
                className="border-[#EAEAEA] border my-2 rounded-[12px] gap-2 lg:gap-6 p-2.5 sm:w-64 flex items-center justify-between"
              >
                <img src={item.img} alt="Bank Apps Img" className="w-16 sm:w-20 lg:w-36 h-10 sm:h-12 lg:h-14" />
                <RadioGroup>
                  <RadioGroupItem
                    value=""
                    id=""
                    className="border border-gray-300 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-[state=checked]:text-white w-5 h-5 "
                  />
                </RadioGroup>
              </div>
            ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DonationPage
