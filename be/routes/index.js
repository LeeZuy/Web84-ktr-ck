import { Router } from "express";
import teacherController from "../controllers/teachers.js";
import teacherMiddleware from "../middlewares/teachers.js";
import teacherPositionController from "../controllers/teacher-positions.js";

const RootRouter = Router();

RootRouter.get('/teachers',teacherController.getTeachers);
RootRouter.post('/teachers',teacherMiddleware.createTeacher,teacherController.createTeacher);
RootRouter.get('/teacher-positions',teacherPositionController.getTeacherPosition);
RootRouter.post('/teacher-positions',teacherPositionController.createTeacherPosition)
export default RootRouter