import React from 'react'
import './_style.scss'
// import ProfileVolunterrEdit from '@/components/sections/profile-volunterr-edit'
import VolunterUserProfile from '@/components/sections/volunterr-user-profile'
const ProfileVolunterr:React.FC = () => {
  return (
    <>
    {/* <div>
      <ProfileVolunterrEdit/>
    </div> */}
    <div>
      <VolunterUserProfile/>
    </div>
    </>
  )
}

export default ProfileVolunterr
