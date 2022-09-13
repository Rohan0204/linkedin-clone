import { Avatar } from '@mui/material'
import React from 'react'
import "./HeaderOption.css"

function HeaderOption({avatar, Icon , title}) {  // Props or properties
  return (
    <div className='HeaderOption'>
        { Icon && <Icon className ="HeaderOption__icon"/>}
        {avatar && (
          <Avatar className = "HeaderOption__avatar" src = {avatar}/>
        )}
        <h3 className='HeaderOption__title'>{title}</h3>

    </div>
  )
}

export default HeaderOption