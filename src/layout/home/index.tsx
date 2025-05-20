import React from 'react'
import { Footer, Header } from '../../components'
import { Outlet } from 'react-router'

const MainHome:React.FC = () => {
  return (
    <div className='mx-auto'>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default MainHome
