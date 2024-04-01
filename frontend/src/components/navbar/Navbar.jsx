import React, { useEffect, useState } from 'react'
import { TabContext, TabList } from '@mui/lab'
import { AppBar, Avatar, Box, Button, Tab, Toolbar } from '@mui/material'
import { navButton, navProPic, navTab, navbar, navbarContent, navbarLogo } from './NavbarSx'
import { useLocation, useNavigate } from 'react-router-dom'
import { API } from '../../constant/Network'
import { URL } from '../../constant/Url'

const Navbar = () => {

  const router = useNavigate();
  const loc = useLocation()
  const [value, setValue] = useState(1);
  const [currentUser, setCurrentUser] = useState();
  console.log(currentUser)

  const getCurrentUser = () => {
    API.get(URL.getCurrentUser).subscribe({
      next(res) {
        // console.log(res.data.user)
        setCurrentUser(res.data?.user)
      },
      error(err) {
        console.log(err)
      }
    })
  }

  const isAdmin = currentUser?.role === 'Admin'

  const instructorPanel = loc.pathname === "/lecture-schedule"

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const logout = () => {
    localStorage.removeItem("userToken");
    router('/sign-in')
  }

  useEffect(() => {
    getCurrentUser();
  }, [])

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
                {isAdmin ?
                  <>
                    <Tab sx={navTab} value='1' onClick={() => router('/')} label="Courses" />
                    <Tab sx={navTab} value='2' onClick={() => router('/user-list')} label="User List" />
                  </>
                  :
                  <>
                    <Tab sx={navTab} value='3' onClick={() => router('/lecture-schedule')} label="Lecture Schedule" />
                  </>
                }
              </TabList>
            }
          </TabContext>
          <Avatar sx={navProPic} onClick={logout} />
          {/* <Button sx={navButton} variant='contained' color='primary'>Sign In</Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
