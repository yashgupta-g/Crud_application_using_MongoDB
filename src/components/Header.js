import React from 'react'
import {AppBar, Toolbar } from '@mui/material';
import "./Header.css"
export default function Header() {
  return (
   <AppBar position='static'>
    <Toolbar>
<h2 className='links'>CRUD APP </h2>
<h3 className='links'> All User</h3>
<h3 className='links'>Add User</h3>

    </Toolbar>
   </AppBar>
  )
}
