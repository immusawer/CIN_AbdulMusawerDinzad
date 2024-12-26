import { Router } from "express";
import { TeacherController } from "../controllers/teacherController.js";
import { isManagerAuthenticated, isTeacherAuthenticated } from "../middlewares/authmiddlewares.js";

const teacherRoutes = Router();

teacherRoutes.post("/teacher", TeacherController.createTeacher);
teacherRoutes.get("/teacher", isManagerAuthenticated, TeacherController.getAllTeachers);
teacherRoutes.get("/teacher/:courseName", TeacherController.getTeachersByCourseName);
teacherRoutes.get("/handle-teacher/:handle", isTeacherAuthenticated, TeacherController.getSingleTeacher); // Update route to accept handle as parameter

export default teacherRoutes;
