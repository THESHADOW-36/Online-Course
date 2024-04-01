import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { LSCourseDescriptionSx, LSCourseDetailLay, LSCourseImg, LSCourseImgLay, LSCourseInstructorSx, LSCourseLevelSx, LSCourseNameSx, LSCourseTiming, LSCourseTitle, LSGridItems, lectureSchedule, lectureScheduleLay } from './LectureScheduleSx'
import { API } from '../../constant/Network';
import { URL } from '../../constant/Url';

const LectureSchedule = () => {
  const [courseDB, setCourseDB] = useState([]);
  console.log(courseDB)
  // const courseDB = [
  //   {
  //     courseName: 'React.js',
  //     level: 'Intermediate',
  //     description: 'Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!',
  //     date: '27-03-2024',
  //     duration: '03:25:00',
  //     batch: 'Morning',
  //     instructor: 'Dinesh',
  //     image: './asset/React.jpg'
  //   },
  //   {
  //     courseName: 'Python',
  //     level: 'Beginner',
  //     description: 'Demonstrate proficiency in using Python libraries such as Pandas & Numpy, and developing code using Jupyter Notebooks.            ',
  //     date: '28-03-2024',
  //     duration: '02:30:00',
  //     batch: 'Evening ',
  //     instructor: 'Dinesh',
  //     image: './asset/Python.png'
  //   },
  //   {
  //     courseName: 'React.js',
  //     level: 'Intermediate',
  //     description: 'Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!',
  //     date: '29-03-2024',
  //     duration: '03:25:00',
  //     batch: 'Morning',
  //     instructor: 'Dinesh',
  //     image: './asset/React.jpg'
  //   },
  //   {
  //     courseName: 'Python',
  //     level: 'Beginner',
  //     description: 'Demonstrate proficiency in using Python libraries such as Pandas & Numpy, and developing code using Jupyter Notebooks.            ',
  //     date: '30-03-2024',
  //     duration: '02:30:00',
  //     batch: 'Evening ',
  //     instructor: 'Dinesh',
  //     image: './asset/Python.png'
  //   }
  // ]

  const getCourseData = () => {
    API.get(URL.getLectures).subscribe({
      next(response) {
        console.log("response.data :", response.data?.lecture)
        const modifiedData = response.data?.lecture.map((lec) => {
          const dateTime = new Date(lec.date);
          const date = dateTime.toISOString().split("T")[0];
          return { ...lec, date: date };
        });
        setCourseDB(modifiedData)
      },
      error(error) {
        console.log(error)
      }
    })
  }

  useEffect(() => {
    getCourseData();
  }, [])

  return (
    <Box sx={lectureSchedule}>
      <Box sx={lectureScheduleLay}>
        <Grid container >
          {courseDB.map((course, index) => (
            <Grid key={index} item xs={3} sx={LSGridItems}>
              <Box sx={LSCourseDetailLay}>
                <Box sx={LSCourseImgLay}>
                  <img style={LSCourseImg} src={course.image} alt="" />
                </Box>
                <Box>
                  <Box sx={LSCourseTitle}>
                    <Typography sx={LSCourseNameSx}>{course.courseName}</Typography>
                    <Typography sx={LSCourseLevelSx}>({course.level})</Typography>
                  </Box>
                  <Typography sx={LSCourseDescriptionSx} className='LSCourseDescriptionStyle'>{course.description}</Typography>
                  <Typography sx={LSCourseInstructorSx}><b>Instructor:</b> {course.instructor.name}</Typography>
                  <Box sx={LSCourseTiming}>
                    <Typography> <b>Batch</b> {course.batch}</Typography>
                    <Typography sx={{ marginRight: '8px' }}> <b>Timing:</b> {course.duration}</Typography>
                    <Typography sx={{ marginRight: '8px' }}> <b>Date:</b> {course.date}</Typography>
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
