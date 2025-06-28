import React from 'react'
import { useStatisticCard } from '@/db/statistic'
import meet from '../../../../../public/voluntermedia/icons/homeIcon/meet.png'
import './_style.scss'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
const HomeStatistica:React.FC = () => {
  const {t} = useTranslation('HomeSection2')
  const statisticCard = useStatisticCard()
  return (
    <div className='container mx-auto px-4 lg:px-[100px] py-10 flex flex-col gap-20'>
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-5 md:gap-10  lg:gap-12 xl: gap-2 ">
        {statisticCard.map((item, i) => (
          <div key={i} 
            className='group shadow-[0px_2px_8px_rgba(99,99,99,0.2)] hover:shadow-[0px_1px_5px_rgba(99,99,99,0.2)] hover:transition-all duration-[500ms] rounded-[8px] sm:w-[290px] md:w-[350px] lg:w-[240px] h-72 flex flex-col items-center py-7 gap-8'
          > 
            <h4 className='text-[20px] font-semibold text-[#1C1C1C] leading-[32px]'>{item.title}</h4>
            <img src={item.img} alt="" className='w-14 sm:w-20 md:w-[100px] transition-all duration-[600ms] group-hover:scale-[1.1]'/>
            <p className='text-[20px] md:text-3xl font-semibold leading-[32px]'>{item.valueNumber}</p>
          </div>
        ))}
      </div>
      <div className=" flex flex-col sm:flex-row  gap-8 shadow-[0px_2px_8px_rgba(99,99,99,0.2)] w-full p-4 rounded-[8px]">
        <img src={meet} alt="Met with juniors" 
          className='h-[300px] rounded-xl w-[100%] sm:w-[50%]  object-cover md:object-cover'
        />
        <div className='flex flex-col justify-between h-full gap-5'>
          <h3 className='text-[22px] font-semibold leading-[40px] x'>{t("bottomCardTitle")}</h3>
          <ul>
            <li className='text-[14px] border-b border-[#EAEAEA] leading-6 mb-2.5'>{t("bottomCardSubtitle1")}</li>
            <li className='text-[14px] leading-6 mb-2.5'>{t("bottomCardSubtitle2")}</li>
          </ul>
          <Button className='bg-[#6495ED] hover:bg-[#85a8ffed]   rounded-[12px] w-full'>{t("bottomCardSubtitlebtn")}</Button>
        </div>
      </div>
    </div>
  )
}

export default HomeStatistica
