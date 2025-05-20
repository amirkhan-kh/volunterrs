import React from 'react'
import Aside from '../../components/aside'
import { Outlet } from 'react-router'

const AdminLayout: React.FC = () => {
  return (
    <div>
      AdminLayout
      <Aside/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default AdminLayout
