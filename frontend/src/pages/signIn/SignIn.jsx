import { Box, Button, InputLabel, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import { formLay, signIn, signInLay } from './SignInSx'
import toast from 'react-hot-toast'
import { API } from '../../constant/Network'
import { URL } from '../../constant/Url'

const SignIn = () => {
   const [userData, setUserData] = useState({ email: "", password: "" });
   console.log("UserData :", userData)

   const handleChange = (event) => {
      setUserData((prevValue) => ({ ...prevValue, [event.target.name]: event.target.value }))
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      API.post(URL.login, userData).subscribe({
         next(response) {
            console.log("response.data :", response.data)
            localStorage.setItem('userToken',response.data.token)
            toast.success("Logged In");
         },
         error(error) {
            console.log(error)
         }
      })
   }

   return (
      <Box sx={signIn}>
         <Box sx={signInLay}>
            <Paper sx={formLay}>
               <form onSubmit={handleSubmit}>
                  <Box>
                     <InputLabel>Email</InputLabel>
                     <TextField
                        name='email'
                        type='text'
                        value={userData.email}
                        onChange={handleChange}
                     />
                  </Box>
                  <Box>
                     <InputLabel>Password</InputLabel>
                     <TextField
                        name='password'
                        type='password'
                        value={userData.password}
                        onChange={handleChange}
                     />
                  </Box>
                  <Button type='submit' variant='contained'>Submit</Button>
               </form>
            </Paper>
         </Box>
      </Box>
   )
}

export default SignIn
