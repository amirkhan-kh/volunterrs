import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutDescription: React.FC = () => {
  const {t} = useTranslation("WhatVoluneersLang")
  return (
    <div className='container mx-auto bg-white'>
      <div className="px-4 lg:px-18 py-14">
        <h3 className='text-3xl font-semibold text-[#2F2E2E] mb-8'>
          {t("titleSub")}
        </h3>
        <p className='font-medium text-[18px]'> 
                    {t("paragrf")}

        </p>
      </div>
    </div>
  )
}

export default AboutDescription
