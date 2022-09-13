import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className='Sidebar'>
        <div className='Sidebar__top'>
            <img src=''/>
            <Avatar className='Sidebar__avatar'/>
            <h2>Rohan Dubey</h2>
            <h4>rohandubey@gmail.com</h4>
       

        <div className='Sidebar__stats'>
            <div className='Sidebar__stat'>
                <p>who view you</p>
                <p className='Sidebar__statnumber'>2549</p>
            </div>

            <div className='sidebar__stat'>
            <p>Views on post</p>
                <p className='Sidebar__statnumber'>8749</p>
            </div>

            <div className='Sidebar__button'>
                <p>Recent</p>
            </div>
        </div>
            
        </div>



       
    </div>
  )
}

export default Sidebar