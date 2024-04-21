import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import SchedulePg from './pages/schedulePg/SchedulePg';
import Navbar from './components/navbar/Navbar';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import InstructorList from './pages/userList/UserList';
import LectureSchedule from './pages/instructorDashboard/LectureSchedule';
import SignIn from './pages/signIn/SignIn';
import { useEffect, useState } from 'react';
import { API } from './constant/Network';
import { URL } from './constant/Url';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#ff8800',
        main: '#ffa500',
        dark: '#ff9100',
        contrastText: '#232323'
      }
    }
  })

  const [currentUser, setCurrentUser] = useState();
  console.log(currentUser)

  const getCurrentUser = () => {
    API.get(URL.getCurrentUser)?.subscribe({
      next(res) {
        setCurrentUser(res.data?.user)
      },
      error(err) {
        console.log(err)
      }
    })
  }
  const loc = useLocation();
  const isLoggedIn = !!localStorage.getItem('userToken');
  const isAdmin = currentUser?.role === 'Admin'
  const isSignInPg = loc.pathname === "/sign-in";
  console.log("isSignInPg", isSignInPg)
  useEffect(() => {
    getCurrentUser();
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <Routes>
          {isLoggedIn ? (
            <Route path="/sign-in" element={<Navigate to="/" replace />} />
          ) : (
            <Route path="/sign-in" element={<SignIn />} />
          )}
        </Routes>

        {!isSignInPg &&
          <>
            <Navbar />
            <Box className='mainContent'>
              <Routes>
                {isLoggedIn ?
                  <>
                    {isAdmin &&
                      <>
                        <Route path='/' element={<SchedulePg />} />
                        <Route path='/user-list' element={<InstructorList />} />
                      </>
                    }
                    {!isAdmin &&
                      <Route path='/lecture-schedule' element={<LectureSchedule />} />
                    }
                  </>
                  :
                  <>
                    <Route path="*" element={<Navigate to="/sign-in" replace />} />
                  </>
                }
              </Routes>
            </Box>
          </>
        }

      </Box>
    </ThemeProvider>
  );
}

export default App;