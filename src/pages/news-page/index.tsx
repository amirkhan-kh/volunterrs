import { Intro } from '@/components/main-sections'
import { NewsSectionNews } from '@/components/sections/news'
import React from 'react'

const News: React.FC = () => {
  return (
    <div>
      <Intro/>
      <NewsSectionNews/>
    </div>
  )
}

export default News
