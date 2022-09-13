import React from 'react'
import "./HeaderOption.css"

function HeaderOption({Icon , title}) {  // Props or properties
  return (
    <div className='HeaderOption'>
        { Icon && <Icon className ="HeaderOption__icon"/>}
        <h3 className='HeaderOption__title'>{title}</h3>

    </div>
  )
}

export default HeaderOption