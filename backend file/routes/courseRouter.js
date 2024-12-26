import { Router } from 'express';
import { CourseController } from '../controllers/courseController.js';
import { isManagerAuthenticated, isTeacherAuthenticated } from '../middlewares/authmiddlewares.js';

const courseRouter = Router();


courseRouter.post('/course', CourseController.createCourse);
courseRouter.get('/course', CourseController.getAllCourses);
courseRouter.get('/unique-course/:unique_code', CourseController.getSingleCourseByUniqueId);
courseRouter.get('/h-course/:handle', isManagerAuthenticated, CourseController.getCourseByHandle);
courseRouter.put('/course', isManagerAuthenticated, CourseController.updateCourse);
courseRouter.delete('/course/:id', isManagerAuthenticated, CourseController.deleteCourse);

export default courseRouter;
