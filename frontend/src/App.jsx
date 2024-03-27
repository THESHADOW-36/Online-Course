import './App.css';
import { Route, Routes } from 'react-router-dom';
import SchedulePg from './pages/schedulePg/SchedulePg';
import Navbar from './components/navbar/Navbar';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import InstructorList from './pages/userList/UserList';

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
  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <Navbar />
        <Box className='mainContent'>
          <Routes>
            <Route path='/' element={<SchedulePg />} />
            <Route path='/userList' element={<InstructorList />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;