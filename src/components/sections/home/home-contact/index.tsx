import React from 'react'
import { IoMailOutline, IoCallOutline  } from "react-icons/io5";
import { RiTelegram2Line } from "react-icons/ri";
import { MdAccessTime } from "react-icons/md";
import instagram from '../../../../../public/voluntermedia/icons/homeIcon/facebook.png'
import facebook from '../../../../../public/voluntermedia/icons/homeIcon/instagram.png'
import tme from '../../../../../public/voluntermedia/icons/homeIcon/tme.png'
import youtube from '../../../../../public/voluntermedia/icons/homeIcon/youtube.png'
import './_style.scss'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
const HomeContact:React.FC = () => {
  const { t } = useTranslation('HomeContactLang');
  return (
    <div className='px-4 py-14 lg:p-24 container mx-auto'>
      <h2 className=' mb-8 font-bold text-3xl'>{t("title")}</h2>
      <div className="flex  gap-12 ">
        <div className='hidden md:block p-8 shadow-[0px_2px_6px_rgba(99,99,99,0.2)] rounded-[12px] w-[370px] h-72'>
          <ul className='flex flex-col justify-between items-start gap-8'>
            <li className='flex items-center gap-6'><IoMailOutline size={32}/> <a  
            className='text-[#1C1C1C] text-[16px] font-semibold' href="#">volunteersuzb@gmail.com</a></li>
            <li className='flex items-center gap-6'><IoCallOutline size={32}/> <a  
            className='text-[#1C1C1C] text-[16px] font-semibold ' href="#">+998 99 408 39 19</a></li>
            <li className='flex items-center gap-6'><RiTelegram2Line size={32}/><a  
            className='text-[#1C1C1C] text-[16px] font-semibold' href="#">@volunteersuzb</a></li>
            <li className='flex items-center gap-6'><MdAccessTime size={32}/> <span 
            className='text-[#1C1C1C] text-[16px] font-semibold' >9:00 _ 22:00</span></li>
          </ul>
        </div>
        <div className='flex flex-col justify-between gap-6'>
          <h3 className='text-2xl font-medium w-full leading-8'>
            {t("subtitle")}
          </h3>
          <form className='flex flex-col justify-between gap-6'>
            <label className='flex flex-col sm:flex-row items-center gap-4 sm:gap-14'>
              <Input type="text" placeholder='Name'
                className='rounded-sm py-2.5 px-4 text-[#A0AEC0]'/>
              <Input type="text" placeholder='Phone number'
                className='rounded-sm py-2.5 px-4 text-[#A0AEC0]'/>
            </label>
            <textarea className='border border-[#d4d7dc] rounded-[8px] w-full h-16 p-5 resize-none'
             placeholder='Message'>
            </textarea>
            <div className="flex flex-col sm:flex-row items-end gap-4 lg:gap-7  w-full">
              <div className="flex items-end justify-evenly sm:gap-2 lg:gap-[32px] w-full sm:w-[42%]">
                <a href=""> <img src={instagram} alt="" className='w-8 h-8 object-contain'/></a>
                <a href=""> <img src={facebook} alt="" className='w-8 h-8 object-contain' /></a>
                <a href=""><img src={tme} alt="" className='w-8 h-8 object-contain'/></a>
                <a href=""><img src={youtube} alt="" className='w-8 h-8 object-contain'/></a>
              </div>
              <Button className='bg-[#3182CE] hover:bg-[#3182ceeb] w-full sm:w-[65%] h-12'>
                {t("sendBtn")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HomeContact
