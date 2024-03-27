import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { LSCourseDescriptionSx, LSCourseDetailLay, LSCourseImg, LSCourseImgLay, LSCourseInstructorSx, LSCourseLevelSx, LSCourseNameSx, LSCourseTitle, LSGridItems, lectureSchedule, lectureScheduleLay } from './LectureScheduleSx'

const LectureSchedule = () => {
  const courseDB = [
    {
      courseName: 'React.js',
      level: 'Intermediate',
      description: 'Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!',
      date: '28-03-2024',
      duration: '03:25:00',
      batch: 'Morning',
      instructor: 'Dinesh',
      image: './asset/React.jpg'
    },
    {
      courseName: 'Python',
      level: 'Beginner',
      description: 'Demonstrate proficiency in using Python libraries such as Pandas & Numpy, and developing code using Jupyter Notebooks.            ',
      date: '29-03-2024',
      duration: '02:30:00',
      batch: 'Evening ',
      instructor: 'Sridhar',
      image: './asset/Python.png'
    },
    {
      courseName: 'React.js',
      level: 'Intermediate',
      description: 'Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!',
      date: '28-03-2024',
      duration: '03:25:00',
      batch: 'Morning',
      instructor: 'Dinesh',
      image: './asset/React.jpg'
    },
    {
      courseName: 'Python',
      level: 'Beginner',
      description: 'Demonstrate proficiency in using Python libraries such as Pandas & Numpy, and developing code using Jupyter Notebooks.            ',
      date: '29-03-2024',
      duration: '02:30:00',
      batch: 'Evening ',
      instructor: 'Sridhar',
      image: './asset/Python.png'
    },
    {
      courseName: 'Python',
      level: 'Beginner',
      description: 'Demonstrate proficiency in using Python libraries such as Pandas & Numpy, and developing code using Jupyter Notebooks.            ',
      date: '29-03-2024',
      duration: '02:30:00',
      batch: 'Evening ',
      instructor: 'Sridhar',
      image: './asset/Python.png'
    },
    {
      courseName: 'React.js',
      level: 'Intermediate',
      description: 'Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!',
      date: '28-03-2024',
      duration: '03:25:00',
      batch: 'Morning',
      instructor: 'Dinesh',
      image: './asset/React.jpg'
    },
    {
      courseName: 'Python',
      level: 'Beginner',
      description: 'Demonstrate proficiency in using Python libraries such as Pandas & Numpy, and developing code using Jupyter Notebooks.            ',
      date: '29-03-2024',
      duration: '02:30:00',
      batch: 'Evening ',
      instructor: 'Sridhar',
      image: './asset/Python.png'
    },
    {
      courseName: 'React.js',
      level: 'Intermediate',
      description: 'Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!',
      date: '28-03-2024',
      duration: '03:25:00',
      batch: 'Morning',
      instructor: 'Dinesh',
      image: './asset/React.jpg'
    },
  ]

  return (
    <Box sx={lectureSchedule}>
      <Box sx={lectureScheduleLay}>
        <Grid container >
          {courseDB.map((course, index) => (
            <Grid item xs={3} sx={LSGridItems}>
              <Box key={index} sx={LSCourseDetailLay}>
                <Box sx={LSCourseImgLay}>
                  <img style={LSCourseImg} src={course.image} alt="" />
                </Box>
                <Box>
                  <Box sx={LSCourseTitle}>
                    <Typography sx={LSCourseNameSx}>{course.courseName}</Typography>
                    <Typography sx={LSCourseLevelSx}>({course.level})</Typography>
                  </Box>
                  <Typography sx={LSCourseDescriptionSx}>{course.description}</Typography>
                  <Typography sx={LSCourseInstructorSx}><b>Instructor:</b> {course.instructor}</Typography>
                  <Box sx={LSCourseTitle}>
                    <Typography>Date: {course.date}</Typography>
                    <Typography>{course.duration}</Typography>
                    <Typography>{course.batch}</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default LectureSchedule
