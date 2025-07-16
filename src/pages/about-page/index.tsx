import { Intro} from '@/components/main-sections'
import { HomeActiveVolunterr, HomeContact, HomeNews, HomeOrganization, HomeStatistica } from '@/components/sections/home'
import React from 'react'

const About: React.FC = () => {
  
  return (
    <div>
      <Intro/>
      <HomeStatistica/>
      <HomeNews/>
      <HomeOrganization/>
      <HomeActiveVolunterr/>
      <HomeContact/>
    </div>
  )
}

export default About
