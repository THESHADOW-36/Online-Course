import React, { useEffect, useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, InputLabel, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import { navButton } from '../../components/navbar/NavbarSx'
import { dialogActionButtons, dialogInputBox, dialogTitle, inputLabel, inputProps, instructorList, instructorListLay, tableBodyCell, tableContainer, tableHeadCell, textField } from './UserListSx'
import { API } from '../../constant/Network'

const InstructorList = () => {
  const [dialogAction, setDialogAction] = useState(false);
  const [addUserList, setAddUserList] = useState({ name: '', email: '', role: '', gender: '' });
  const [userListDB, setUserListDB] = useState([]);
  console.log("userListDB :", userListDB)

  const closeDialog = () => {
    setDialogAction(false)
    setAddUserList({ name: '', email: '', role: '', gender: '' })
  }

  const handleChange = (event) => {
    setAddUserList((prevValue) => ({ ...prevValue, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('hello')
    setAddUserList({ name: '', email: '', role: '', gender: '' })
  }

  const addUser = () => {
    API.get('http://localhost:8000/user').subscribe({
      next(response) {
        console.log("response.data :", response.data)
        setUserListDB(response.data)
      },
      error(error) {
        console.log(error)
      }
    })
  }

  const fontFormat = (title) => {
    const capitalizeTitle = title.charAt(0).toUpperCase() + title.slice(1);
    return capitalizeTitle.split(/(?=[A-Z])|_/).join(" ");
  }

  useEffect(() => {
    addUser();
  }, [])

  return (
    <Box sx={instructorList}>
      <Box sx={instructorListLay}>
        <Box>
          <Button sx={navButton} variant='contained' color='primary' onClick={() => setDialogAction(true)}>Add User</Button>
          <Paper sx={{ boxShadow: '0px 0px 5px 0px grey', marginTop: '14px' }}>
            <TableContainer sx={tableContainer}>
              <Table>
                <TableHead>
                  <TableRow>
                    {['Name', 'Email', 'Role', 'Gender', 'Action'].map((title, index) => (
                      <TableCell key={index} sx={tableHeadCell}>{title}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userListDB.map((id, index) => (
                    <TableRow key={index}>
                      <TableCell sx={tableBodyCell}>{id.name}</TableCell>
                      <TableCell sx={tableBodyCell}>{id.email}</TableCell>
                      <TableCell sx={tableBodyCell}>{id.role}</TableCell>
                      <TableCell sx={tableBodyCell}>{id.gender}</TableCell>
                      <TableCell sx={tableBodyCell}>O X</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {/* <TablePaginationActions
                count={100}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              /> */}
            </TableContainer>
          </Paper>

          <Dialog open={dialogAction}>
            <DialogTitle sx={dialogTitle}>Add User</DialogTitle>
            <Divider />
            <form onSubmit={handleSubmit}>
              <DialogContent>
                {['role', 'name', 'email', 'gender'].map((title, index) => (
                  <Box sx={dialogInputBox}>
                    <InputLabel sx={inputLabel}>{fontFormat(title)}</InputLabel>
                    <TextField
                      sx={textField}
                      name={title}
                      type={title === 'Password' ? 'password' : 'text'}
                      InputProps={inputProps}
                      value={addUserList[title]}
                      onChange={handleChange}
                    // onBlur={ }
                    // helperText={ }
                    />
                  </Box>
                ))}
              </DialogContent>
              <Divider />
              <DialogActions sx={dialogActionButtons}>
                <Button variant='contained' sx={navButton} onClick={closeDialog}>Cancle</Button>
                <Button variant='contained' sx={navButton} type='submit'>Submit</Button>
              </DialogActions>
            </form>
          </Dialog>
        </Box>
      </Box>
    </Box >
  )
}

export default InstructorList
