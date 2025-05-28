import React from 'react'
import './_style.scss'
import { Intro } from '@/components/main-sections'
import { SearchTeamRegion } from '@/components/ui-elements/extra-elements'
const VolunterrsTeam:React.FC = () => {
  return (
    <div>
      <Intro/>
      <SearchTeamRegion/>
    </div>
  )
}

export default VolunterrsTeam
