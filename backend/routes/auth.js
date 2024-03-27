import { Router } from "express";
import { deleteUser, editUser, getAllUsers, getCurrentUser, getSingleUser, login, register } from "../controllers/auth.js";
import { protecter } from "../middlewares/auth.js";

const auth = Router();

auth.post('/register', register)
auth.post('/login', login)
auth.get('/users', protecter, getAllUsers)
auth.get('/current-user', protecter, getCurrentUser)
auth.get('/user/:id', protecter, getSingleUser)
auth.put('/user/:id', protecter, editUser)
auth.delete('/user/:id', protecter, deleteUser)

export default auth;