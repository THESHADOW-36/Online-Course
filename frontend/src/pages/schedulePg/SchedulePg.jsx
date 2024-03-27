import React, { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, InputLabel, Paper, TextField } from '@mui/material'
import { schedulePg, schedulePgLay } from './SchedulePgSx';
import { navButton } from '../../components/navbar/NavbarSx';
import { dialogActionButtons, dialogInputBox, dialogTitle, inputLabel, inputProps, textField } from '../userList/UserListSx';

const SchedulePg = () => {
    const [dialogAction, setDialogAction] = useState(false);
    const [scheduleList, setScheduleList] = useState({ courseName: '', level: '', description: '', date: '', duration: '', instructor: '', image: '' });
    console.log(scheduleList)

    const closeDialog = () => {
        setDialogAction(false)
        setScheduleList({ courseName: '', level: '', description: '', date: '', duration: '', instructor: '', image: '' })
    }

    const handleChange = (event) => {
        setScheduleList((prevValue) => ({ ...prevValue, [event.target.name]: event.target.value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('hello')
        setScheduleList({ courseName: '', level: '', description: '', date: '', duration: '', instructor: '', image: '' })
    }

    const fontFormat = (title) => {
        const capitalizeTitle = title.charAt(0).toUpperCase() + title.slice(1);
        return capitalizeTitle.split(/(?=[A-Z])|_/).join(" ");
    }

    return (
        <Box sx={schedulePg}>
            <Box sx={schedulePgLay}>
                <Button sx={navButton} variant='contained' color='primary' onClick={() => setDialogAction(true)}>Schedule</Button>
                <Paper>
                    content
                </Paper>

                <Dialog open={dialogAction}>
                    <DialogTitle sx={dialogTitle}>Schedule Course</DialogTitle>
                    <Divider />
                    <form onSubmit={handleSubmit}>
                        <DialogContent>
                            {['courseName', 'level', 'description', 'date', 'duration', 'instructor', 'image'].map((title, index) => (
                                <Box sx={dialogInputBox}>
                                    <InputLabel sx={inputLabel}>{fontFormat(title)}</InputLabel>
                                    <TextField
                                        sx={textField}
                                        name={title}
                                        type={title === 'Password' ? 'password' : 'text'}
                                        InputProps={inputProps}
                                        value={scheduleList[title]}
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
    )
}

export default SchedulePg;