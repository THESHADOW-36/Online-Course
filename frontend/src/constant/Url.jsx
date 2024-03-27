
// Auth
const register = "http://localhost:8000/api/v1/auth/register"; //post
const login = "http://localhost:8000/api/v1/auth/login"; //post
const getAllUsers = "http://localhost:8000/api/v1/auth/users"; //get
const getCurrentUser = "http://localhost:8000/api/v1/auth/current-user"; //get
const getSingleUser = "http://localhost:8000/api/v1/auth/user/"; //get
const editUser = "http://localhost:8000/api/v1/auth/user/"; //put
const deleteUser = "http://localhost:8000/api/v1/auth/user/"; //delete

// Course
const addLecture = "http://localhost:8000/api/v1/course/lecture"; //post
const getLectures = "http://localhost:8000/api/v1/course/lecture"; //get
const getSingleLecture = "http://localhost:8000/api/v1/course/lecture/"; //get
const editLecture = "http://localhost:8000/api/v1/course/lecture/"; //put
const deleteLecture = "http://localhost:8000/api/v1/course/lecture/"; //delete

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