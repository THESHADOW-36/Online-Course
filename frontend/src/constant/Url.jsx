// https://online-courses-w7zn.onrender.com
// http://localhost:8000
// Auth
const register = "https://online-courses-w7zn.onrender.com/api/v1/auth/register"; //post
const login = "https://online-courses-w7zn.onrender.com/api/v1/auth/login"; //post
const getAllUsers = "https://online-courses-w7zn.onrender.com/api/v1/auth/users"; //get
const getCurrentUser = "https://online-courses-w7zn.onrender.com/api/v1/auth/current-user"; //get
const getSingleUser = "https://online-courses-w7zn.onrender.com/api/v1/auth/user/"; //get
const editUser = "https://online-courses-w7zn.onrender.com/api/v1/auth/user/"; //put
const deleteUser = "https://online-courses-w7zn.onrender.com/api/v1/auth/user/"; //delete

// Course
const addLecture = "https://online-courses-w7zn.onrender.com/api/v1/course/lecture"; //post
const getLectures = "https://online-courses-w7zn.onrender.com/api/v1/course/lecture"; //get
const getSingleLecture = "https://online-courses-w7zn.onrender.com/api/v1/course/lecture/"; //get
const editLecture = "https://online-courses-w7zn.onrender.com/api/v1/course/lecture/"; //put
const deleteLecture = "https://online-courses-w7zn.onrender.com/api/v1/course/lecture/"; //delete

export const URL = {
   register,
   login,
   getAllUsers,
   getCurrentUser,
   getSingleUser,
   editUser,
   deleteUser,
   addLecture,
   getLectures,
   getSingleLecture,
   editLecture,
   deleteLecture
}