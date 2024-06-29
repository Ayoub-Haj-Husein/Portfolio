import { Typography } from '@mui/material'
import React from 'react'

const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className="profile_name">
        <Typography className='name'>Ayoub</Typography>
        <Typography className='title'>Title</Typography>
      </div>

      <figure className='profile_image'>
        <img src="" alt="" />
      </figure>

      <div className="profile_information">
        insert Timeline
        <br />
        <button>my button</button>
      </div>
    </div>
  )
}

export default Profile