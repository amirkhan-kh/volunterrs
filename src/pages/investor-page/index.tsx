import { Intro } from '@/components/main-sections'
import InvestorSection from '@/components/sections/investor-section'
import React from 'react'

const InvestorPage:React.FC = () => {
  return (
    <div>
      <Intro/>
      <InvestorSection/>
    </div>
  )
}

export default InvestorPage
