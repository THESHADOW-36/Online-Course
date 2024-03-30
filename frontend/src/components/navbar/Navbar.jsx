import React, { useState } from 'react'
import { TabContext, TabList } from '@mui/lab'
import { AppBar, Avatar, Box, Button, Tab, Toolbar } from '@mui/material'
import { navButton, navProPic, navTab, navbar, navbarContent, navbarLogo } from './NavbarSx'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [value, setValue] = useState(1);
  const router = useNavigate();

  const loc = useLocation()

  const instructorPanel = loc.pathname === "/lecture-schedule"

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <AppBar sx={navbar}>
      <Toolbar>
        <Box sx={navbarLogo}>
          Mastery
        </Box>

        <Box sx={navbarContent}>
          <TabContext value={value}>
            {instructorPanel
              ?
              <Tab sx={navTab} value='3' onClick={() => router('/lecture-schedule')} label="Lecture Schedule" />
              :
              <TabList onChange={handleChange}>
                <Tab sx={navTab} value='1' onClick={() => router('/')} label="Courses" />
                <Tab sx={navTab} value='2' onClick={() => router('/user-list')} label="User List" />
              </TabList>
            }
          </TabContext>
          <Avatar sx={navProPic} onClick={() => router('/sign-in')} />
          {/* <Button sx={navButton} variant='contained' color='primary'>Sign In</Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
