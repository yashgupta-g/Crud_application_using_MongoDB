import React from 'react'
import {AppBar, Toolbar , styled } from '@mui/material';
import "./Header.css"
import { NavLink } from 'react-router-dom';
import App from '../App';
export default function Header() {

const Header = styled(AppBar)`
background: #111111; 


`
const Tabs = styled(NavLink)`
margin: 20px ;
color : inherit;
text-decoration: none ;
`


  return (
   <Header position='static'>
    <Toolbar>
    <Tabs to= "/ "> CRUD APP </Tabs>
    <Tabs to="/all"> All User  </Tabs>
    <Tabs to ="/add"> Add User  </Tabs>

    </Toolbar>
    </Header>
  )}