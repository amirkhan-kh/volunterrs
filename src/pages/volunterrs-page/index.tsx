import { Intro } from '@/components/main-sections'
import { SearchTeamRegion } from '@/components/ui-elements/extra-elements'
import React from 'react'

const Volunterrs: React.FC = () => {
  return (
    <div>
      <Intro/>
      <h3 className='text-3xl font-semibold px-24'>
        Volontyors
      </h3>
      <SearchTeamRegion/>
      
    </div>
  )
}

export default Volunterrs
