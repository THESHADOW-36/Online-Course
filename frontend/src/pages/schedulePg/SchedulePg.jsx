import React, { useEffect, useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, InputLabel, Paper, TextField, Typography } from '@mui/material'
import { courseDetailLay, courseImg, courseImgLay, courseLevelSx, courseNameSx, courseTitle, courseDescriptionSx, schedulePg, schedulePgContent, schedulePgContentLay, schedulePgLay, courseInstructorSx, schedulePgContentTitle, courseTiming, courseDateSx, courseDurationSx, courseBatchSx } from './SchedulePgSx';
import { navButton } from '../../components/navbar/NavbarSx';
import { dialogActionButtons, dialogInputBox, dialogTitle, inputLabel, inputProps, textField } from '../userList/UserListSx';
import { API } from '../../constant/Network';
import { URL } from '../../constant/Url';
import toast from 'react-hot-toast'

const SchedulePg = () => {
  const [dialogAction, setDialogAction] = useState(false);
  const [scheduleList, setScheduleList] = useState({ courseName: '', level: '', description: '', date: '', duration: '', batch: '', instructor: '', image: '' });
  const [scheduleListDB, setScheduleListDB] = useState([]);
  console.log(scheduleList)

  const closeDialog = () => {
    setDialogAction(false)
    setScheduleList({ courseName: '', level: '', description: '', date: '', duration: '', batch: '', instructor: '', image: '' })
  }

  const handleChange = (event) => {
    setScheduleList((prevValue) => ({ ...prevValue, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    API.post(URL.addLecture, scheduleList).subscribe({
      next(response) {
        getCoursesData();
        console.log("response.data :", response?.response)
        if (response?.response?.data?.success == false) {
          toast.error(response?.response?.data?.message)
        }
        closeDialog();
      },
      error(error) {
        console.log(error)
      }
    })
  }

  const getCoursesData = () => {
    API.get(URL.getLectures).subscribe({
      next(response) {
        console.log("response.data :", response.data?.lecture)
        const modifiedData = response.data?.lecture.map((lec) => {
          const dateTime = new Date(lec.date);
          const date = dateTime.toISOString().split("T")[0];
          return { ...lec, date: date };
        });
        setScheduleListDB(modifiedData)
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
    getCoursesData();
  }, [])

  return (
    <Box sx={schedulePg}>
      <Box sx={schedulePgLay}>
        <Button sx={navButton} variant='contained' color='primary' onClick={() => setDialogAction(true)}>Schedule</Button>

        <Paper sx={schedulePgContentLay}>
          <Box sx={schedulePgContent}>
            <Box sx={schedulePgContentTitle}>Assigned Courses</Box>
            <Divider sx={{ border: '1px solid #ededed', margin: '8px 0px 16px' }} />
            {scheduleListDB ?
              <>
                {scheduleListDB.map((course, index) => (
                  <Box key={index} sx={courseDetailLay}>
                    <Box sx={courseImgLay}>
                      <img style={courseImg} src={course.image} alt="" />
                    </Box>
                    <Box sx={{ width: '70%' }}>
                      <Box sx={courseTitle}>
                        <Typography sx={courseNameSx}>{course.courseName}</Typography>
                        <Typography sx={courseLevelSx}>({course.level})</Typography>
                      </Box>
                      <Typography sx={courseDescriptionSx}>{course.description}</Typography>
                      <Typography sx={courseInstructorSx}><b>Instructor:</b> {course.instructor.name}</Typography>
                    </Box>
                    <Box sx={courseTiming}>
                      <Typography sx={courseDateSx}>{course.date}</Typography>
                      <Typography sx={courseBatchSx}>{course.batch}</Typography>
                      <Typography sx={courseBatchSx}>Batch</Typography>
                      <Typography sx={courseDurationSx}>{course.duration}</Typography>
                    </Box>
                  </Box>
                ))}
              </>
              :
              <Box sx={{ textAlign: 'center', fontSize: '30px' }}>No Data</Box>
            }
          </Box>
        </Paper>

        <Dialog open={dialogAction}>
          <DialogTitle sx={dialogTitle}>Schedule Course</DialogTitle>
          <Divider />
          <form onSubmit={handleSubmit}>
            <DialogContent>
              {['courseName', 'level', 'description', 'date', 'duration', 'batch', 'instructor', 'image'].map((title, index) => (
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
      </Box >
    </Box >
  )
}

export default SchedulePg;