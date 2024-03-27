import { Router } from "express";
import { protecter } from "../middlewares/auth.js";
import { addLecture, deleteLecture, editLecture, getLectures, getSingleLecture } from "../controllers/lecture.js";

const course = Router();

course.post('/lecture', protecter, addLecture)
course.get('/lecture', protecter, getLectures)
course.get('/lecture/:id', protecter, getSingleLecture)
course.put('/lecture/:id', protecter, editLecture)
course.delete('/lecture/:id', protecter, deleteLecture)

export default course;