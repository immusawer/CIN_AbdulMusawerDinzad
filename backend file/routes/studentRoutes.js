import { Router } from 'express';
import { StudentsController } from '../controllers/studentsContoller.js';
import { isTeacherAuthenticated } from '../middlewares/authmiddlewares.js';

const StudentRoutes = Router();

// Auth route
StudentRoutes.post('/add-student', isTeacherAuthenticated, StudentsController.addaStudent);
StudentRoutes.get('/student/:id ', isTeacherAuthenticated, StudentsController.getStudentById);
StudentRoutes.get('/student', StudentsController.getAllStudents);
StudentRoutes.get('/student/:name/:course_name/:class_name/:teacher_name', isTeacherAuthenticated, StudentsController.getStudentOfaClass);
StudentRoutes.get('/course-student/:course_name', StudentsController.getAllStudentsofCourse);

StudentRoutes.get('/c-student/:course_name/:class_name/:teacher_name', StudentsController.getAllStudentsOfAclass);
StudentRoutes.delete('/student/:id', isTeacherAuthenticated, StudentsController.deleteStudent)
StudentRoutes.put('/student/:id', isTeacherAuthenticated, StudentsController.updateStudent)

export default StudentRoutes;
