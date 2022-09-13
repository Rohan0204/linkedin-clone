import React from 'react'
import "./Header.css"
import WorkSharpIcon from '@mui/icons-material/WorkSharp';
import CommentSharpIcon from '@mui/icons-material/CommentSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import PeopleSharpIcon from '@mui/icons-material/PeopleSharp';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import HeaderOption from './HeaderOption';
import { Avatar } from '@mui/material';
function Header() {
  return (
    <div className='header'>


      <div className = "header__left">
          <img src='https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw' alt='' />

          <div className='header__search'>
              {/* {search icon} */}
              <ManageSearchIcon/>
              <input type="text"/>
          </div>

      </div>



          <div className = "header__right">
              <HeaderOption Icon = {HomeSharpIcon} title ="Home"/>
              <HeaderOption Icon = {PeopleSharpIcon} title ="My Network"/>
              <HeaderOption Icon = {WorkSharpIcon} title ="Job"/>
              <HeaderOption Icon = {CommentSharpIcon} title ="Messaging"/>
              <HeaderOption Icon = {NotificationsSharpIcon} title ="Notification"/>
              <HeaderOption avatar = "https://c.ndtvimg.com/2022-08/g9vsscm_elon-musk_625x300_29_August_22.jpg" title="Me"/>

            
          </div>

        


      
    </div> 
    
   
  )
}

export default Header;